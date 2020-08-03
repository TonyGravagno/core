import * as classes from './classes';

export class events {
   static event (
      name: 'com.destroystokyo.paper.event.block.AnvilDamagedEvent',
      ...listeners: ((event: classes.AnvilDamagedEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.AreaEffectCloudApplyEvent',
      ...listeners: ((event: classes.AreaEffectCloudApplyEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.AsyncPlayerChatEvent',
      ...listeners: ((event: classes.AsyncPlayerChatEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.AsyncPlayerPreLoginEvent',
      ...listeners: ((event: classes.AsyncPlayerPreLoginEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.server.AsyncTabCompleteEvent',
      ...listeners: ((event: classes.AsyncTabCompleteEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.BatToggleSleepEvent',
      ...listeners: ((event: classes.BatToggleSleepEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.block.BeaconEffectEvent',
      ...listeners: ((event: classes.BeaconEffectEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockBreakEvent',
      ...listeners: ((event: classes.BlockBreakEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockBurnEvent',
      ...listeners: ((event: classes.BlockBurnEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockCanBuildEvent',
      ...listeners: ((event: classes.BlockCanBuildEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockCookEvent',
      ...listeners: ((event: classes.BlockCookEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockDamageEvent',
      ...listeners: ((event: classes.BlockDamageEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.block.BlockDestroyEvent',
      ...listeners: ((event: classes.BlockDestroyEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockDispenseArmorEvent',
      ...listeners: ((event: classes.BlockDispenseArmorEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockDispenseEvent',
      ...listeners: ((event: classes.BlockDispenseEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockDropItemEvent',
      ...listeners: ((event: classes.BlockDropItemEvent) => {})[]
   ): void;
   static event (name: 'org.bukkit.event.block.BlockEvent', ...listeners: ((event: classes.BlockEvent) => {})[]): void;
   static event (
      name: 'org.bukkit.event.block.BlockExpEvent',
      ...listeners: ((event: classes.BlockExpEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockExplodeEvent',
      ...listeners: ((event: classes.BlockExplodeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockFadeEvent',
      ...listeners: ((event: classes.BlockFadeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockFertilizeEvent',
      ...listeners: ((event: classes.BlockFertilizeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockFormEvent',
      ...listeners: ((event: classes.BlockFormEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockFromToEvent',
      ...listeners: ((event: classes.BlockFromToEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockGrowEvent',
      ...listeners: ((event: classes.BlockGrowEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockIgniteEvent',
      ...listeners: ((event: classes.BlockIgniteEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockMultiPlaceEvent',
      ...listeners: ((event: classes.BlockMultiPlaceEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockPhysicsEvent',
      ...listeners: ((event: classes.BlockPhysicsEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockPistonEvent',
      ...listeners: ((event: classes.BlockPistonEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockPistonExtendEvent',
      ...listeners: ((event: classes.BlockPistonExtendEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockPistonRetractEvent',
      ...listeners: ((event: classes.BlockPistonRetractEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockPlaceEvent',
      ...listeners: ((event: classes.BlockPlaceEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockRedstoneEvent',
      ...listeners: ((event: classes.BlockRedstoneEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockShearEntityEvent',
      ...listeners: ((event: classes.BlockShearEntityEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.BlockSpreadEvent',
      ...listeners: ((event: classes.BlockSpreadEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.inventory.BrewEvent',
      ...listeners: ((event: classes.BrewEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.inventory.BrewingStandFuelEvent',
      ...listeners: ((event: classes.BrewingStandFuelEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.server.BroadcastMessageEvent',
      ...listeners: ((event: classes.BroadcastMessageEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.CauldronLevelChangeEvent',
      ...listeners: ((event: classes.CauldronLevelChangeEvent) => {})[]
   ): void;
   static event (name: 'org.bukkit.event.world.ChunkEvent', ...listeners: ((event: classes.ChunkEvent) => {})[]): void;
   static event (
      name: 'org.bukkit.event.world.ChunkLoadEvent',
      ...listeners: ((event: classes.ChunkLoadEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.world.ChunkPopulateEvent',
      ...listeners: ((event: classes.ChunkPopulateEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.world.ChunkUnloadEvent',
      ...listeners: ((event: classes.ChunkUnloadEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.conversations.ConversationAbandonedEvent',
      ...listeners: ((event: classes.ConversationAbandonedEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.inventory.CraftItemEvent',
      ...listeners: ((event: classes.CraftItemEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.CreatureSpawnEvent',
      ...listeners: ((event: classes.CreatureSpawnEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.CreeperIgniteEvent',
      ...listeners: ((event: classes.CreeperIgniteEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.CreeperPowerEvent',
      ...listeners: ((event: classes.CreeperPowerEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.enchantment.EnchantItemEvent',
      ...listeners: ((event: classes.EnchantItemEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EnderDragonChangePhaseEvent',
      ...listeners: ((event: classes.EnderDragonChangePhaseEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.EnderDragonFireballHitEvent',
      ...listeners: ((event: classes.EnderDragonFireballHitEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.EnderDragonFlameEvent',
      ...listeners: ((event: classes.EnderDragonFlameEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.EnderDragonShootFireballEvent',
      ...listeners: ((event: classes.EnderDragonShootFireballEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.EndermanAttackPlayerEvent',
      ...listeners: ((event: classes.EndermanAttackPlayerEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.EndermanEscapeEvent',
      ...listeners: ((event: classes.EndermanEscapeEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.EntityAddToWorldEvent',
      ...listeners: ((event: classes.EntityAddToWorldEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityAirChangeEvent',
      ...listeners: ((event: classes.EntityAirChangeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.EntityBlockFormEvent',
      ...listeners: ((event: classes.EntityBlockFormEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityBreakDoorEvent',
      ...listeners: ((event: classes.EntityBreakDoorEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityBreedEvent',
      ...listeners: ((event: classes.EntityBreedEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityChangeBlockEvent',
      ...listeners: ((event: classes.EntityChangeBlockEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityCombustByBlockEvent',
      ...listeners: ((event: classes.EntityCombustByBlockEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityCombustByEntityEvent',
      ...listeners: ((event: classes.EntityCombustByEntityEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityCombustEvent',
      ...listeners: ((event: classes.EntityCombustEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityCreatePortalEvent',
      ...listeners: ((event: classes.EntityCreatePortalEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityDamageByBlockEvent',
      ...listeners: ((event: classes.EntityDamageByBlockEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityDamageByEntityEvent',
      ...listeners: ((event: classes.EntityDamageByEntityEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityDamageEvent',
      ...listeners: ((event: classes.EntityDamageEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityDeathEvent',
      ...listeners: ((event: classes.EntityDeathEvent) => {})[]
   ): void;
   static event (
      name: 'org.spigotmc.event.entity.EntityDismountEvent',
      ...listeners: ((event: classes.EntityDismountEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityDropItemEvent',
      ...listeners: ((event: classes.EntityDropItemEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityEnterBlockEvent',
      ...listeners: ((event: classes.EntityEnterBlockEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityEnterLoveModeEvent',
      ...listeners: ((event: classes.EntityEnterLoveModeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityEvent',
      ...listeners: ((event: classes.EntityEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityExplodeEvent',
      ...listeners: ((event: classes.EntityExplodeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityInteractEvent',
      ...listeners: ((event: classes.EntityInteractEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.EntityJumpEvent',
      ...listeners: ((event: classes.EntityJumpEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.EntityKnockbackByEntityEvent',
      ...listeners: ((event: classes.EntityKnockbackByEntityEvent) => {})[]
   ): void;
   static event (
      name: 'org.spigotmc.event.entity.EntityMountEvent',
      ...listeners: ((event: classes.EntityMountEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.EntityPathfindEvent',
      ...listeners: ((event: classes.EntityPathfindEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityPickupItemEvent',
      ...listeners: ((event: classes.EntityPickupItemEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityPlaceEvent',
      ...listeners: ((event: classes.EntityPlaceEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityPortalEnterEvent',
      ...listeners: ((event: classes.EntityPortalEnterEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityPortalEvent',
      ...listeners: ((event: classes.EntityPortalEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityPortalExitEvent',
      ...listeners: ((event: classes.EntityPortalExitEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityPoseChangeEvent',
      ...listeners: ((event: classes.EntityPoseChangeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityPotionEffectEvent',
      ...listeners: ((event: classes.EntityPotionEffectEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityRegainHealthEvent',
      ...listeners: ((event: classes.EntityRegainHealthEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.EntityRemoveFromWorldEvent',
      ...listeners: ((event: classes.EntityRemoveFromWorldEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityResurrectEvent',
      ...listeners: ((event: classes.EntityResurrectEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityShootBowEvent',
      ...listeners: ((event: classes.EntityShootBowEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntitySpawnEvent',
      ...listeners: ((event: classes.EntitySpawnEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityTameEvent',
      ...listeners: ((event: classes.EntityTameEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityTargetEvent',
      ...listeners: ((event: classes.EntityTargetEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityTargetLivingEntityEvent',
      ...listeners: ((event: classes.EntityTargetLivingEntityEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.EntityTeleportEndGatewayEvent',
      ...listeners: ((event: classes.EntityTeleportEndGatewayEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityTeleportEvent',
      ...listeners: ((event: classes.EntityTeleportEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityToggleGlideEvent',
      ...listeners: ((event: classes.EntityToggleGlideEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityToggleSwimEvent',
      ...listeners: ((event: classes.EntityToggleSwimEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.EntityTransformedEvent',
      ...listeners: ((event: classes.EntityTransformedEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityTransformEvent',
      ...listeners: ((event: classes.EntityTransformEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.EntityUnleashEvent',
      ...listeners: ((event: classes.EntityUnleashEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.EntityZapEvent',
      ...listeners: ((event: classes.EntityZapEvent) => {})[]
   ): void;
   static event (name: 'org.bukkit.event.Event', ...listeners: ((event: classes.Event) => {})[]): void;
   static event (
      name: 'org.bukkit.event.entity.ExpBottleEvent',
      ...listeners: ((event: classes.ExpBottleEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.ExperienceOrbMergeEvent',
      ...listeners: ((event: classes.ExperienceOrbMergeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.ExplosionPrimeEvent',
      ...listeners: ((event: classes.ExplosionPrimeEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.profile.FillProfileEvent',
      ...listeners: ((event: classes.FillProfileEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.FireworkExplodeEvent',
      ...listeners: ((event: classes.FireworkExplodeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.FluidLevelChangeEvent',
      ...listeners: ((event: classes.FluidLevelChangeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.FoodLevelChangeEvent',
      ...listeners: ((event: classes.FoodLevelChangeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.inventory.FurnaceBurnEvent',
      ...listeners: ((event: classes.FurnaceBurnEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.inventory.FurnaceExtractEvent',
      ...listeners: ((event: classes.FurnaceExtractEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.inventory.FurnaceSmeltEvent',
      ...listeners: ((event: classes.FurnaceSmeltEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.server.GS4QueryEvent',
      ...listeners: ((event: classes.GS4QueryEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.hanging.HangingBreakByEntityEvent',
      ...listeners: ((event: classes.HangingBreakByEntityEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.hanging.HangingBreakEvent',
      ...listeners: ((event: classes.HangingBreakEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.hanging.HangingEvent',
      ...listeners: ((event: classes.HangingEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.hanging.HangingPlaceEvent',
      ...listeners: ((event: classes.HangingPlaceEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.HorseJumpEvent',
      ...listeners: ((event: classes.HorseJumpEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.player.IllegalPacketEvent',
      ...listeners: ((event: classes.IllegalPacketEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.inventory.InventoryClickEvent',
      ...listeners: ((event: classes.InventoryClickEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.inventory.InventoryCloseEvent',
      ...listeners: ((event: classes.InventoryCloseEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.inventory.InventoryCreativeEvent',
      ...listeners: ((event: classes.InventoryCreativeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.inventory.InventoryDragEvent',
      ...listeners: ((event: classes.InventoryDragEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.inventory.InventoryEvent',
      ...listeners: ((event: classes.InventoryEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.inventory.InventoryInteractEvent',
      ...listeners: ((event: classes.InventoryInteractEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.inventory.InventoryMoveItemEvent',
      ...listeners: ((event: classes.InventoryMoveItemEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.inventory.InventoryOpenEvent',
      ...listeners: ((event: classes.InventoryOpenEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.inventory.InventoryPickupItemEvent',
      ...listeners: ((event: classes.InventoryPickupItemEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.ItemDespawnEvent',
      ...listeners: ((event: classes.ItemDespawnEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.ItemMergeEvent',
      ...listeners: ((event: classes.ItemMergeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.ItemSpawnEvent',
      ...listeners: ((event: classes.ItemSpawnEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.LeavesDecayEvent',
      ...listeners: ((event: classes.LeavesDecayEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.weather.LightningStrikeEvent',
      ...listeners: ((event: classes.LightningStrikeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.LingeringPotionSplashEvent',
      ...listeners: ((event: classes.LingeringPotionSplashEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.profile.LookupProfileEvent',
      ...listeners: ((event: classes.LookupProfileEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.loottable.LootableInventoryReplenishEvent',
      ...listeners: ((event: classes.LootableInventoryReplenishEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.world.LootGenerateEvent',
      ...listeners: ((event: classes.LootGenerateEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.server.MapInitializeEvent',
      ...listeners: ((event: classes.MapInitializeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.MoistureChangeEvent',
      ...listeners: ((event: classes.MoistureChangeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.NotePlayEvent',
      ...listeners: ((event: classes.NotePlayEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.server.PaperServerListPingEvent',
      ...listeners: ((event: classes.PaperServerListPingEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.PhantomPreSpawnEvent',
      ...listeners: ((event: classes.PhantomPreSpawnEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.PigZapEvent',
      ...listeners: ((event: classes.PigZapEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.PigZombieAngerEvent',
      ...listeners: ((event: classes.PigZombieAngerEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.player.PlayerAdvancementCriterionGrantEvent',
      ...listeners: ((event: classes.PlayerAdvancementCriterionGrantEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerAdvancementDoneEvent',
      ...listeners: ((event: classes.PlayerAdvancementDoneEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerAnimationEvent',
      ...listeners: ((event: classes.PlayerAnimationEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.player.PlayerArmorChangeEvent',
      ...listeners: ((event: classes.PlayerArmorChangeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerArmorStandManipulateEvent',
      ...listeners: ((event: classes.PlayerArmorStandManipulateEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.player.PlayerAttackEntityCooldownResetEvent',
      ...listeners: ((event: classes.PlayerAttackEntityCooldownResetEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerAttemptPickupItemEvent',
      ...listeners: ((event: classes.PlayerAttemptPickupItemEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerBedEnterEvent',
      ...listeners: ((event: classes.PlayerBedEnterEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerBedLeaveEvent',
      ...listeners: ((event: classes.PlayerBedLeaveEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerBucketEmptyEvent',
      ...listeners: ((event: classes.PlayerBucketEmptyEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerBucketEvent',
      ...listeners: ((event: classes.PlayerBucketEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerBucketFillEvent',
      ...listeners: ((event: classes.PlayerBucketFillEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerChangedMainHandEvent',
      ...listeners: ((event: classes.PlayerChangedMainHandEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerChangedWorldEvent',
      ...listeners: ((event: classes.PlayerChangedWorldEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerChannelEvent',
      ...listeners: ((event: classes.PlayerChannelEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerChatEvent',
      ...listeners: ((event: classes.PlayerChatEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerChatTabCompleteEvent',
      ...listeners: ((event: classes.PlayerChatTabCompleteEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.player.PlayerClientOptionsChangeEvent',
      ...listeners: ((event: classes.PlayerClientOptionsChangeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerCommandPreprocessEvent',
      ...listeners: ((event: classes.PlayerCommandPreprocessEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerCommandSendEvent',
      ...listeners: ((event: classes.PlayerCommandSendEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.player.PlayerConnectionCloseEvent',
      ...listeners: ((event: classes.PlayerConnectionCloseEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.PlayerDeathEvent',
      ...listeners: ((event: classes.PlayerDeathEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerDropItemEvent',
      ...listeners: ((event: classes.PlayerDropItemEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerEditBookEvent',
      ...listeners: ((event: classes.PlayerEditBookEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerEggThrowEvent',
      ...listeners: ((event: classes.PlayerEggThrowEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.player.PlayerElytraBoostEvent',
      ...listeners: ((event: classes.PlayerElytraBoostEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerEvent',
      ...listeners: ((event: classes.PlayerEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerExpChangeEvent',
      ...listeners: ((event: classes.PlayerExpChangeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerFishEvent',
      ...listeners: ((event: classes.PlayerFishEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerGameModeChangeEvent',
      ...listeners: ((event: classes.PlayerGameModeChangeEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.player.PlayerHandshakeEvent',
      ...listeners: ((event: classes.PlayerHandshakeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerHarvestBlockEvent',
      ...listeners: ((event: classes.PlayerHarvestBlockEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.player.PlayerInitialSpawnEvent',
      ...listeners: ((event: classes.PlayerInitialSpawnEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerInteractAtEntityEvent',
      ...listeners: ((event: classes.PlayerInteractAtEntityEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerInteractEntityEvent',
      ...listeners: ((event: classes.PlayerInteractEntityEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerInteractEvent',
      ...listeners: ((event: classes.PlayerInteractEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerItemBreakEvent',
      ...listeners: ((event: classes.PlayerItemBreakEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerItemConsumeEvent',
      ...listeners: ((event: classes.PlayerItemConsumeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerItemDamageEvent',
      ...listeners: ((event: classes.PlayerItemDamageEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerItemHeldEvent',
      ...listeners: ((event: classes.PlayerItemHeldEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerItemMendEvent',
      ...listeners: ((event: classes.PlayerItemMendEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerJoinEvent',
      ...listeners: ((event: classes.PlayerJoinEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.player.PlayerJumpEvent',
      ...listeners: ((event: classes.PlayerJumpEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerKickEvent',
      ...listeners: ((event: classes.PlayerKickEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.player.PlayerLaunchProjectileEvent',
      ...listeners: ((event: classes.PlayerLaunchProjectileEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.PlayerLeashEntityEvent',
      ...listeners: ((event: classes.PlayerLeashEntityEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerLevelChangeEvent',
      ...listeners: ((event: classes.PlayerLevelChangeEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.player.PlayerLocaleChangeEvent',
      ...listeners: ((event: classes.PlayerLocaleChangeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerLocaleChangeEvent',
      ...listeners: ((event: classes.PlayerLocaleChangeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerLoginEvent',
      ...listeners: ((event: classes.PlayerLoginEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerMoveEvent',
      ...listeners: ((event: classes.PlayerMoveEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.PlayerNaturallySpawnCreaturesEvent',
      ...listeners: ((event: classes.PlayerNaturallySpawnCreaturesEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerPickupArrowEvent',
      ...listeners: ((event: classes.PlayerPickupArrowEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.player.PlayerPickupExperienceEvent',
      ...listeners: ((event: classes.PlayerPickupExperienceEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerPickupItemEvent',
      ...listeners: ((event: classes.PlayerPickupItemEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerPortalEvent',
      ...listeners: ((event: classes.PlayerPortalEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.player.PlayerPostRespawnEvent',
      ...listeners: ((event: classes.PlayerPostRespawnEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerPreLoginEvent',
      ...listeners: ((event: classes.PlayerPreLoginEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerQuitEvent',
      ...listeners: ((event: classes.PlayerQuitEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.player.PlayerReadyArrowEvent',
      ...listeners: ((event: classes.PlayerReadyArrowEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.player.PlayerRecipeBookClickEvent',
      ...listeners: ((event: classes.PlayerRecipeBookClickEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerRecipeDiscoverEvent',
      ...listeners: ((event: classes.PlayerRecipeDiscoverEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerRegisterChannelEvent',
      ...listeners: ((event: classes.PlayerRegisterChannelEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerResourcePackStatusEvent',
      ...listeners: ((event: classes.PlayerResourcePackStatusEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerRespawnEvent',
      ...listeners: ((event: classes.PlayerRespawnEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerRiptideEvent',
      ...listeners: ((event: classes.PlayerRiptideEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerShearEntityEvent',
      ...listeners: ((event: classes.PlayerShearEntityEvent) => {})[]
   ): void;
   static event (
      name: 'org.spigotmc.event.player.PlayerSpawnLocationEvent',
      ...listeners: ((event: classes.PlayerSpawnLocationEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.player.PlayerStartSpectatingEntityEvent',
      ...listeners: ((event: classes.PlayerStartSpectatingEntityEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerStatisticIncrementEvent',
      ...listeners: ((event: classes.PlayerStatisticIncrementEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.player.PlayerStopSpectatingEntityEvent',
      ...listeners: ((event: classes.PlayerStopSpectatingEntityEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerSwapHandItemsEvent',
      ...listeners: ((event: classes.PlayerSwapHandItemsEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerTakeLecternBookEvent',
      ...listeners: ((event: classes.PlayerTakeLecternBookEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.player.PlayerTeleportEndGatewayEvent',
      ...listeners: ((event: classes.PlayerTeleportEndGatewayEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerTeleportEvent',
      ...listeners: ((event: classes.PlayerTeleportEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerToggleFlightEvent',
      ...listeners: ((event: classes.PlayerToggleFlightEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerToggleSneakEvent',
      ...listeners: ((event: classes.PlayerToggleSneakEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerToggleSprintEvent',
      ...listeners: ((event: classes.PlayerToggleSprintEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerUnleashEntityEvent',
      ...listeners: ((event: classes.PlayerUnleashEntityEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerUnregisterChannelEvent',
      ...listeners: ((event: classes.PlayerUnregisterChannelEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.player.PlayerUseUnknownEntityEvent',
      ...listeners: ((event: classes.PlayerUseUnknownEntityEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.player.PlayerVelocityEvent',
      ...listeners: ((event: classes.PlayerVelocityEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.server.PluginDisableEvent',
      ...listeners: ((event: classes.PluginDisableEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.server.PluginEnableEvent',
      ...listeners: ((event: classes.PluginEnableEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.server.PluginEvent',
      ...listeners: ((event: classes.PluginEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.world.PortalCreateEvent',
      ...listeners: ((event: classes.PortalCreateEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.PotionSplashEvent',
      ...listeners: ((event: classes.PotionSplashEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.PreCreatureSpawnEvent',
      ...listeners: ((event: classes.PreCreatureSpawnEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.profile.PreFillProfileEvent',
      ...listeners: ((event: classes.PreFillProfileEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.profile.PreLookupProfileEvent',
      ...listeners: ((event: classes.PreLookupProfileEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.inventory.PrepareAnvilEvent',
      ...listeners: ((event: classes.PrepareAnvilEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.inventory.PrepareGrindstoneEvent',
      ...listeners: ((event: classes.PrepareGrindstoneEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.inventory.PrepareItemCraftEvent',
      ...listeners: ((event: classes.PrepareItemCraftEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.enchantment.PrepareItemEnchantEvent',
      ...listeners: ((event: classes.PrepareItemEnchantEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.inventory.PrepareResultEvent',
      ...listeners: ((event: classes.PrepareResultEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.inventory.PrepareSmithingEvent',
      ...listeners: ((event: classes.PrepareSmithingEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.PreSpawnerSpawnEvent',
      ...listeners: ((event: classes.PreSpawnerSpawnEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.profile.ProfileWhitelistVerifyEvent',
      ...listeners: ((event: classes.ProfileWhitelistVerifyEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.ProjectileCollideEvent',
      ...listeners: ((event: classes.ProjectileCollideEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.ProjectileHitEvent',
      ...listeners: ((event: classes.ProjectileHitEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.ProjectileLaunchEvent',
      ...listeners: ((event: classes.ProjectileLaunchEvent) => {})[]
   ): void;
   static event (name: 'org.bukkit.event.raid.RaidEvent', ...listeners: ((event: classes.RaidEvent) => {})[]): void;
   static event (
      name: 'org.bukkit.event.raid.RaidFinishEvent',
      ...listeners: ((event: classes.RaidFinishEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.raid.RaidSpawnWaveEvent',
      ...listeners: ((event: classes.RaidSpawnWaveEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.raid.RaidStopEvent',
      ...listeners: ((event: classes.RaidStopEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.raid.RaidTriggerEvent',
      ...listeners: ((event: classes.RaidTriggerEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.server.RemoteServerCommandEvent',
      ...listeners: ((event: classes.RemoteServerCommandEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.server.ServerCommandEvent',
      ...listeners: ((event: classes.ServerCommandEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.server.ServerEvent',
      ...listeners: ((event: classes.ServerEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.server.ServerExceptionEvent',
      ...listeners: ((event: classes.ServerExceptionEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.server.ServerListPingEvent',
      ...listeners: ((event: classes.ServerListPingEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.server.ServerLoadEvent',
      ...listeners: ((event: classes.ServerLoadEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.server.ServerTickEndEvent',
      ...listeners: ((event: classes.ServerTickEndEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.server.ServerTickStartEvent',
      ...listeners: ((event: classes.ServerTickStartEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.server.ServiceEvent',
      ...listeners: ((event: classes.ServiceEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.server.ServiceRegisterEvent',
      ...listeners: ((event: classes.ServiceRegisterEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.server.ServiceUnregisterEvent',
      ...listeners: ((event: classes.ServiceUnregisterEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.SheepDyeWoolEvent',
      ...listeners: ((event: classes.SheepDyeWoolEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.SheepRegrowWoolEvent',
      ...listeners: ((event: classes.SheepRegrowWoolEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.SignChangeEvent',
      ...listeners: ((event: classes.SignChangeEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.SkeletonHorseTrapEvent',
      ...listeners: ((event: classes.SkeletonHorseTrapEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.SlimeChangeDirectionEvent',
      ...listeners: ((event: classes.SlimeChangeDirectionEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.SlimePathfindEvent',
      ...listeners: ((event: classes.SlimePathfindEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.SlimeSplitEvent',
      ...listeners: ((event: classes.SlimeSplitEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.SlimeSwimEvent',
      ...listeners: ((event: classes.SlimeSwimEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.SlimeTargetLivingEntityEvent',
      ...listeners: ((event: classes.SlimeTargetLivingEntityEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.SlimeWanderEvent',
      ...listeners: ((event: classes.SlimeWanderEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.world.SpawnChangeEvent',
      ...listeners: ((event: classes.SpawnChangeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.SpawnerSpawnEvent',
      ...listeners: ((event: classes.SpawnerSpawnEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.block.SpongeAbsorbEvent',
      ...listeners: ((event: classes.SpongeAbsorbEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.StriderTemperatureChangeEvent',
      ...listeners: ((event: classes.StriderTemperatureChangeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.world.StructureGrowEvent',
      ...listeners: ((event: classes.StructureGrowEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.server.TabCompleteEvent',
      ...listeners: ((event: classes.TabCompleteEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.ThrownEggHatchEvent',
      ...listeners: ((event: classes.ThrownEggHatchEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.weather.ThunderChangeEvent',
      ...listeners: ((event: classes.ThunderChangeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.world.TimeSkipEvent',
      ...listeners: ((event: classes.TimeSkipEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.block.TNTPrimeEvent',
      ...listeners: ((event: classes.TNTPrimeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.inventory.TradeSelectEvent',
      ...listeners: ((event: classes.TradeSelectEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.TurtleGoHomeEvent',
      ...listeners: ((event: classes.TurtleGoHomeEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.TurtleLayEggEvent',
      ...listeners: ((event: classes.TurtleLayEggEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.TurtleStartDiggingEvent',
      ...listeners: ((event: classes.TurtleStartDiggingEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.command.UnknownCommandEvent',
      ...listeners: ((event: classes.UnknownCommandEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.vehicle.VehicleBlockCollisionEvent',
      ...listeners: ((event: classes.VehicleBlockCollisionEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.vehicle.VehicleCollisionEvent',
      ...listeners: ((event: classes.VehicleCollisionEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.vehicle.VehicleCreateEvent',
      ...listeners: ((event: classes.VehicleCreateEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.vehicle.VehicleDamageEvent',
      ...listeners: ((event: classes.VehicleDamageEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.vehicle.VehicleDestroyEvent',
      ...listeners: ((event: classes.VehicleDestroyEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.vehicle.VehicleEnterEvent',
      ...listeners: ((event: classes.VehicleEnterEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.vehicle.VehicleEntityCollisionEvent',
      ...listeners: ((event: classes.VehicleEntityCollisionEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.vehicle.VehicleEvent',
      ...listeners: ((event: classes.VehicleEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.vehicle.VehicleExitEvent',
      ...listeners: ((event: classes.VehicleExitEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.vehicle.VehicleMoveEvent',
      ...listeners: ((event: classes.VehicleMoveEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.vehicle.VehicleUpdateEvent',
      ...listeners: ((event: classes.VehicleUpdateEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.VillagerAcquireTradeEvent',
      ...listeners: ((event: classes.VillagerAcquireTradeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.VillagerCareerChangeEvent',
      ...listeners: ((event: classes.VillagerCareerChangeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.entity.VillagerReplenishTradeEvent',
      ...listeners: ((event: classes.VillagerReplenishTradeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.weather.WeatherChangeEvent',
      ...listeners: ((event: classes.WeatherChangeEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.weather.WeatherEvent',
      ...listeners: ((event: classes.WeatherEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.server.WhitelistToggleEvent',
      ...listeners: ((event: classes.WhitelistToggleEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.WitchConsumePotionEvent',
      ...listeners: ((event: classes.WitchConsumePotionEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.WitchReadyPotionEvent',
      ...listeners: ((event: classes.WitchReadyPotionEvent) => {})[]
   ): void;
   static event (
      name: 'com.destroystokyo.paper.event.entity.WitchThrowPotionEvent',
      ...listeners: ((event: classes.WitchThrowPotionEvent) => {})[]
   ): void;
   static event (name: 'org.bukkit.event.world.WorldEvent', ...listeners: ((event: classes.WorldEvent) => {})[]): void;
   static event (
      name: 'org.bukkit.event.world.WorldInitEvent',
      ...listeners: ((event: classes.WorldInitEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.world.WorldLoadEvent',
      ...listeners: ((event: classes.WorldLoadEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.world.WorldSaveEvent',
      ...listeners: ((event: classes.WorldSaveEvent) => {})[]
   ): void;
   static event (
      name: 'org.bukkit.event.world.WorldUnloadEvent',
      ...listeners: ((event: classes.WorldUnloadEvent) => {})[]
   ): void;
}
