DEVICE_PARAMS = {
    'machine': 'HT-6M',
    'major_radius': 0.65,
    'minor_radius': 0.2,
    'triangularity': 0,
    'ellipticity': 1,
    'plasma_current': 0.04,
    'magnetic_field': 1.5,
}
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

    'particle_species': "H",
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
