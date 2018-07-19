export const ADMIN_EMAIL = 'sarit@magicboxasia.com';
export const BACKEND_URL = 'http://localhost:8000';
export const CHECK_TOKEN = 'check_token';
export const POST_BACKEND = 'post_backend';
export const SUBMIT_RADIUS = 'submit_radius';
export const GET_LOCAL_TOKEN = 'get_local_token';
export const GET_USERNAME = 'get_username';
export const GOOD_TOKEN = 'good_token';
export const INVALID_TOKEN = 'invalid_token';
export const FORTRAN_ANSWER_COMPLETE = 'fortran_answer_complete';
export const FORTRAN_ANSWER_FAILED = 'fortran_answer_failed';
export const SUBMIT_USERNAME_PASSWORD = 'submit_username_password';
export const LOGIN_FAILED = 'login_failed';
export const LOGIN_SUCCESS = 'login_success';
export const LOGOUT = 'logout';
export const RESPONSE_USERNAME = 'response_username';
export const RESPONSE_FAILED = 'response_failed';
export const CONTROL_ROOM = 'control_room';
export const QUEUE = 'queue';
export const RESULTS = 'results';
export const WIKI = 'wiki';
export const SUBMIT_BASIC_FORM = 'submit_basic_form';
export const BASIC_COMPLETE = 'basic_complete';
export const BASIC_FAILED = 'basic_failed';
export const INTERMEDIATE_COMPLETE = 'intermediate_complete';
export const INTERMEDIATE_FAILED = 'intermediate_failed';
export const NAV_BAR_MENU = {
	controlRoom: false,
	queue: false,
	results: false,
	wiki: false
};
export const NETWORK_DOWN = {
	message: 'Network is down',
	statusCode: 406
};

export const MACHINE_OPTIONS = [
	{
		text: 'HT-6M',
		value: 'HT-6M'
	},
	{
		text: 'HT-5M',
		value: 'HT-5M'
	}
];

export const PLASMA_CURRENT_OPTIONS = [
	{
		text: '0.01',
		value: 0.01
	},
	{
		text: '0.02',
		value: 0.02
	},
	{
		text: '0.03',
		value: 0.03
	},
];

export const MAGNETIC_FIELD_OPTIONS = [
	{
		text: '1.50',
		value: 1.50
	},
	{
		text: '1.75',
		value: 1.75
	},
	{
		text: '2.00',
		value: 2.00
	},
];

export const RATE_OF_GAS_PUFFING_OPTIONS = [
	{
		text: '10.0',
		value: 10.0
	},
	{
		text: '15.0',
		value: 15.0
	},
	{
		text: '20.0',
		value: 20.0
	},
];

export const ICRF_HEATING_OPTIONS = [
	{
		text: '1.00',
		value: 1.00
	},
	{
		text: '2.00',
		value: 2.00
	},
	{
		text: '3.00',
		value: 3.00
	},
];

export const MACHINE_OPTIONS_DEFAULT = 'HT-6M';
export const PLASMA_CURRENT_DEFAULT = 0.01;
export const MAGNETIC_FIELD_DEFAULT = 1.50;
export const RATE_OF_GAS_PUFFING_DEFAULT = 0;
export const ICRF_HEATING_DEFAULT = 1.00;

export const BASIC_DEFAULT = {
	'machineOption': MACHINE_OPTIONS_DEFAULT,
	'plasmaCurrent': PLASMA_CURRENT_DEFAULT,
	'magneticField': MAGNETIC_FIELD_DEFAULT,
	'rateOfGasPuffing': RATE_OF_GAS_PUFFING_DEFAULT,
	'icrfHeating': ICRF_HEATING_DEFAULT
};

export const NSMAX_OPTIONS = [
	{
		text: '2',
		value: 2
	},
	{
		text: '3',
		value: 3
	},
	{
		text: '4',
		value: 4
	}
];
export const DENSTIY_EQN_OPTIONS = [
	{
		text: 'False',
		value: false
	},
	{
		text: 'True',
		value: true
	},
];

