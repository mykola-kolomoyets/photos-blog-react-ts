export type Photo = {
	id: string;
	
	albumId: string;
	
	title: string;
	
	url: string;
	thumbnailUrl: string;
}

export type PhotoDetails = Photo & {
	albumTitle: string;
}