import * as zod from 'zod'
import { FULL_TEXT_MAN_LENGTH, SHORT_TEXT_MAX_LENGTH, SMALL_TEXT_MAX_LENGTH, MAX_LENGTH_ERROR_MESSAGE, FORM_ERROR_MESSAGE } from '../constants'

export const POST_CREATE_SCHEMA = zod.object({
	id: zod.number(),
	title: zod.string({ required_error: FORM_ERROR_MESSAGE.REQUIRED }).min(1, FORM_ERROR_MESSAGE.REQUIRED).max(SMALL_TEXT_MAX_LENGTH, MAX_LENGTH_ERROR_MESSAGE.SMALL_TEXT),
	briefDescription: zod.string({ required_error: FORM_ERROR_MESSAGE.REQUIRED }).min(1, FORM_ERROR_MESSAGE.REQUIRED).max(SHORT_TEXT_MAX_LENGTH, MAX_LENGTH_ERROR_MESSAGE.SHORT_TEXT),
	fullDescription: zod.string().max(FULL_TEXT_MAN_LENGTH, MAX_LENGTH_ERROR_MESSAGE.FULL_TEXT).or(zod.literal('')).optional(),
	userInfoId: zod.number(),
	dateTime: zod.string(),
})

export type POST_CREATE_TYPE = zod.infer<typeof POST_CREATE_SCHEMA>

export const COMMENT_CREATE_SCHEMA = zod.object({
	id: zod.number(),
	idPost: zod.number(),
	userInfo: zod.string({ required_error: FORM_ERROR_MESSAGE.REQUIRED }).min(1, FORM_ERROR_MESSAGE.REQUIRED).max(SMALL_TEXT_MAX_LENGTH, MAX_LENGTH_ERROR_MESSAGE.SMALL_TEXT),
	email: zod.string({ required_error: FORM_ERROR_MESSAGE.REQUIRED }).min(1, FORM_ERROR_MESSAGE.REQUIRED).max(SHORT_TEXT_MAX_LENGTH, MAX_LENGTH_ERROR_MESSAGE.SHORT_TEXT).email(FORM_ERROR_MESSAGE.EMAIL),
	textComment: zod.string({ required_error: FORM_ERROR_MESSAGE.REQUIRED }).min(1, FORM_ERROR_MESSAGE.REQUIRED).max(FULL_TEXT_MAN_LENGTH, MAX_LENGTH_ERROR_MESSAGE.FULL_TEXT),
	dateTime: zod.string(),
})

export type COMMENT_CREATE_TYPE = zod.infer<typeof COMMENT_CREATE_SCHEMA>