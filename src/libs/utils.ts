//余計な余白を消す
export const cn = (...args: (string | undefined | null | false)[]) => {
	return args.filter(Boolean).join(" ");
};
