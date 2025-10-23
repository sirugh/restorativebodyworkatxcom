const handsHand = new Proxy({"src":"/_astro/hands-hand.Dt63zxx5.jpeg","width":1024,"height":768,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/user/restorativebodyworkatxcom/src/assets/images/closeups/hands-hand.jpeg";
							}
							
							return target[name];
						}
					});

export { handsHand as default };
