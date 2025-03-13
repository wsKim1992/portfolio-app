import { isSubNavKey } from "@utils/Common";

export const CopyToClipboard = async (url: string) => {
	await window.navigator.clipboard.writeText(url);
};

export const ScrollIntoComponent = ({
	hash,
	Elem,
	options = { behavior: "smooth", block: "center", inline: "center" },
}: {
	hash: string;
	Elem: HTMLElement;
	options?: ScrollIntoViewOptions;
}) => {
	const path = hash.split("#")[1];
	if (isSubNavKey(path)) {
		Elem.scrollIntoView(options);
	}
};
