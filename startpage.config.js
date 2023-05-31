{
	"username": "S3NSEY",
	"theme": {
		"backgroundColor": "#121317",
		"windowColor": "#1e212b",
		"glowColor": "#6b5cb157",
		"white": "#e2e2e2",
		"gray": "#97989d",
		"black": "#16161e",
		"red": "#ec6183",
		"green": "#2ed8a2",
		"yellow": "#e8b195",
		"blue": "#2bc3de",
		"cyan": "#62e0e2",
		"magenta": "#e069aa",
		"violet": "#d1aff8",
		"orange": "#ff8800"
	},
	"wallpaper": {
		"url": "",
		"easing": "ease-in-out",
		"fadeIn": true,
		"blur": true
	},
	"terminal": {
		"fixedHeight": true,
		"windowGlow": true,
		"textGlow": true
	},
	"prompt": {
		"ctrlC": true,
		"placeholder": "command...",
		"placeholderColor": "gray",
		"userColor": "green",
		"atColor": "gray",
		"hostColor": "magenta",
		"promptColor": "magenta",
		"promptSymbol": "❯",
		"caretColor": "green",
		"selectionBg": "yellow",
		"selectionFg": "black"
	},
	"fetch": {
		"timeFormat": "HH:mm",
		"dateFormat": "DD/MM/YYYY",
		"titleColor": "yellow",
		"image": "icon.svg",
		"data": [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	"urlLaunch": {
		"target": "_self",
		"defaultColor": "white",
		"hoverColor": "violet"
	},
	"search": {
		"default": "https://yandex.ru/search/?text=",
		"target": "_self",
		"shortcutRegex": "([A-Za-z0-9]+) (.*)",
		"shortcuts": [
			{
				"alias": "g",
				"name": "Google Search",
				"url": "https://google.com/search?q={}"
			},
			{
				"alias": "d",
				"name": "DuckDuckGo Search",
				"url": "https://duckduckgo.com/?q={}"
			},
			{
				"alias": "b",
				"name": "Brave Search",
				"url": "https://search.brave.com/search?q={}"
			},
			{
				"alias": "gh",
				"name": "Github Search",
				"url": "https://github.com/search?q={}"
			},
			{
				"alias": "s",
				"name": "Stack Overflow Search",
				"url": "https://stackoverflow.com/search?q={}"
			},
			{
				"alias": "r",
				"name": "Subreddit Search",
				"url": "https://reddit.com/r/{}"
			},
			{
				"alias": "w",
				"name": "Wikipedia Search",
				"url": "https://en.wikipedia.org/wiki/{}"
			}
		]
	},
	"sections": {
		"list": [
			{
				"title": "General",
				"color": "green",
				"align": "left",
				"links": [
					{
						"name": "Youtube",
						"url": "https://www.youtube.com/",
						"icon": "fa-brands:youtube"
					},
					{
						"name": "Monkeytype",
						"url": "https://monkeytype.com/",
						"icon": "fa-brands:mailchimp"
					},
					{
						"name": "GPT",
						"url": "https://chat.openai.com/",
						"icon": "simple-icons:openai"
					},
					{
						"name": "Gmail",
						"url": "https://mail.google.com/",
						"icon": "simple-icons:oracle"
					}
				]
			},
			{
				"title": "Dev",
				"color": "magenta",
				"align": "left",
				"links": [
					{
						"name": "GitHub",
						"url": "https://github.com",
						"icon": "mdi:github"
					},
					{
						"name": "GitLab",
						"url": "https://gitlab.com",
						"icon": "ph:gitlab-logo-simple-fill"
					},
					{
						"name": "Dev.to",
						"url": "https://dev.to",
						"icon": "material-symbols:logo-dev"
					},
					{
						"name": "Stack Overflow",
						"url": "https://stackoverflow.com/",
						"icon": "mdi:stack-overflow"
					}
				]
			},
			{
				"title": "Social",
				"color": "violet",
				"align": "left",
				"links": [
					{
						"name": "VK",
						"url": "https://vk.com/",
						"icon": "fa-brands:vk"
					},
					{
						"name": "Reddit",
						"url": "https://reddit.com",
						"icon": "mdi:reddit"
					},
					{
						"name": "DTF",
						"url": "https://dtf.ru/",
						"icon": "fa-brands:dashcube"
					},
					{
						"name": "Telegram",
						"url": "https://web.telegram.org/k/",
						"icon": "fa-brands:telegram"
					}
				]
			},
			{
				"title": "Gaming",
				"color": "cyan",
				"align": "left",
				"links": [
					{
						"name": "Igromania",
						"url": "https://www.igromania.ru/",
						"icon": "fa-brands:artstation"
					},
					{
						"name": "Steam",
						"url": "https://store.steampowered.com/",
						"icon": "fa-brands:steam"
					}
				]
			},
			{
				"title": "Fun",
				"color": "blue",
				"align": "left",
				"links": [
					{
						"name": "Boosty",
						"url": "https://boosty.to/",
						"icon": "fa-brands:dyalog"
					},
					{
						"name": "Rutracker",
						"url": "https://rutracker.org/forum/index.php",
						"icon": "fa-brands:usb"
					},
					{
						"name": "Kinopoisk",
						"url": "https://www.kinopoisk.ru/",
						"icon": "fa-brands:kickstarter"
					},
					{
						"name": "YandexMusic",
						"url": "https://music.yandex.ru/",
						"icon": "fa-brands:soundcloud"
					}
				]
			},
			{
				"title": "Nya",
				"color": "yellow",
				"align": "left",
				"links": [
					{
						"name": "AliExpress",
						"url": "https://aliexpress.ru/",
						"icon": "fa-brands:schlix"
					},
					{
						"name": "YandexMarket",
						"url": "https://market.yandex.ru/",
						"icon": "fa-brands:yandex-international"
					},
					{
						"name": "Speedtest",
						"url": "https://www.speedtest.net/",
						"icon": "fa-brands:uncharted"
					},
					{
						"name": "Kirioshi",
						"url": "http://192.168.31.149:9090/",
						"icon": "fa-brands:fa-wpexplorer"
					}
				]
			}
		]
	}
}
