# Choupo model catalogue

> **Version.** This catalogue describes the stable release `Choupo-2608`, NOT the development line `Choupo-dev` that https://www.choupo.org/app and the other assistant documents describe: a model added since that release may be missing here.  For the development line, read https://www.choupo.org/llm/reference/thermo.md and https://www.choupo.org/llm/reference/unit-ops.md.

Generated from `generated/modelsCatalogue.json` (the same data the interactive page https://www.choupo.org/models/ draws).  Note of the catalogue: Hand-curated from the explicit registerBuiltins() factories in src/ and from the data/standards/ tree. Only models that are actually registered/wired are listed (no roadmap items); retired keys (e.g. outerDict fitBinaryPair, which throws) are excluded. It is NOT machine-generated -- it used to say so, while nine databank paths pointed at directories retired by the 2026-07-16 tree migrations and one count described a directory that now holds no records at all. bin/curate/check_models_catalogue.py now recomputes every source path and every databank count from the tree on each runTests, so the claim is checked rather than asserted.

## activityModel

| key | name | engine | phases | source | tutorials |
|---|---|---|---|---|---|
| `cosmoSAC` | COSMO-SAC (2002, Lin-Sandler / NIST variant) | all | liquid | `src/thermo/activityCoefficient/CosmoSac.cpp` | `tutorials/props/molecular/cosmoSAC01_water_ethanol` |
| `ideal` | Ideal solution (Raoult, gamma=1) | all | liquid | `src/thermo/activityCoefficient/IdealSolution.cpp` |  |
| `NRTL` | NRTL (non-random two-liquid) | all | liquid | `src/thermo/activityCoefficient/NRTL.cpp` | `tutorials/steady/flash/bubbleT01_ethanol_water`, `tutorials/steady/distillation/column03_azeotrope_mesh`, `tutorials/steady/crystallisation/crystalliser09_KHT_KCl_series` |
| `UNIFAC` | UNIFAC (group contribution) | all | liquid | `src/thermo/activityCoefficient/UNIFAC.cpp` | `tutorials/steady/distillation/column05_reactive_methylacetate`, `tutorials/steady/absorption/extract01_ethanol_water_benzene`, `tutorials/props/scan/ternary03_lle_water_ethanol_benzene` |
| `UNIQUAC` | UNIQUAC (universal quasi-chemical) | all | liquid | `src/thermo/activityCoefficient/UNIQUAC.cpp` | `tutorials/batch/reactor/batch07_lhhw_methylAcetate`, `tutorials/props/scan/binary01_lle_water_nbutanol`, `tutorials/steady/flash/bubbleT02_uniquac_ethanol_water` |
| `Wilson` | Wilson (local-composition) | all | liquid | `src/thermo/activityCoefficient/Wilson.cpp` | `tutorials/steady/flash/flash03_wilson_ethanol_water` |

## equationOfState

| key | name | engine | phases | source | tutorials |
|---|---|---|---|---|---|
| `idealGas` | Ideal gas | all | vapour | `src/thermo/equationOfState/IdealGas.cpp` | `tutorials/steady/flash/adiabaticFlash01_benzene_toluene`, `tutorials/steady/absorption/absorber01_NH3_water` |
| `PR` | Peng-Robinson (alias PengRobinson) | all | vapour/liquid | `src/thermo/equationOfState/PR.cpp` |  |
| `SRK` | Soave-Redlich-Kwong | all | vapour/liquid | `src/thermo/equationOfState/SRK.cpp` | `tutorials/steady/flowsheets/ammonia01_synthesis_loop`, `tutorials/plant/ammonia02_full_plant`, `tutorials/steady/gibbs/gibbs10_ammonia_fugacity` |

## vaporPressure

| key | name | engine | phases | source | tutorials |
|---|---|---|---|---|---|
| `AmbroseWalton` | Ambrose-Walton corresponding-states vapour pressure | all | vapour/liquid | `src/thermo/vaporPressure/VaporPressureModel.cpp` | `tutorials/props/compare/compare_psat_ambrose_walton`, `tutorials/props/estimate/estimate_acetone` |
| `Antoine` | Antoine (extended) vapour pressure | all | vapour/liquid | `src/thermo/vaporPressure/VaporPressureModel.cpp` | `tutorials/steady/flash/adiabaticFlash01_benzene_toluene`, `tutorials/steady/absorption/absorber01_NH3_water` |

## heatCapacity

| key | name | engine | phases | source | tutorials |
|---|---|---|---|---|---|
| `NASA7` | NASA 7-coefficient polynomial Cp (CHEMKIN form; NASA TM-4513) | all | vapour/solid | `src/thermo/heatCapacity/NASA7Cp.cpp` | `tutorials/steady/gibbs/gibbs11_carbon_deposition`, `tutorials/steady/gibbs/gibbs12_element_potential_newton` |
| `NASA9` | NASA Glenn 9-coefficient polynomial Cp (NASA/TP-2002-211556) | all | vapour | `src/thermo/heatCapacity/NASA9Cp.cpp` | `tutorials/steady/gibbs/gibbs06_h2_flame_radicals`, `tutorials/batch/combustion/ignition01_h2o2`, `tutorials/batch/combustion/ignition02_h2air_slack`, `tutorials/batch/combustion/nox01_zeldovich_postflame` |
| `polynomial` | Polynomial ideal-gas Cp | all | vapour/liquid | `src/thermo/heatCapacity/PolynomialCp.cpp` | `tutorials/steady/flash/adiabaticFlash01_benzene_toluene`, `tutorials/steady/absorption/absorber01_NH3_water` |

## electrolyteModel

| key | name | engine | phases | source | tutorials |
|---|---|---|---|---|---|
| `davies` | Davies-equation ionic activity | choupoProps | aqueous | `src/thermo/electrolyte/AqueousActivity.cpp` | `tutorials/props/electrolyte/composition01_nacl`, `tutorials/props/electrolyte/ksp_temperature`, `tutorials/steady/membranes/membrane09_index_vs_rigorous` |
| `eNRTL` | Electrolyte-NRTL (single-salt / multi-salt / mixed-solvent adapters) | all | aqueous | `src/thermo/activityCoefficient/ElectrolyteActivity.cpp` | `tutorials/steady/crystallisation/crystalliser05_nacl_pitzer`, `tutorials/steady/crystallisation/crystalliser06_nacl_antisolvent`, `tutorials/steady/crystallisation/crystalliser07_nacl_antisolvent_cooled` |
| `pitzer` | Pitzer single-salt VLE/Ksp adapter (ElectrolyteActivity) | all | aqueous | `src/thermo/activityCoefficient/ElectrolyteActivity.cpp` | `tutorials/steady/crystallisation/crystalliser05_nacl_pitzer`, `tutorials/steady/crystallisation/crystalliser06_nacl_antisolvent` |
| `pitzerHMW` | Pitzer-Harvie-Moller-Weare multi-ion speciation | choupoProps | aqueous | `src/thermo/electrolyte/PitzerHMW.cpp` | `tutorials/props/electrolyte/farelo_licl_range`, `tutorials/props/electrolyte/farelo_nacl_nh4cl` |
| `speciationSolver` | Ion speciation solver (mass-action + charge/mass balance) | choupoProps | aqueous | `src/thermo/electrolyte/SpeciationSolver.cpp` | `tutorials/props/electrolyte/composition01_nacl` |

## transportModel

| key | name | engine | phases | source | tutorials |
|---|---|---|---|---|---|
| `Andrade` | Andrade liquid viscosity | all | liquid | `src/thermo/transport/Andrade.cpp` |  |
| `Chung` | Chung low-pressure gas viscosity | all | vapour | `src/thermo/transport/ChungViscosity.cpp` |  |
| `Eucken` | Eucken gas thermal conductivity | all | vapour | `src/thermo/transport/Eucken.cpp` |  |
| `Fuller` | Fuller binary gas diffusivity | all | vapour | `src/thermo/transport/Fuller.cpp` |  |
| `SatoRiedel` | Sato-Riedel liquid thermal conductivity | all | liquid | `src/thermo/transport/SatoRiedel.cpp` |  |
| `Vogel` | Vogel liquid viscosity | all | liquid | `src/thermo/transport/Vogel.cpp` |  |
| `WilkeChang` | Wilke-Chang liquid diffusivity | all | liquid | `src/thermo/transport/WilkeChang.cpp` |  |

## phaseEquilibrium

| key | name | engine | phases | source | tutorials |
|---|---|---|---|---|---|
| `henry` | Henry adsorption isotherm | all | solid | `src/thermo/adsorbent/IsothermModel.cpp` | `tutorials/batch/adsorber/batch11_adsorber_henry` |
| `langmuir` | Langmuir adsorption isotherm | all | solid | `src/thermo/adsorbent/IsothermModel.cpp` | `tutorials/batch/adsorber/batch09_adsorber_co2`, `tutorials/batch/adsorber/batch10_adsorber_co2_n2` |
| `liquid` | Liquid phase (activity/EoS Gibbs surface) | all | liquid | `src/thermo/phase/LiquidPhase.cpp` |  |
| `solid` | Solid phase | all | solid | `src/thermo/phase/SolidPhase.cpp` |  |
| `stabilityTest` | Michelsen TPD phase-stability test | all | vapour/liquid | `src/solver/StabilityTest.cpp` | `tutorials/steady/flash/vlle03_audit_artificial` |
| `vapor` | Vapour phase | all | vapour | `src/thermo/phase/VaporPhase.cpp` |  |

## numericalSolver

| key | name | engine | phases | source | tutorials |
|---|---|---|---|---|---|
| `ActiveSetQP` | Active-set quadratic-programming subsolver (for SQP) | choupoSolve | None | `src/solver/ActiveSetQP.cpp` |  |
| `EulerSI` | Semi-implicit Euler ODE integrator | choupoBatch | None | `src/solver/ODE/EulerSI.cpp` |  |
| `LU` | LU decomposition linear solver | all | None | `src/solver/LU.cpp` |  |
| `NelderMead` | Nelder-Mead simplex (unconstrained optimisation) | all | None | `src/solver/NelderMead.cpp` | `tutorials/steady/optimisation/optim01_column_reflux` |
| `NewtonND` | n-dimensional Newton-Raphson (tear/MESH systems) | all | None | `src/solver/NewtonND.cpp` |  |
| `NewtonRaphson` | 1-D Newton-Raphson | all | None | `src/solver/NewtonRaphson.cpp` |  |
| `Rosenbrock23` | Rosenbrock23 adaptive stiff ODE integrator | choupoBatch | None | `src/solver/ODE/Rosenbrock23.cpp` | `tutorials/batch/reactor/batch06_adaptive_runaway`, `tutorials/batch/adsorber/batch13_breakthrough_co2`, `tutorials/batch/adsorber/batch15_mesh_study` |
| `RK4` | Classical 4th-order Runge-Kutta ODE integrator | choupoBatch | None | `src/solver/ODE/RK4.cpp` | `tutorials/batch/reactor/batch01_first_order`, `tutorials/batch/reactor/batch04_reversible_wgs`, `tutorials/batch/reactor/batch05_crystalliser` |
| `SQP` | Sequential quadratic programming (constrained optimisation) | all | None | `src/solver/SQP.cpp` | `tutorials/steady/optimisation/optim02_process_cost` |
| `Wegstein` | Wegstein recycle-convergence accelerator | choupoSolve | None | `src/solver/Wegstein.cpp` |  |

## outerDriver

| key | name | engine | phases | source | tutorials |
|---|---|---|---|---|---|
| `designSpec` | Design-spec driver (adjust input to hit output target) | choupoSolve | None | `src/outerDriver/DesignSpec.cpp` | `tutorials/steady/rotating/compressor02_designspec_pout`, `tutorials/steady/optimisation/designSpec01_triple_equal_areas`, `tutorials/steady/power/brayton01_gas_turbine` |
| `gridSweep` | Multi-dimensional grid parameter sweep | all | None | `src/outerDriver/GridSweepDriver.cpp` | `tutorials/steady/flash/flash07_gridsweep_TP` |
| `optimization` | Optimisation driver (Nelder-Mead / SQP) | all | None | `src/outerDriver/OptimizationDriver.cpp` | `tutorials/steady/optimisation/optim01_column_reflux`, `tutorials/steady/optimisation/optim02_process_cost`, `tutorials/steady/optimisation/optim04_membrane_recovery_scaling` |
| `paretoSweep` | Pareto front by epsilon-constraint over the SQP | all | None | `src/outerDriver/ParetoSweepDriver.cpp` | `tutorials/steady/optimisation/pareto01_purity_energy` |
| `sweep` | 1-D parameter sweep | all | None | `src/outerDriver/SweepDriver.cpp` | `tutorials/steady/flash/flash06_sweep_T`, `tutorials/steady/economics/economics02_irr_sweep` |

## postProcessing

| key | name | engine | phases | source | tutorials |
|---|---|---|---|---|---|
| `costing` | Costing pass (Turton App. A purchased + bare-module + total-module cost) | all | None | `src/postProcessing/costing/Turton.cpp` | `tutorials/steady/economics/economics01_esterification_dcf`, `tutorials/plant/ammonia02_full_plant` |
| `economics` | Economics pass (OPEX, revenue, DCF/NPV/IRR/payback) | all | None | `src/postProcessing/PostProcessor.cpp` | `tutorials/steady/economics/economics01_esterification_dcf`, `tutorials/steady/economics/economics02_irr_sweep`, `tutorials/steady/optimisation/optim05_reactor_npv` |
| `sizing` | Sizing pass (equipment realisation: stirredTank, shellTubeHX, evaporator, crystalliser, sprayDryer, cyclone, compressor, vessel) | all | None | `src/postProcessing/sizing/EquipmentSize.cpp` | `tutorials/steady/economics/economics01_esterification_dcf`, `tutorials/steady/drying/sprayDryer07_design`, `tutorials/plant/ammonia02_full_plant` |

## unitOperation

| key | name | engine | phases | source | tutorials |
|---|---|---|---|---|---|
| `absorber` | Absorption column | choupoSolve | vapour/liquid | `src/unitOperations/separation/Absorber.cpp` | `tutorials/steady/absorption/absorber01_NH3_water` |
| `adiabaticFlash` | Adiabatic (energy-balance) flash | choupoSolve | vapour/liquid | `src/unitOperations/flash/AdiabaticFlash.cpp` | `tutorials/steady/flash/adiabaticFlash01_benzene_toluene` |
| `bagFilter` | Bag filter (gas-solid) | choupoSolve | vapour/solid | `src/unitOperations/separation/BagFilter.cpp` | `tutorials/steady/gas-solid/bagFilter01_dust` |
| `bubbleT` | Bubble-point temperature | choupoSolve | vapour/liquid | `src/unitOperations/saturation/BubblePoint.cpp` | `tutorials/steady/flash/bubbleT01_ethanol_water`, `tutorials/steady/flash/bubbleT02_uniquac_ethanol_water` |
| `compressor` | Compressor (W_shaft + isentropic efficiency) | choupoSolve | vapour | `src/unitOperations/rotating/Compressor.cpp` | `tutorials/steady/power/brayton01_gas_turbine`, `tutorials/plant/ammonia02_full_plant` |
| `conversionReactor` | Conversion (fixed-conversion) reactor | choupoSolve | vapour/liquid | `src/unitOperations/reactor/ConversionReactor.cpp` | `tutorials/steady/reactors/conversion01_hda`, `tutorials/steady/reactors/conversion02_parallel_selectivity`, `tutorials/steady/reactors/chlorophenol01_chlorination` |
| `crystalliser` | Crystalliser (cooling/antisolvent, PSD, ion-derived duty) | choupoSolve | liquid/solid | `src/unitOperations/crystallisation/Crystalliser.cpp` | `tutorials/steady/crystallisation/crystalliser05_nacl_pitzer`, `tutorials/steady/crystallisation/crystalliser06_nacl_antisolvent`, `tutorials/steady/crystallisation/crystalliser09_KHT_KCl_series` |
| `cstr` | Continuous stirred-tank reactor (power-law/LHHW) | choupoSolve | liquid/vapour | `src/unitOperations/reactor/CSTR.cpp` | `tutorials/steady/reactors/cstr01_first_order`, `tutorials/steady/reactors/cstr02_reversible_wgs`, `tutorials/steady/reactors/cstr03_series_selectivity` |
| `cyclone` | Cyclone (Lapple/Leith-Licht/Muschelknautz sub-models) | choupoSolve | vapour/solid | `src/unitOperations/separation/Cyclone.cpp` | `tutorials/steady/gas-solid/cyclone01_dust_removal`, `tutorials/steady/gas-solid/cyclone02_leith_licht` |
| `dewT` | Dew-point temperature | choupoSolve | vapour/liquid | `src/unitOperations/saturation/DewPoint.cpp` | `tutorials/steady/flash/dewT01_ethanol_water` |
| `distillationColumn` | Distillation column (Wang-Henke / simultaneous MESH; alias column) | choupoSolve | vapour/liquid | `src/unitOperations/distillation/DistillationColumn.cpp` | `tutorials/steady/distillation/column01_benzene_toluene`, `tutorials/steady/distillation/column02_simultaneous`, `tutorials/steady/distillation/column03_azeotrope_mesh` |
| `electrodialysisStack` | Electrodialysis stack | choupoSolve | aqueous | `src/unitOperations/electrochem/ElectrodialysisStack.cpp` | `tutorials/steady/electrodialysis/ed01_nacl_desalination`, `tutorials/steady/electrodialysis/ed02_over_limiting_current` |
| `electricLoad` | Electric load / power tally | choupoSolve | None | `src/unitOperations/rotating/ElectricLoad.cpp` | `tutorials/steady/power/combined01_brayton_rankine`, `tutorials/steady/electrodialysis/ed01_nacl_desalination` |
| `equilibriumReactor` | Equilibrium (Keq) reactor (alias REquil) | choupoSolve | vapour/liquid | `src/unitOperations/reactor/EquilibriumReactor.cpp` | `tutorials/steady/reactors/equil01_reforming` |
| `evaporativeDryer` | Evaporative dryer | choupoSolve | vapour/liquid/solid | `src/unitOperations/heatTransfer/EvaporativeDryer.cpp` |  |
| `evaporator` | Evaporator | choupoSolve | vapour/liquid | `src/unitOperations/heatTransfer/Evaporator.cpp` | `tutorials/steady/optimisation/designSpec01_triple_equal_areas` |
| `extractor` | Liquid-liquid extractor (alias extract) | choupoSolve | liquid | `src/unitOperations/separation/Extractor.cpp` | `tutorials/steady/absorption/extract01_ethanol_water_benzene` |
| `gasSolidSplitter` | Ideal gas-solid splitter | choupoSolve | vapour/solid | `src/unitOperations/separation/GasSolidSplitter.cpp` | `tutorials/steady/gas-solid/gasSolidSplitter01_ideal` |
| `gibbsReactor` | Gibbs free-energy minimisation reactor | choupoSolve | vapour/liquid/solid | `src/unitOperations/reactor/GibbsReactor.cpp` | `tutorials/steady/flowsheets/ammonia01_synthesis_loop`, `tutorials/steady/gibbs/gibbs06_h2_flame_radicals`, `tutorials/steady/gibbs/gibbs10_ammonia_fugacity`, `tutorials/steady/gibbs/gibbs11_carbon_deposition` |
| `heatExchanger` | Two-stream heat exchanger | choupoSolve | vapour/liquid | `src/unitOperations/heatTransfer/HeatExchanger.cpp` | `tutorials/plant/ammonia02_full_plant`, `tutorials/steady/power/combined01_brayton_rankine` |
| `heater` | Heater/cooler (Q-spec) | choupoSolve | vapour/liquid | `src/unitOperations/heatTransfer/Heater.cpp` | `tutorials/steady/thermo/air01_heater_expand`, `tutorials/steady/power/brayton01_gas_turbine` |
| `ionExchanger` | Ion-exchange softener | choupoSolve | aqueous/solid | `src/unitOperations/separation/IonExchanger.cpp` | `tutorials/steady/membranes/membrane08_softened_scaling` |
| `isothermalFlash` | Isothermal flash / LL Gibbs minimisation (alias flash) | choupoSolve | vapour/liquid | `src/unitOperations/flash/IsothermalFlash.cpp` | `tutorials/steady/absorption/absorption01_CO2_water`, `tutorials/steady/flowsheets/ammonia01_synthesis_loop` |
| `mixer` | Stream mixer (P-equality) | choupoSolve | vapour/liquid/solid | `src/unitOperations/mixer/Mixer.cpp` | `tutorials/steady/flowsheets/ammonia01_synthesis_loop`, `tutorials/plant/ammonia02_full_plant` |
| `multiStreamHX` | Multi-stream heat exchanger (alias MHeatX) | choupoSolve | vapour/liquid | `src/unitOperations/heatTransfer/MultiStreamHX.cpp` | `tutorials/steady/heat/mheatx01_two_hot_one_cold` |
| `phaseChanger` | Total/partial boiler or condenser (aliases boiler, condenser) | choupoSolve | vapour/liquid | `src/unitOperations/heatTransfer/PhaseChanger.cpp` | `tutorials/steady/heat/condenser01_film_nusselt`, `tutorials/steady/heat/phasechange01_partial_condenser`, `tutorials/steady/power/rankine02_water` |
| `pfr` | Plug-flow reactor (power-law/LHHW) | choupoSolve | liquid/vapour | `src/unitOperations/reactor/PFR.cpp` | `tutorials/steady/reactors/pfr01_first_order`, `tutorials/steady/reactors/pfr02_reversible_wgs`, `tutorials/steady/reactors/pfr03_series_selectivity` |
| `pipe` | Pipe segment (single/two-phase pressure drop) | choupoSolve | vapour/liquid | `src/unitOperations/hydraulics/Pipe.cpp` | `tutorials/steady/hydraulics/pipe01_water_line`, `tutorials/steady/hydraulics/pipe02_airwater_twophase` |
| `pneumaticConveyor` | Pneumatic (gas-solid) conveyor | choupoSolve | vapour/solid | `src/unitOperations/hydraulics/PneumaticConveyor.cpp` | `tutorials/steady/solids/pneumaticConveyor01_sand`, `tutorials/steady/solids/pneumaticConveyor02_bends` |
| `psa` | Pressure-swing adsorption | choupoSolve | vapour/solid | `src/unitOperations/separation/PSA.cpp` | `tutorials/steady/separation/psa01_h2_psa` |
| `pump` | Pump (W_shaft + efficiency) | choupoSolve | liquid | `src/unitOperations/rotating/Pump.cpp` | `tutorials/steady/rotating/pump01_water`, `tutorials/steady/rotating/pump02_pressure_spec`, `tutorials/steady/power/rankine02_water` |
| `shortcutColumn` | Shortcut column (Fenske-Underwood-Gilliland; alias FUG) | choupoSolve | vapour/liquid | `src/unitOperations/distillation/ShortcutColumn.cpp` | `tutorials/steady/distillation/shortcut01_benzene_toluene` |
| `solidDryer` | Solid dryer (drying air as a real stream) | choupoSolve | vapour/liquid/solid | `src/unitOperations/heatTransfer/SolidDryer.cpp` | `tutorials/steady/drying/solidDryer01_sugar` |
| `splitter` | Stream splitter | choupoSolve | vapour/liquid/solid | `src/unitOperations/mixer/Splitter.cpp` | `tutorials/steady/flowsheets/ammonia01_synthesis_loop`, `tutorials/plant/ammonia02_full_plant` |
| `spiralWoundModule` | Spiral-wound membrane module (NF/RO, solution-diffusion; alias membraneSW) | choupoSolve | aqueous | `src/unitOperations/membrane/SpiralWoundModule.cpp` | `tutorials/steady/membranes/membrane01_RO_NaCl_seawater`, `tutorials/steady/membranes/membrane02_NF_sugar`, `tutorials/steady/membranes/membrane03_concentration_polarization` |
| `sprayDryer` | Spray dryer | choupoSolve | vapour/liquid/solid | `src/unitOperations/heatTransfer/SprayDryer.cpp` | `tutorials/steady/drying/sprayDryer01_sugar` |
| `stripper` | Stripping column | choupoSolve | vapour/liquid | `src/unitOperations/separation/Stripper.cpp` | `tutorials/steady/absorption/stripper01_NH3_water` |
| `tsaTwinBed` | Temperature-swing adsorption twin bed | choupoSolve | vapour/solid | `src/unitOperations/separation/TSATwinBed.cpp` | `tutorials/steady/separation/tsa01_co2_twin_bed`, `tutorials/steady/separation/tsa02_refused_capacity` |
| `turbine` | Turbine (W_shaft + isentropic efficiency) | choupoSolve | vapour | `src/unitOperations/rotating/Turbine.cpp` | `tutorials/steady/power/brayton01_gas_turbine`, `tutorials/steady/power/combined01_brayton_rankine` |
| `valve` | Valve (isenthalpic throttle) | choupoSolve | vapour/liquid | `src/unitOperations/valve/Valve.cpp` | `tutorials/steady/flowsheets/credo01_valve_heater_drum` |
| `batchAccumulator` | Batch accumulator / receiver | choupoBatch | liquid | `src/unitOperations/batch/BatchAccumulator.cpp` | `tutorials/batch/recipes/recipe04_charge_enthalpy`, `tutorials/batch/still/still03_with_receiver`, `tutorials/batch/still/still04_rectifier_benzene_toluene` |
| `batchAdsorber` | Batch (well-mixed) adsorber | choupoBatch | vapour/solid | `src/unitOperations/batch/BatchAdsorber.cpp` | `tutorials/batch/adsorber/batch09_adsorber_co2`, `tutorials/batch/adsorber/batch10_adsorber_co2_n2`, `tutorials/batch/adsorber/batch11_adsorber_henry` |
| `batchCrystalliser` | Batch crystalliser | choupoBatch | liquid/solid | `src/unitOperations/batch/BatchCrystalliser.cpp` | `tutorials/batch/reactor/batch05_crystalliser` |
| `batchReactor` | Batch reactor (dY/dt = f) | choupoBatch | liquid/vapour | `src/unitOperations/batch/BatchReactor.cpp` | `tutorials/batch/reactor/batch01_first_order`, `tutorials/batch/reactor/batch02_adiabatic`, `tutorials/batch/reactor/batch03_consecutive` |
| `batchStill` | Batch still / rectifier | choupoBatch | vapour/liquid | `src/unitOperations/batch/BatchStill.cpp` | `tutorials/batch/still/still01_benzene_toluene`, `tutorials/batch/recipes/recipe01_react_then_distill`, `tutorials/batch/recipes/recipe03_conditional_partial` |
| `fixedBedAdsorber` | Fixed-bed adsorber (breakthrough) | choupoBatch | vapour/solid | `src/unitOperations/batch/FixedBedAdsorber.cpp` | `tutorials/batch/adsorber/batch13_breakthrough_co2`, `tutorials/batch/adsorber/batch14_transport_only`, `tutorials/batch/adsorber/batch15_mesh_study` |
| `dynamicCSTR` | Dynamic CSTR (DAE, control-ready) | choupoCtrl | liquid/vapour | `src/unitOperations/dynamic/DynamicCSTR.cpp` | `tutorials/ctrl/ctrl01_cstr_temp_control`, `tutorials/ctrl/ctrl02_disturbance_rejection`, `tutorials/ctrl/ctrl03_adaptive_disturbance` |
| `PID` | PID controller block | choupoCtrl | None | `src/control/PIDController.cpp` | `tutorials/ctrl/ctrl01_cstr_temp_control`, `tutorials/ctrl/ctrl02_disturbance_rejection`, `tutorials/ctrl/ctrl03_adaptive_disturbance` |
| `Schedule` | Schedule (setpoint programme) controller | choupoCtrl | None | `src/control/ScheduleController.cpp` |  |
| `Signal` | Signal-source controller block | choupoCtrl | None | `src/control/SignalController.cpp` |  |

## databank

| key | name | records | source |
|---|---|---|---|
| `components` | Pure-component property records | 608 | `data/standards/components/` |
| `species` | Aqueous / gas / solid model-species records | 53 | `data/standards/species/` |
| `chemistry` | Equilibrium reaction records (dissolution, association, gas-liquid) | 78 | `data/standards/chemistry/` |
| `conventions` | Versioned convention profiles (identity of a parameterisation) | 4 | `data/standards/conventions/` |
| `parameters.NRTL` | NRTL binary-interaction pairs (public catalogue) | 9 | `data/standards/parameters/NRTL/` |
| `parameters.UNIQUAC` | UNIQUAC binary-interaction pairs (public catalogue) | 3 | `data/standards/parameters/UNIQUAC/` |
| `parameters.UNIFAC` | UNIFAC group-interaction tables | 2 | `data/standards/parameters/UNIFAC/` |
| `parameters.Henry` | Henry's-law gas-solvent pairs | 206 | `data/standards/parameters/Henry/` |
| `parameters.Pitzer` | Pitzer (Harvie-Moller-Weare) ion-interaction pairs | 120 | `data/standards/parameters/Pitzer/` |
| `parameters.eNRTL` | eNRTL electrolyte pairs | 3 | `data/standards/parameters/eNRTL/` |
| `parameters.EdwardsPitzer` | Edwards et al. (1978) truncated-Pitzer pairs | 34 | `data/standards/parameters/EdwardsPitzer/` |
| `parameters.SRK` | SRK binary interaction parameters | 1 | `data/standards/parameters/SRK/` |
| `parameters.adsorption` | Adsorption isotherm parameter records | 15 | `data/standards/parameters/adsorption/` |
| `parameters.solution` | Solution-property parameter records | 2 | `data/standards/parameters/solution/` |
| `mixtures` | Named mixture records | 3 | `data/standards/mixtures/` |
| `assets` | Plant assets, flat with a `kind` field: construction materials, membranes, membrane classes, membrane modules, feed spacers, electrodialysis stacks, adsorbents, ion-exchange media | 33 | `data/standards/assets/` |
| `utilities` | Plant utility services | 10 | `data/standards/utilities/` |
| `groupEstimative` | Choupo's own open group-contribution estimates (Joback / Lee-Kesler), flagged as estimates | 28563 | `data/groupEstimative/` |
