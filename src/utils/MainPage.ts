export const CopyToClipboard = async (url: string) => {
	await window.navigator.clipboard.writeText(url);
};
