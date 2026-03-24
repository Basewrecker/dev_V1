import { useState } from "react";
import type { Route } from "./+types/index";
import type { Project } from "~/types";
import ProjectCard from "~/components/ProjectCard";

export async function clientLoader({request}: Route.ClientLoaderArgs): Promise<{projects: Project[]}> {
  const res = await fetch('http://localhost:8000/projects')
  const data = await res.json();

  return {projects: data};
}

const ProjectsPage = ({loaderData}: Route.ComponentProps) => {
  const {projects} = loaderData as {projects: Project[]};

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;

  const totalPage = Math.ceil(projects.length / projectsPerPage);
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

  const renderPagination = () => {
    return (
      <div className="flex justify-center gap-2 mt-8">
      {Array.from({length: totalPage, }, (_, index) => (
        <button key = {index + 1} className={`px-3 py-1 cursor-pointer rounded ${
          currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'
        }`}
        onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
    )
    
  }

  return (
    <>
      <h2 className = "text-3xl text-white font-bold mb-8">
       Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {currentProjects.map((project) => (
             <ProjectCard key = {project.id} project = {project}/>
          ))}
      </div>
      {totalPage > 1 && renderPagination()}
    </>
  )
}

export default ProjectsPage;
