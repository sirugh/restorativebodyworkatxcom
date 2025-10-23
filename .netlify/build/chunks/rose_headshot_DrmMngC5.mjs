const rose_headshot = new Proxy({"src":"/_astro/rose_headshot.C2RZKleA.jpeg","width":588,"height":588,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/user/restorativebodyworkatxcom/src/assets/images/rose_headshot.jpeg";
							}
							
							return target[name];
						}
					});

export { rose_headshot as default };
