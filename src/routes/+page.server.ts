export const load: any = async ({ getClientAddress }: any) => {
	return {
		ip: getClientAddress()
	};
};
