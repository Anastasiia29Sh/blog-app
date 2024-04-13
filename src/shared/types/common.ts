export interface Post {
  id: number
  title: string,
  briefDescription: string,
  fullDescription: string,
  userInfoId: number,
  dateTime: string,
  comments?: Comment[]
}

export interface Comment {
	id: number,
	idPost: number,
	textComment: string,
	userInfo: string,
	email: string,
	dateTime: string,
}

export interface User {
	id: number,
	fullName: string,
	blogName: string,
	post?: Post[]
}
