import {defineStore} from 'pinia'
import { ref } from "vue"
import { Post, User } from '../types/common'

import { usePostStore } from './postStore'

export const useUserStore = defineStore('user', () => {
	const postStore = usePostStore()

	const allPosts = ref<Post[]>([])
	const allUsers = ref<User[]>([])
	const userOnePost = ref<User>()

	function createUser(user: User) {
		getUsers()
		allUsers.value.push(user)
		localStorage.setItem('users', JSON.stringify(allUsers.value))
	}

	function getUsers() {
		const users = localStorage.getItem('users')
		allUsers.value = users !== null ? JSON.parse(users) : []
	}

	function getUsersPosts(){
		getUsers()
		postStore.getPostsComments()
		allPosts.value = postStore.allPosts

		for(let i = 0; i < allUsers.value?.length; i++){
			const posts = allPosts.value.filter((f) => f.userInfoId === allUsers.value[i].id)
			allUsers.value[i].post = posts
		}
	}

	function getUserOnePost(idPost: number) {
		userOnePost.value = allUsers.value.find((f) => f.post?.find((p) => p.id === idPost))
	}
	
	return { allUsers, userOnePost, createUser, getUsers, getUsersPosts, getUserOnePost }
})