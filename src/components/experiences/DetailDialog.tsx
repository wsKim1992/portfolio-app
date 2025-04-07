import DetailHeaderInfo from "@components/experiences/DetailHeaderInfo";
import DialogContent from "@components/experiences/DialogContent";
import Role from "@components/experiences/Role";

const DetailDialogContent = () => {
	return (
		<DialogContent HeaderComp={<DetailHeaderInfo />}>
			<Role />
		</DialogContent>
	);
};

export default DetailDialogContent;
