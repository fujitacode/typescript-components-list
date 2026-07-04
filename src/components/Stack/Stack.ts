import "./Stack.css";

export const Stack = (
    content: string, 
    size: "sm" | "md" | "lg" = "md"
) => {
	return (`
        <div class="stack stack--${size}" >
            ${content}
        </div>
        `);
};
