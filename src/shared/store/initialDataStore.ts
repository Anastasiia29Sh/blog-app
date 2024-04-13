import {defineStore} from 'pinia'
// import { Post } from '../types/common'
import { POSTS } from '../constants/initialData'
import { usePostStore } from './postStore';

export const useInitialDataStore = defineStore('initialData', () => {
	const postStore = usePostStore()

	function initializeData() {
		for(let i = 0; i < POSTS.length; i++){
			postStore.createPost(POSTS[i])
		}
	}

	return { initializeData }

})