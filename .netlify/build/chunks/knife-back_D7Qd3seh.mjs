const knifeBack = new Proxy({"src":"/_astro/knife-back.CgsWWGKQ.jpeg","width":1024,"height":768,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/user/restorativebodyworkatxcom/src/assets/images/closeups/knife-back.jpeg";
							}
							
							return target[name];
						}
					});

export { knifeBack as default };
