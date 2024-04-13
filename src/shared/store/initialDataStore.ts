import {defineStore} from 'pinia'

import { POSTS, COMMENTS, USERS } from '../constants/initialData'

import { usePostStore } from './postStore'
import { useCommentStore } from './commentStore'
import { useUserStore } from './userStore'

export const useInitialDataStore = defineStore('initialData', () => {
	const postStore = usePostStore()
	const commentStore = useCommentStore()
	const userStore = useUserStore()

	function initializeDataPosts() {
		for(let i = 0; i < POSTS.length; i++){
			postStore.createPost(POSTS[i])
		}
	}

	function initializeDataComments() {
		for(let i = 0; i < COMMENTS.length; i++){
			commentStore.createComment(COMMENTS[i])
		}
	}

	function initializeDataUsers() {
		for(let i = 0; i < USERS.length; i++){
			userStore.createUser(USERS[i])
		}
	}

	function initializeData() {
		// Проверка наличия данных в local storage и инициализация начальных данных при необходимости
		if (!localStorage.getItem("posts")) initializeDataPosts()
		if (!localStorage.getItem("comments")) initializeDataComments()
		if (!localStorage.getItem("users")) initializeDataUsers()
	}

	return { initializeData }

})