export const CLICK_CHANGE_SPECIES = 'click_change_species';
export const TRANSPORT_OPTIONS_DEFAULT = 'CDBM05';
export const TRANSPORT_OPTIONS = [
	{
		text: 'Model01',
		value: 'Model01'
	},
	{
		text: 'Model02',
		value: 'Model02'
	}
];
export const RESISTIVITY_OPTIONS_DEFAULT = "Hinton and Hazeltine's model";
export const RESISTIVITY_OPTIONS = [
	{
		text: 'Model01',
		value: 'Model01'
	},
	{
		text: 'Model02',
		value: 'Model02'
	},
	{
		text: 'Model03',
		value: 'Model03'
	}
];
export const PARTICLE_DIFFUSION_MODEL_DEFAULT = 'Constant values';
export const PARTICLE_DIFFUSION_MODEL_OPTIONS = [
	{
		text: 'Model01',
		value: 'Model01'
	},
	{
		text: 'Model02',
		value: 'Model02'
	},
	{
		text: 'Model03',
		value: 'Model03'
	}
];
export const HEAT_PINCH_MODEL_DEFAULT = 'xxxx';
export const HEAT_PINCH_MODEL_OPTIONS = [
	{
		text: 'Model01',
		value: 'Model01'
	},
	{
		text: 'Model02',
		value: 'Model02'
	},
	{
		text: 'Model03',
		value: 'Model03'
	}
];
export const BOOTSTRAP_CURRENT_DEFAULT = 'xxxx';
export const BOOTSTRAP_CURRENT_MODEL_OPTIONS = [
	{
		text: 'Model01',
		value: 'Model01'
	},
	{
		text: 'Model02',
		value: 'Model02'
	},
	{
		text: 'Model03',
		value: 'Model03'
	}
];

export const NEOCLASSICAL_MODEL_DEFAULT = 'xxxx';
export const NEOCLASSICAL_MODEL_OPTIONS = [
	{
		text: 'Model01',
		value: 'Model01'
	},
	{
		text: 'Model02',
		value: 'Model02'
	},
	{
		text: 'Model03',
		value: 'Model03'
	}
];

