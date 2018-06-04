DEVICE_PARAMS = {
    'machine': 'HT-6M',
    'major_radius': 0.65,
    'minor_radius': 0.2,
    'triangularity': 0,
    'ellipticity': 1,
    'plasma_current': 0.04,
    'magnetic_field': 1.5,
}
ATOMIC_NO = {
    'electron': -1,
    'hydrogen': 1,
    'deuterium': 2,
    'tritium': 3,
}
CHARGE_NO = {
    'electron': -1,
    'hydrogen': 1,
    'deuterium': 1,
    'tritium': 1,
}
DENSITY_AXIS = {
    'electron': 0.1,
    'hydrogen': 0.1,
    'deuterium': 0,
    'tritium': 0,
}
DENSITY_SURFACE = {
    'electron': 0.01,
    'hydrogen': 0.01,
    'deuterium': 0,
    'tritium': 0,
}
TEMPERATURE_AXIS = {
    'electron': 0.5,
    'hydrogen': 0.5,
    'deuterium': 0,
    'tritium': 0,
}
TEMPERATURE_SURFACE = {
    'electron': 0.01,
    'hydrogen': 0.01,
    'deuterium': 0,
    'tritium': 0,
}
IMPURITY_NO = 0
NEUTRAL_NO = 0
PARTICLE_SOURCE_MODEL = 0
NUMBER_PARTICLE_SOURCE = 1
PARTICLE_SOURCE_RATE = 1.0
RADIAL_POSITION = 0
RADIAL_WIDTH = 0.5
PARTICLE_SOURCE_SPECIES = 2
PLASMA_PARAMS = {
    'nsmax': 2,
    'density_eqn': False,
}
TRANSPORT_PARAMS = {
    'transport_model': 'CDBM05',
    'resistivity': f"Hinton and Hazeltine's model",
    'particle_diffusion': f"Model01",
    'heat_pinch': f"Pinch01",
    'bootstrap_current': f"Model01",
    'neoclassical': f"Model01",
}
CONTROL_PARAMS = {
    'no_break_point': 2,
    'max_run_time': 3
}

HEATING_PARAMS = {
    'break_point_number': 2,
    'breakpoint_time': 0,
    'timestep': 0.01,

    'particle_species': 40,
    'rate_of_particle_source': 0,
    'radial_position': 0,
    'radial_width': 0.5,

    'nbi_power': 0,
    'nbi_radial_position': 0,
    'nbi_radial_width': 0.5,
    'icrf_power': 0,
    'icrf_radial': 0,
    'icrf_radial_width': 0.5,
}

HYDROGEN = 'H'
ELECTRON = 'E'
DEUTERIUM = 'D'
TRITIUM = 'T'
PARTICLE_SPECIES = (
    (HYDROGEN, f"Hydrogen"),
    (ELECTRON, f"Electron"),
    (DEUTERIUM, f"Deuterium"),
    (TRITIUM, f"Tritium"),
)
