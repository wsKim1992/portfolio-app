import { Title } from "@components/Common.style";
import {
	ProjectBox,
	ProjectCard,
	ProjectCardSlider,
	ProjectFlipper,
	ProjectInner,
} from "@components/experiences/Common.style";

const Project = () => {
	return (
		<ProjectCard>
			<ProjectInner className="flip-inner">
				<ProjectFlipper className="flip-front">front</ProjectFlipper>
				<ProjectFlipper className="flip-back">back</ProjectFlipper>
			</ProjectInner>
		</ProjectCard>
	);
};

const Projects = () => {
	return (
		<ProjectBox>
			<Title as="h4" css={{ margin: "0px", fontSize: "1.6rem" }}>
				Projects
			</Title>
			<ProjectCardSlider>
				<Project />
				<Project />
			</ProjectCardSlider>
		</ProjectBox>
	);
};

export default Projects;
