import {defineStore} from 'pinia'
import { ref } from "vue"
import { Post, Comment } from '../types/common'

export const usePostStore = defineStore('post', () => {
	const allPosts = ref<Post[]>([])
	const allComments = ref<Comment[]>([])

	function createPost(post: Post) {
		getPosts()
		allPosts.value.push(post)
		localStorage.setItem('posts', JSON.stringify(allPosts.value));
	}

	function getPosts() {
		const posts = localStorage.getItem('posts')
		allPosts.value = posts !== null ? JSON.parse(posts) : [];

		// перенести этот код в другой файл
		// const comments = localStorage.getItem('comments')
		// allComments.value = comments !== null ? JSON.parse(comments) : [];

		// for(let i = 0; i < allPosts.value?.length; i++){
		// 	const postComment = allComments.value.filter((f) => f.idPost === allPosts.value[i].id)
		// 	allPosts.value[i].comments = postComment
		// }

	}
	
	return { allPosts, createPost, getPosts }
})