import React, { useEffect, useState, useRef } from 'react'
import { useServicesAPI } from '../../services/services-hook.ts'
import { RequestMethod } from '../../services/types.ts'

interface tagsProps {
  id: number
  name: string
  background: string | null
  createdAt: string
}

const adjustColorContrast = (color: string): string => {
  const hexToRgb = (hex: string): number[] => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    hex = hex.replace(shorthandRegex, (r, g, b) => r + r + g + g + b + b)
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16)
        ]
      : [0, 0, 0]
  }

  const calculateBrightness = (rgb: number[]): number => {
    return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000
  }

  const rgb = hexToRgb(color)
  if (!rgb) {
    throw new Error('Invalid color format')
  }

  const brightness = calculateBrightness(rgb)
  const textColor =
    brightness > 128 ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)'
  return textColor
}

export const Tag: React.FC<{
  tag: tagsProps
  onRemove: (tag: tagsProps) => void
}> = ({ tag, onRemove }) => {
  // Usage in your component
  return (
    <div
      className={'flex items-center justify-center px-2 py-1 mb-2 mr-2 text-sm font-medium rounded-md'}
      style={{
        background: tag.background ? tag.background : '#000000',
        color: adjustColorContrast(tag.background!)
      }}
    >
      <span>{tag.name}</span>
      <button
        className="ml-2"
        style={{ color: adjustColorContrast(tag.background!) }}
        onClick={() => {
          onRemove(tag)
        }}
      >
        X
      </button>
    </div>
  )
}

interface tagsProps {
  id: number
  name: string
  background: string | null
  createdAt: string
}

export const TagPicker: React.FC<{
  tags: tagsProps[]
  onAdd: (tag: tagsProps) => void
  onRemove: (tag: tagsProps) => void
}> = ({ onAdd, onRemove, tags }) => {
  const [currentTag, setCurrentTag] = useState('')
  const [color, setColor] = useState('#000000')

  const [CreateTag, CreateTagsResponse] = useServicesAPI({
    endpoint: 'tag',
    method: RequestMethod.POST,
    testId: 'create-tag'
  })

  const toggleDropdown = (): void => {
    setDropdownOpen(!dropdownOpen)
  }

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [currentTags, setCurrentTags] = useState<tagsProps[]>(tags)
  const [DeleteTag] = useServicesAPI({
    endpoint: 'tag',
    method: RequestMethod.DELETE,
    testId: 'delete-tag'
  })

  const handleRemoveTag = (tag: tagsProps): void => {
    DeleteTag({ endpoint: `tag/${tag.id}` })
      .then(() => {
        const updatedTags = currentTags.filter((t) => t.id !== tag.id)
        setCurrentTags(updatedTags)
        onRemove(tag)
      })
      .catch((error) => {
        console.error('Error deleting tag:', error)
      })
  }

  const handleAddTag = (): void => {
    if (currentTag.trim() !== '') {
      const existingTag = tags.find((tag) => tag.name === currentTag)
      if (existingTag) {
        onAdd(existingTag)
      } else {
        CreateTag({
          body: { name: currentTag, background: color.toUpperCase() }
        })
      }
      setCurrentTag('')
      setColor('#000000')
    }
  }

  useEffect(() => {
    if (CreateTagsResponse) {
      onAdd(CreateTagsResponse as tagsProps)
    }
  }, [CreateTagsResponse, onAdd])

  const [selectedTags, setSelectedTags] = useState<tagsProps[]>([])

  const handleCheckboxChange = (tag: tagsProps, isChecked: boolean): void => {
    if (isChecked) {
      setSelectedTags([...selectedTags, tag])
      onAdd(tag)
    } else {
      setSelectedTags(selectedTags.filter((t) => t.id !== tag.id))
      onRemove(tag)
    }
  }

  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const filteredTags = tags.filter((tag) =>
      tag.name.toLowerCase().includes(currentTag.toLowerCase())
    )
    setCurrentTags(filteredTags)
  }, [currentTag, tags])

  return (
    <div className="flex items-center mt-4">
      <div>
        <input
          list="tags"
          type="text"
          className="px-2 py-1 mr-2 text-sm border border-gray-300 rounded"
          placeholder="Enter or select tag"
          value={currentTag}
          onChange={(e) => { setCurrentTag(e.target.value) }}
          onClick={toggleDropdown}
        />
        <div ref={dropdownRef}>
          {dropdownOpen && currentTags.length > 0 && (
            <div className="absolute z-10 w-64 mt-2 overflow-y-auto bg-black border border-gray-200 rounded shadow-lg max-h-60">
              {currentTags.map((tag) => (
                <label
                  key={tag.id}
                  className="flex items-center px-4 py-2"
                  style={{
                    background: tag.background ? tag.background : '#000000',
                    border: '1px solid gray',
                    color: adjustColorContrast(tag.background!)
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedTags.some((t) => t.id === tag.id)}
                    onChange={(e) => { handleCheckboxChange(tag, e.target.checked) }
                    }
                  />
                  <span className="ml-2">{tag.name}</span>

                  <button
                    className="ml-2"
                    onClick={() => {
                      handleRemoveTag(tag)
                    }}
                  >
                    X
                  </button>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
      <input
        type="color"
        className="w-8 h-8 mr-2 rounded"
        value={color}
        onChange={(e) => { setColor(e.target.value) }}
      />
      <button
        className="px-4 py-2 text-sm font-medium text-white bg-black rounded"
        onClick={handleAddTag}
      >
        Add Tag
      </button>
    </div>
  )
}
