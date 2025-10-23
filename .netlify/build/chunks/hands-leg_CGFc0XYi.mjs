const handsLeg = new Proxy({"src":"/_astro/hands-leg.9KuMqh7q.jpeg","width":1024,"height":768,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/user/restorativebodyworkatxcom/src/assets/images/closeups/hands-leg.jpeg";
							}
							
							return target[name];
						}
					});

export { handsLeg as default };
