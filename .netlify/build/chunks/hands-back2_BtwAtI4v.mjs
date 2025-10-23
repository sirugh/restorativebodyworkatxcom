const handsBack2 = new Proxy({"src":"/_astro/hands-back2.CouiJbX5.jpeg","width":1024,"height":768,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/user/restorativebodyworkatxcom/src/assets/images/closeups/hands-back2.jpeg";
							}
							
							return target[name];
						}
					});

export { handsBack2 as default };
