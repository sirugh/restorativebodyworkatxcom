const handsBack = new Proxy({"src":"/_astro/hands-back.BBpdYc7S.jpeg","width":480,"height":360,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/user/restorativebodyworkatxcom/src/assets/images/closeups/hands-back.jpeg";
							}
							
							return target[name];
						}
					});

export { handsBack as default };