export const NUMBER_OF_TIME_BREAK_POINTS_DEFAULT = '5';
export const NUMBER_OF_TIME_BREAK_POINTS_OPTIONS = [
	{
		text: '2',
		value: 2
	},
	{
		text: '3',
		value: 3
	},
	{
		text: '4',
		value: 4
	},
	{
		text: '5',
		value: 5
	},
	{
		text: '6',
		value: 6
	},
	{
		text: '7',
		value: 7
	},
	{
		text: '8',
		value: 8
	}
];
export const MAXIMUM_RUNTIME_DEFAULT = '3';
export const MAXIMUM_RUNTIME_OPTIONS = [
	{
		text: '1',
		value: 1
	},
	{
		text: '2',
		value: 2
	},
	{
		text: '3',
		value: 3
	},
	{
		text: '4',
		value: 4
	},
	{
		text: '5',
		value: 5
	},
	{
		text: '6',
		value: 6
	}
];
export const NUMBER_OF_BREAK_POINTS_CHANGED = 'number_of_break_points_changed';
export const MAXIMUM_RUNTIME_CHANGED = 'maximum_runtime_changed';
export const PARTICLE_HEATSOURCE_DEFAULT = {
	breakPointNumber: 0,
	timeAtBreakPoint: 0.01,
	timeStep: 0.01,

	ionSpeciesOfTheSource: 'H',
	rateOfParticleSource: 0.01,
	radialPosition: 0.00,
	radialWidth: 0.50,

	nbiTotalPower: 0.01,
	nbiRadialPosition: 0.01,
	nbiRadialWidth: 0.01,

	icrfTotalPower: 0.01,
	icrfRadialPosition: 0.01,
	icrfRadialWidth: 0.01

};
export const PARTICLE_HEATSOURCE_NEXT = 'particle_heatsource_next';
export const SPECIES = [
	{
		key: 'electron',
		text: 'Electron',
		value: 'electron'
	},
	{
		key: 'hydrogen',
		text: 'Hydrogen',
		value: 'hydrogen'
	},
	{
		key: 'deuterium',
		text: 'Deuterium',
		value: 'deuterium'
	},
	{
		key: 'tritium',
		text: 'Tritium',
		value: 'tritium'
	},
];
export const SPECIE_ORDER = {
	electron: 1,
	hydrogen: 2,
	deuterium: 3,
	tritium: 4
};
export const CHANGE_CONFIRMATION = 'change_confirmation';
export const SUBMIT_ADVANCED_FORM = 'submit_advanced_form';
export const ADVANCED_COMPLETE = 'advanced_complete';
export const ADVANCED_FAILED = 'advanced_failed';
export const ON_START_CHART = 'on_start_chart';
export const GOOD_RESULTS = 'good_results';
export const INVALID_RESULTS = 'invalid_results';
export const UPDATE_PHS = 'update_particle_heatsource';
export const ADD_PHS = 'add_particle_heat_source';
export const SET_PHSS = 'add_particle_heat_sources';  //Number is given
export const HIT_INTERMEDIATE_BTN = 'hit_intermediate_btn';
export const CHANGE_MACHINE_PARAM = 'change_machine_param';
export const CHANGE_TRANSPORT_PARAM = 'change_transport_param';
export const DENSITY_AND_TEMPERATURE = {
	specie: undefined,
	active: true,
	densityOfCenter: 0,
	densityOfEdge: 0,
	tempAtCenter: 0,
	tempAtEdge: 0
};
export const DEFAULT_DT = [
	Object.assign({}, DENSITY_AND_TEMPERATURE, {specie: 'electron'}),
	Object.assign({}, DENSITY_AND_TEMPERATURE, {specie: 'hydrogen'}),
	Object.assign({}, DENSITY_AND_TEMPERATURE, {specie: 'deuterium', active: false}),
	Object.assign({}, DENSITY_AND_TEMPERATURE, {specie: 'tritium', active: false})
];
export const CHANGE_DT = 'change_density_and_temperature';
export const ACTIVATE_SPECIE = 'activate_specie';
export const SPECIE_CHANGE_DT = 'specie_change_dt';

// Arrange the payload here
export const PERFECT_PAYLOAD = {
	device_params: {
		machine: 'HT-6M',
		major_radius: 0.65,
		minor_radius: 0.2,
		triangularity: 0,
		ellipticity: 1,
		plasma_current: 0.04,
		magnetic_field: 1.5
	},
	plasma_params: {
		nsmax: 4,
		density_eqn: false
	},
	transport_params: {
		transport_model: 12,
		resistivity: 12,
		particle_diffusion: 12,
		heat_pinch: 12,
		bootstrap_current: 12,
		neoclassical: 12
	},
	control_params: {
		no_break_point: 2,
		max_run_time: 43,
		heating_params: [
			{
				break_point_number: 1,
				breakpoint_time: 0,
				timestep: 0.0001,
				rate_of_particle_source: 0,
				radial_position: 0,
				radial_width: 0,
				nbi_power: 0,
				nbi_radial_position: 0,
				nbi_radial_width: 0.5,
				icrf_power: 0,
				icrf_radial: 0,
				icrf_radial_width: 0.5
			},
			{
				break_point_number: 2,
				breakpoint_time: 0,
				timestep: 0.0001,
				rate_of_particle_source: 0,
				radial_position: 0,
				radial_width: 0,
				nbi_power: 0,
				nbi_radial_position: 0,
				nbi_radial_width: 0.5,
				icrf_power: 0,
				icrf_radial: 0,
				icrf_radial_width: 0.5
			},
		]
	},
	comment: "Sieg Heil"
};
export const CHANGE_DENSITY_EQN = 'change_density_eqn';