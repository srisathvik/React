import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProjectSelected() {
    return(
        <div className="mt-24 text-center w-2/3">
            <img 
                src={noProjectImage} 
                alt="an empty tasks list"
                className="w-16 h-16 object-contain mx-auto"
                />
            <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
            <p>Select a project or get started with new one</p>
            <p className="mt-8">
                <Button>Add New Project</Button>
            </p>
        </div>
    )
}