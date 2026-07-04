export const Heading = (
	content: string,
	size: "1" | "2" | "3" | "4" | "5" | "6",
	align?: "center" | "right",
	className: string = "",
) => {
	return `
        <h${size} class="heading heading--size-${size} heading--align-${align} ${className}">
            ${content}
        </h${size}>
    `;
};
