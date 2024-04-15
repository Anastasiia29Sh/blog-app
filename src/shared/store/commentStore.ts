import {defineStore} from 'pinia'
import { ref } from "vue"
import { Comment } from '../types/common'

export const useCommentStore = defineStore('comment', () => {
	const allComments = ref<Comment[]>([])

	function createComment(comment: Comment) {
		getComments()
		allComments.value.push(comment)
		localStorage.setItem('comments', JSON.stringify(allComments.value))
	}

	function getComments() {
		const comments = localStorage.getItem('comments')
		allComments.value = comments !== null ? JSON.parse(comments) : []
	}

	function deleteComment(idComment: number) {
		getComments()
		allComments.value = allComments.value.filter((f) => f.id !== idComment)
		localStorage.setItem('comments', JSON.stringify(allComments.value))
	}
	
	return { allComments, createComment, getComments, deleteComment }
})