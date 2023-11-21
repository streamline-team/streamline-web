import { Search } from 'react-feather'

const ExampleComponent = (): JSX.Element => {

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative">
                <input className="w-80 align-middle h-12 rounded-xl shadow-lg pl-12 pr-4" placeholder="Search tasks..." />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                   <Search></Search>
                </div>
            </div>
        </div>
    )

}

export default ExampleComponent