import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';
import editor from '../../assets/editor.png';
import music from '../../assets/music.jpg';
import kanban from '../../assets/kanban.jpeg';
import quiz from '../../assets/quiz.jpg';
import webb from '../../assets/webscapper.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={music}
          link="https://github.com/AbhinavKRN/MusicStoreManagement"
          h3="MusicStoreManagement"
          p="Backend project using SpringBoot to make a music store management system."
        />
        <ProjectCard
          src={editor}
          link="https://github.com/AbhinavKRN/ImageEditor"
          h3="Image Editor"
          p="A backend project using JavaFX -> you can simply edit your images using this codebase!"
        />
        <ProjectCard
          src={webb}
          link="https://github.com/AbhinavKRN/Web-Scraping-and-Comparing-Prices-on-Amazon-and-Snapdeal"
          h3="WebScrapper"
          p="Python project in which user types the product to compare it from two different websites i.e. Amazon and Snapdeal."
        />
        <ProjectCard
          src={kanban}
          link="https://github.com/AbhinavKRN/Kanban_Board"
          h3="Kanban Board"
          p=" It allows users to add tasks with different priorities and manage them on a Kanban board"
        />
        <ProjectCard
          src={quiz}
          link="https://github.com/AbhinavKRN/Quiz-App"
          h3="Quiz App"
          p="This provides a platform where user can give quiz."
        />
      </div>
    </section>
  );
}

export default Projects;
