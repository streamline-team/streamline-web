import { describe, vi, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ToDoMain from './index.tsx'

describe('ToDoMain Tests', () => {
  test('renders ToDoMain', () => {
    vi.mock('../../services/services-hook.ts', () => {
      const useServicesAPI = ({ testId }: { testId: string }): Array<(() => unknown) | null> | undefined => {
        switch (testId) {
          case 'list-tasks':
            return [
              () => {
                return [{
                  id: 1,
                  title: 'test!',
                  description: 'Just a simple description with some long text!',
                  done: false,
                  dueAt: '2023-10-11T19:10:00.000Z',
                  priority: 5,
                  createdAt: '2023-12-06T15:03:11.000Z',
                  updatedAt: '2023-12-06T15:03:11.000Z',
                  tags: []
                }]
              },
              null
            ]
          case 'list-tags':
            return [
              async () => {
                return [{
                  id: 1,
                  name: 'Test Tag',
                  background: '#4287F5',
                  createdAt: '2023-12-06T15:14:57.000Z',
                  updatedAt: '2023-12-06T15:14:57.000Z'
                }]
              },
              null
            ]
          case 'update-task':
            return [
              () => {
                return {
                  id: 1,
                  title: 'test!',
                  description: 'Just a simple description with some long text!',
                  done: false,
                  dueAt: '2023-10-11T19:10:00.000Z',
                  priority: 1,
                  createdAt: '2023-12-06T15:03:11.000Z',
                  updatedAt: '2023-12-06T15:18:34.875Z',
                  tags: []
                }
              },
              null
            ]
          case 'delete-task':
            return [
              () => { return {} },
              null
            ]
          case 'add-tag-to-task':
            return [
              () => { return {} },
              null
            ]
          case 'remove-tag-from-task':
            return [
              () => { return {} },
              null
            ]
          case 'create-tag':
            return [
              () => { return {} },
              null
            ]
          case 'delete-tag':
            return [
              () => { return {} },
              null
            ]
        }
      }

      return { useServicesAPI }
    })

    render(<ToDoMain />)
  })
  test('renders task list', () => {
    expect(screen.getByPlaceholderText('Search tasks...'))
  })
})
