import {defineStore} from 'pinia'
import { ref } from "vue"
import { Post, Comment } from '../types/common'

import { useCommentStore } from './commentStore'

export const usePostStore = defineStore('post', () => {
	const commentStore = useCommentStore()

	const allPosts = ref<Post[]>([])
	const allComments = ref<Comment[]>([])

	function createPost(post: Post) {
		getPosts()
		allPosts.value.push(post)
		localStorage.setItem('posts', JSON.stringify(allPosts.value))
	}

	function getPosts() {
		const posts = localStorage.getItem('posts')
		allPosts.value = posts !== null ? JSON.parse(posts) : []
	}

	function getPostsComments(){
		getPosts()
		commentStore.getComments()
		allComments.value = commentStore.allComments

		for(let i = 0; i < allPosts.value?.length; i++){
			const postComments = allComments.value.filter((f) => f.idPost === allPosts.value[i].id)
			allPosts.value[i].comments = postComments
		}
	}

	function sortPosts(posts: Post[]){
		return posts.sort((a, b) => {
			return Date.parse(b.dateTime) - Date.parse(a.dateTime);
		});
	}

	function getPostId(id: number) {
		getPosts()
		getPostsComments()

		return allPosts.value.find((f) => f.id === id)
	}

	function editPost(post: Post) {
		getPosts()
		allPosts.value[post.id] = post
		localStorage.setItem('posts', JSON.stringify(allPosts.value))
	}

	function deletePost(idPost: number) {
		getPosts()
		getPostsComments()

		let comments = allPosts.value.find((f) => f.id === idPost)?.comments
		if(comments){
			for(let i = 0; i < comments?.length; i++){
				commentStore.deleteComment(comments[i].id)
			}
		}

		allPosts.value = allPosts.value.filter((f) => f.id !== idPost)
		localStorage.setItem('posts', JSON.stringify(allPosts.value))
	}
	
	return { allPosts, createPost, getPosts, getPostsComments, sortPosts, editPost, getPostId, deletePost }
})