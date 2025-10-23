const cuppingBack2 = new Proxy({"src":"/_astro/cupping-back2.DYhb-3lK.jpeg","width":1024,"height":768,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/user/restorativebodyworkatxcom/src/assets/images/closeups/cupping-back2.jpeg";
							}
							
							return target[name];
						}
					});

export { cuppingBack2 as default };
