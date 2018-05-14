from apps.plasma_params.models import NSMAX, DENSITY_EQN, ATOMIC_NO, CHARGE_NO, DENSITY_AXIS, DENSITY_SURFACE, \
    TEMPERATURE_AXIS, TEMPERATURE_SURFACE, IMPURITY_NO, NEUTRAL_NO, PARTICLE_SOURCE_MODEL, NUMBER_PARTICLE_SOURCE, \
    PARTICLE_SOURCE_RATE, RADIAL_POSITION, RADIAL_WIDTH, PARTICLE_SOURCE_SPECIES

DEVICE_PARAMS = {
    'major_radius': 0.65,
    'minor_radius': 0.2,
    'triangularity': 0,
    'ellipticity': 1,
    'plasma_current': 0.04,
    'magnetic_field': 1.5,
}
PLASMA_PARAMS = {
    'nsmax': NSMAX,
    'density_eqn': DENSITY_EQN,
    'atomic_no': ATOMIC_NO,
    'charge_no': CHARGE_NO,
    'density_axis': DENSITY_AXIS,
    'density_surface': DENSITY_SURFACE,
    'temperature_axis': TEMPERATURE_AXIS,
    'temperature_surface': TEMPERATURE_SURFACE,
    'impurity_no': IMPURITY_NO,
    'neutral_no': NEUTRAL_NO,
    'particle_source_model': PARTICLE_SOURCE_MODEL,
    'number_particle_source': NUMBER_PARTICLE_SOURCE,
    'particle_source_rate': PARTICLE_SOURCE_RATE,
    'radial_position': RADIAL_POSITION,
    'radial_width': RADIAL_WIDTH,
    'particle_source_species': PARTICLE_SOURCE_SPECIES,
}
TRANSPORT_PARAMS = {
    'resistivity': 1,
    'particle_diffusion': 1,
    'heat_pinch': 1,
    'bootstrap_current': 1,
    'neoclassical': 0,
}
CONTROL_PARAMS = {
    'timestep': 0.01,
    'mesh_point': 50,
    'snap_data_print': 10,
    'radial_profile_snap': 100,
    'time_evolution_snap': 2,
}
HEATING_PARAMS = {
    'nbi_power': 0,
    'nbi_radial_position': 0,
    'nbi_radial_width': 0.5,
    'icrf_power': 0,
    'icrf_radial': 0,
    'icrf_radial_width': 0.5,
}
