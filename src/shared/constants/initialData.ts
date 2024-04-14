import { Post, Comment, User } from '../types/common'

export const POSTS: Post[] = [
	{
		id: 0,
		title: 'Новый день - новые возможности! ',
		briefDescription: 'Обзор нового суперкара от известного производителя',
		fullDescription: 'Сегодня мы готовы поделиться с вами обзором нового суперкара от известного производителя. Стильный дизайн, мощный двигатель и передовые технологии - все это делает эту машину уникальной.',
		userInfoId: 1,
		dateTime: new Date(2024, 3, 9, 12, 30, 55).toISOString(),
	},
	{
		id: 1,
		title: 'Шоколад – волшебное зелье',
		briefDescription: 'Шоколад – волшебное зелье, растворит любые трудности и принесет мгновения настоящего блаженства.',
		fullDescription: 'Шоколад – волшебное зелье, растворит любые трудности и принесет мгновения настоящего блаженства. Как только он плавится на языке, весь мир кажется ярче и краше. Шоколад – это не просто угощение, это счастья на каждый день.',
		userInfoId: 0,
		dateTime: new Date(2024, 3, 13, 16, 50, 35).toISOString(),
	},
	{
		id: 2,
		title: 'Мода 2024',
		briefDescription: 'Летние платья будут главным трендом следующего сезона!',
		fullDescription: 'Летние платья будут главным трендом следующего сезона! От легких платьев-рубашек до ярких сарафанов. Невероятное разнообразие стилей и фасонов. Оттенки пудры, цвета солнца и сочные оттенки фруктов.',
		userInfoId: 0,
		dateTime: new Date(2024, 3, 13, 17, 10, 38).toISOString(),
	}
]

export const COMMENTS: Comment[] = [
	{
		id: 0,
		idPost: 0,
		textComment: 'Полностью с вами согласна',
		userInfo: 'Наташа Иванова',
		email: 'nataIva@mail.ru',
		dateTime: new Date(2024, 3, 10, 14, 18, 10).toISOString(),
	},
	{
		id: 1,
		idPost: 0,
		textComment: 'круто написано',
		userInfo: 'Петр Иванов',
		email: 'petr_ivanov@yandex.ru',
		dateTime: new Date(2024, 3, 12, 11, 7, 14).toISOString(),
	},
	{
		id: 2,
		idPost: 2,
		textComment: 'Спасибо! Классный пост!',
		userInfo: 'Катя Важенина',
		email: 'kataVa@yandex.ru',
		dateTime: new Date(2024, 3, 15, 10, 16, 46).toISOString(),
	}
]

export const USERS: User[] = [
	{
		id: 0,
		fullName: 'Ира Петрова',
		blogName: 'Все обо всем',
	},
	{
		id: 1,
		fullName: 'Женя Смагин',
		blogName: 'Наука - жизнь',
	},
	{
		id: 2,
		fullName: 'Вика Старцева',
		blogName: 'Моя жизнь',
	}
]