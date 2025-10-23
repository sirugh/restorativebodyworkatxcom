const handsBack1 = new Proxy({"src":"/_astro/hands-back1.BfDsVWIn.jpeg","width":1024,"height":768,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/user/restorativebodyworkatxcom/src/assets/images/closeups/hands-back1.jpeg";
							}
							
							return target[name];
						}
					});

export { handsBack1 as default };
