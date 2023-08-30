export function disableIfDeviceIsDesktop() {
	const isMobile: boolean = window.innerWidth > 1000;
	return (target: any, key: string, descriptor: any) => {
		if(isMobile) {
			descriptor.value = () => {};
		}
	};
}
