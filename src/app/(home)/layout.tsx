import { Leftbar } from '@/modules/homepage/ui/components/leftbar';
import { Rightbar } from '@/modules/homepage/ui/components/rightbar';
import React from 'react';

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div className="container mx-auto py-5">
			<div className="grid grid-cols-4 gap-5">
				<Leftbar />
				<main className="col-span-2">{children}</main>
				<Rightbar />
			</div>
		</div>
	);
};

export default Layout;
