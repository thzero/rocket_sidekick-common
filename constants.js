const Constants = {
	Checklists: {
		ChecklistAltimeterTypes: {
			primary: 'primary',
			secondary: 'secondary'
		},
		ChecklistStatus: {
			completed: 'completed',
			none: 'none',
			inProgress: 'inprogress',
			secondary: 'secondary'
		},
		ChecklistStepStatus: {
			completed: 'completed'
		},
		ChecklistStepTypes: {
			checkable: 'checkable',
			launch: 'launch',
			prepaltimeter: 'prepaltimeter',
			prepchuterelease: 'prepchuterelease',
			prepejectioncharge: 'prepejectioncharge',
			prepmotor: 'prepmotor',
			preprecovery: 'preprecovery',
			section: 'section',
			text: 'text',
			trackingend: 'trackingend',
			trackingstart: 'trackingstart'
		},
		ChecklistTypes: {
			none: 'none',
			launch: 'launch',
			preparation: 'preparation'
		}
	},
	ErrorCodes: {
		Checklists: {
		},
		Launches: {
			IncludedInChecklist: 201,
			IncludedInLaunch: 202,
			IncludedInRocket: 203,
			IncludedInRocketSetup: 204
		},
		Locations: {
			IncludedInChecklist: 301,
			IncludedInLaunch: 302
		},
		Parts: {
			IncludedInInventory: 401,
			IncludedInRocket: 402,
			UpdatePublic: 403
		},
		Rockets: {
			IncludedInChecklist: 591,
			IncludedInLaunch: 592,
			IncludedInRocketSetup: 593
		}
	},
	ErrorFields: {
	},
	IdGenerator: {
		alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
		lengthLong: null,
		lengthShort: null
	},
	Licenses: {
		Free: {
			apache20: {
				id: 'apache-2.0',
				name: 'Apache 2.0',
				url: 'https://apache.org/licenses/LICENSE-2.0'
			},
			ccBy: {
				id: 'cc-by',
				name: 'Creative Commons Attribution 4.0',
				image: '<a rel="license" target="_blank" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>',
				url: 'https://creativecommons.org/licenses/by/4.0/legalcode'
			},
			ccBySa: {
				id: 'cc-by-sa',
				name: 'Creative Commons Attribution-ShareAlike 4.0',
				image: '<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>',
				url: 'https://creativecommons.org/licenses/by-sa/4.0/legalcode'
			},
			ccByNc: {
				id: 'cc-by-nc',
				name: 'Creative Commons Attribution-NonCommercial 4.0',
				image: '<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>',
				url: 'https://creativecommons.org/licenses/by-nc/4.0/legalcode'
			},
			ccByNcSa: {
				id: 'cc-by-nc-sa',
				name: 'Creative Commons Attribution-NonCommercial-ShareAlike 4.0',
				image: '<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>',
				url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode'
			},
			bsd2Clause: {
				id: 'bsd-2-clause',
				name: 'BSD 2-clause "Simplified"',
				url: 'https://choosealicense.com/licenses/bsd-2-clause'
			},
			bsd3Clause: {
				id: 'bsd-3-clause',
				name: 'BSD 3-clause "New" or "Revised"',
				url: 'https://choosealicense.com/licenses/bsd-3-clause'
			},
			isc: {
				id: 'isc',
				name: 'ISC',
				url: 'https://choosealicense.com/licenses/isc/'
			},
			mit: {
				id: 'mit',
				name: 'MIT',
				image: '<a rel="license" target="_blank" href="https://mit-license.org"><img alt="MIT License" style="border-width:0" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/License_icon-mit-88x31-2.svg" /></a><br />This work is licensed under the <a rel="license" href="https://mit-license.org">MIT License</a>',
				url: 'https://mit-license.org'
			}
		},
		Public: {
			pd: {
				id: 'pd',
				name: 'Public Domain'
			}
		}
	},
	ListingTypes: {
		Grid: 'grid',
		List: 'list'
	},
	MeasurementUnits: {
		acceleration: {
			id: 'acceleration'
		},
		area: {
			id: 'area'
		},
		altitude: {
			id: 'altitude'
		},
		density: {
			id: 'density'
		},
		distance: {
			id: 'distance'
		},
		fluid: {
			id: 'fluid'
		},
		length: {
			id: 'length'
		},
		temperature: {
			id: 'temperature'
		},
		velocity: {
			id: 'velocity'
		},
		volume: {
			id: 'volume'
		},
		weight: {
			id: 'weight'
		},
		english: {
			id: 'english',
			acceleration: {
				default: 'fts2',
				fts2: 'ft/s^2'
			},
			area: {
				default: 'in2',
				in2: 'in^2',
				ft2: 'ft^2'
			},
			altitude: {
				default: 'ft',
				ft: 'ft',
				mi: 'mi'
			},
			density: {
				default: 'lbmft3',
				lbmft3: 'lbm/ft^3'
			},
			distance: {
				default: 'ft',
				ft: 'ft',
				mi: 'mi'
			},
			fluid: {
				default: 'floz',
				floz: 'floz'
			},
			length: {
				default: 'in',
				in: 'in',
				ft: 'ft'
			},
			temperature: {
				default: 'f',
				f: 'F'
			},
			velocity: {
				default: 'fts',
				fts: 'ft/s',
				mph: 'mile/h'
			},
			volume: {
				default: 'in3',
				in3: 'in^3',
				ft3: 'ft^3'
			},
			weight: {
				default: 'oz',
				oz: 'oz',
				lb: 'lb'
			}
		},
		metrics: {
			id: 'metrics',
			acceleration: {
				default: 'ms2',
				ms2: 'm/s^2'
			},
			area: {
				default: 'mm2',
				cm2: 'cm^2',
				m2: 'm^2',
				mm2: 'mm^2'
			},
			altitude: {
				default: 'm',
				m: 'm',
				km: 'km'
			},
			density: {
				default: 'kgm3',
				kgm3: 'kg/m^3'
			},
			distance: {
				default: 'm',
				m: 'm',
				km: 'km'
			},
			fluid: {
				default: 'ml',
				ml: 'ml',
				l: 'l'
			},
			length: {
				default: 'mm',
				mm: 'mm',
				cm: 'cm',
				m: 'm'
			},
			temperature: {
				default: 'c',
				c: 'C'
			},
			velocity: {
				default: 'ms',
				ms: 'm/s',
				kph: 'km/h'
			},
			volume: {
				default: 'mm3',
				cm3: 'cm^3',
				m3: 'm^3',
				mm3: 'mm^3'
			},
			weight: {
				default: 'g',
				g: 'g',
				kg: 'kg'
			}
		},
		types: {
			acceleration: 'acceleration',
			area: 'area',
			altitude: 'altitude',
			fluid: 'fluid',
			density: 'density',
			distance: 'distance',
			length: 'length',
			temperature: 'temperature',
			velocity: 'velocity',
			volume: 'volume',
			weight: 'weight'
		}
	},
	NewsTypes: {
		ADMIN: 'admin',
		MAIN: 'main'
	},
	Roles: {
		Admin: 'admin',
		User: 'user'
	},
	Status: {
		ACTIVE: 'active'
	},
	Rocketry: {
		Direction: {
			Aft: 'aft',
			Tip: 'tip'
		},
		DisplayTypes: {
			Site: 'site',
			User: 'user'
		},
		Launches: {
			Success: 'success',
			Reasons: {
				Failure: {
					cato: 'cato',
					deployment: 'deployment',
					lost: 'lost',
					rud: 'rud'
				},
				Success: {
					delayed: 'delayed',
					failed: 'failed',
					success: 'success'
				}
			},
			Weather: {
				clear: 'clear',
				cloudy: 'cloudy',
				cloudyPartial: 'cloudyPartial',
				overcast: 'overcast',
				raining: 'raining',
				snowing: 'snowing'
			}
		},
		ManufacturerTypes: {
			altimeter: 'altimeter',
			chuteProtector: 'chuteProtector',
			chuteRelease: 'chuteRelease',
			deploymentBag: "deploymentBag",
			motor: 'motor',
			motorCase: 'motorCase',
			parachute: 'parachute',
			rocket: 'rocket',
			streamer: 'streamer',
			tracker: 'tracker'
		},
		PartTypes: {
			altimeter: 'altimeter',
			chuteProtector: 'chuteProtector',
			chuteRelease: 'chuteRelease',
			deploymentBag: "deploymentBag",
			motor: 'motor',
			motorCase: 'motorCase',
			parachute: 'parachute',
			streamer: 'streamer',
			tracker: 'tracker'
		},
		RocketTypes: {
			highone: 'highone',
			hightwo: 'hightwo',
			highthree: 'highthree',
			low: 'low',
			mid: 'mid'
		},
		RocketTypeRanks: {
			highone: 2,
			hightwo: 3,
			highthree: 4,
			low: 0,
			mid: 1
		}
	},
	Site: {
		emails: {
			contributing: "rocketsidekick@thzero.com",
			inquiry: "rocketsidekick@thzero.com"
		}
	}
};

export default Constants;
