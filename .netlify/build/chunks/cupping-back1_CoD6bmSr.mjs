const cuppingBack1 = new Proxy({"src":"/_astro/cupping-back1.aXC1fcvi.jpeg","width":480,"height":360,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/user/restorativebodyworkatxcom/src/assets/images/closeups/cupping-back1.jpeg";
							}
							
							return target[name];
						}
					});

export { cuppingBack1 as default };
