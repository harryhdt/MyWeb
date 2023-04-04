export interface BasePageType {
	// from github
	title: string;
	published: string;
	number: number;
	url: string;
	updated?: string | null;

	// custom
	path?: string;
	lang?: string;
	comment?: boolean;
	excerpt?: string;
}

export interface Page extends BasePageType {
	priority?: number;
}

export interface Post extends BasePageType {
	labels?: { name: string; color: string }[];
	timezone?: string;
}
