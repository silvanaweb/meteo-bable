import { useEffect, useState } from "react";

export type WinSize = {
	width: number;
	height: number;
};

// create a reusable custom hook that fetch the window height and width on resize
const useWindowSize: () => WinSize = () => {
	const [size, setSize] = useState<WinSize>({ width: window.innerWidth, height: window.innerHeight });

	useEffect(() => {
		const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
		window.addEventListener("resize", handleResize);
		// remove the listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return size;
};

export { useWindowSize };
