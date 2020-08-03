///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                             JS BRIDGE CLASSES                             //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

export type bridge$consumer<X> = (x: X) => any;
export interface bridge$iterable<X> {
   [Symbol.iterator](): Iterator<X>;
}
/*
















*/
///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                           INTERNAL JAVA CLASSES                           //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
export class Class<T> extends JavaObject implements Serializable, GenericDeclaration, Type, AnnotatedElement {
   asSubclass<U> (clazz: Class<U>): Class<U>;
   cast (obj: JavaObject): T;
   desiredAssertionStatus (): boolean;
   static forName (module: Module, name: string): Class;
   static forName (class_name: string): Class;
   static forName (name: string, initialize: boolean, loader: ClassLoader): Class;
   getAnnotatedInterfaces (): AnnotatedType[];
   getAnnotatedSuperclass (): AnnotatedType;
   getAnnotation<A extends Annotation> (annotation_class: Class<A>): A;
   getAnnotations (): Annotation[];
   getAnnotationsByType<A extends Annotation> (annotation_class: Class<A>): A[];
   getCanonicalName (): string;
   getClasses (): Class[];
   getClassLoader (): ClassLoader;
   getComponentType (): Class;
   getConstructor (...parameter_types: Class): Constructor<T>;
   getConstructors (): Constructor[];
   getDeclaredAnnotation<A extends Annotation> (annotation_class: Class<A>): A;
   getDeclaredAnnotations (): Annotation[];
   getDeclaredAnnotationsByType<A extends Annotation> (annotation_class: Class<A>): A[];
   getDeclaredClasses (): Class[];
   getDeclaredConstructor (...parameter_types: Class): Constructor<T>;
   getDeclaredConstructors (): Constructor[];
   getDeclaredField (name: string): Field;
   getDeclaredFields (): Field[];
   getDeclaredMethod (name: string, ...parameter_types: Class): Method;
   getDeclaredMethods (): Method[];
   getDeclaringClass (): Class;
   getEnclosingClass (): Class;
   getEnclosingConstructor (): Constructor;
   getEnclosingMethod (): Method;
   getEnumConstants (): T[];
   getField (name: string): Field;
   getFields (): Field[];
   getGenericInterfaces (): Type[];
   getGenericSuperclass (): Type;
   getInterfaces (): Class[];
   getMethod (name: string, ...parameter_types: Class): Method;
   getMethods (): Method[];
   getModifiers (): number;
   getModule (): Module;
   getName (): string;
   getPackage (): Package;
   getPackageName (): string;
   getProtectionDomain (): ProtectionDomain;
   getResource (name: string): URL;
   getResourceAsStream (name: string): InputStream;
   getSigners (): JavaObject[];
   getSimpleName (): string;
   getSuperclass (): Class<T>;
   getTypeName (): string;
   getTypeParameters (): TypeVariable<Class<T>>[];
   isAnnotation (): boolean;
   isAnnotationPresent (annotation_class: Class<Annotation>): boolean;
   isAnonymousClass (): boolean;
   isArray (): boolean;
   isAssignableFrom (cls: Class): boolean;
   isEnum (): boolean;
   isInstance (obj: JavaObject): boolean;
   isInterface (): boolean;
   isLocalClass (): boolean;
   isMemberClass (): boolean;
   isPrimitive (): boolean;
   isSynthetic (): boolean;
   newInstance (): T;
   toGenericString (): string;
   toString (): string;
}
export interface Collection<E> extends Iterable<E> {
   add(e: E): boolean;
   addAll(c: Collection<E>): boolean;
   clear(): void;
   contains(o: JavaObject): boolean;
   containsAll(c: Collection): boolean;
   equals(o: JavaObject): boolean;
   hashCode(): number;
   isEmpty(): boolean;
   iterator(): Iterator<E>;
   parallelStream(): Stream<E>;
   remove(o: JavaObject): boolean;
   removeAll(c: Collection): boolean;
   removeIf(filter: Predicate<E>): boolean;
   retainAll(c: Collection): boolean;
   size(): number;
   spliterator(): Spliterator<E>;
   stream(): Stream<E>;
   toArray(): JavaObject[];
   toArray<T>(a: T[]): T[];
}
export interface Consumer<T> extends bridge$consumer<T> {
   accept(t: T): void;
   andThen(after: Consumer<T>): Consumer<T>;
}
export class File extends JavaObject implements Serializable, Comparable<File> {
   constructor (parent: File, child: string);
   constructor (pathname: string);
   constructor (parent: string, child: string);
   constructor (uri: URI);
   canExecute (): boolean;
   canRead (): boolean;
   canWrite (): boolean;
   compareTo (pathname: File): number;
   createNewFile (): boolean;
   static createTempFile (prefix: string, suffix: string): File;
   static createTempFile (prefix: string, suffix: string, directory: File): File;
   delete (): boolean;
   deleteOnExit (): void;
   equals (obj: JavaObject): boolean;
   exists (): boolean;
   getAbsoluteFile (): File;
   getAbsolutePath (): string;
   getCanonicalFile (): File;
   getCanonicalPath (): string;
   getFreeSpace (): number;
   getName (): string;
   getParent (): string;
   getParentFile (): File;
   getPath (): string;
   getTotalSpace (): number;
   getUsableSpace (): number;
   hashCode (): number;
   isAbsolute (): boolean;
   isDirectory (): boolean;
   isFile (): boolean;
   isHidden (): boolean;
   lastModified (): number;
   length (): number;
   list (): string[];
   list (filter: FilenameFilter): string[];
   listFiles (): File[];
   listFiles (filter: FileFilter): File[];
   listFiles (filter: FilenameFilter): File[];
   static listRoots (): File[];
   mkdir (): boolean;
   mkdirs (): boolean;
   renameTo (dest: File): boolean;
   setExecutable (executable: boolean): boolean;
   setExecutable (executable: boolean, owner_only: boolean): boolean;
   setLastModified (time: number): boolean;
   setReadable (readable: boolean): boolean;
   setReadable (readable: boolean, owner_only: boolean): boolean;
   setReadOnly (): boolean;
   setWritable (writable: boolean): boolean;
   setWritable (writable: boolean, owner_only: boolean): boolean;
   toPath (): Path;
   toString (): string;
   toURI (): URI;
   toURL (): URL;
}
export interface Iterable<T> extends bridge$iterable<T> {
   forEach(action: Consumer<T>): void;
   iterator(): Iterator<T>;
   spliterator(): Spliterator<T>;
}
export interface Iterator<E> {
   forEachRemaining(action: Consumer<E>): void;
   hasNext(): boolean;
   next(): E;
   remove(): void;
}
export class JavaObject {
   constructor ();
   clone (): JavaObject;
   equals (obj: JavaObject): boolean;
   finalize (): void;
   getClass (): Class;
   hashCode (): number;
   notify (): void;
   notifyAll (): void;
   toString (): string;
   wait (): void;
   wait (timeout: number): void;
   wait (timeout: number, nanos: number): void;
}
export interface List<E> extends Collection<E> {
   add(index: number, element: E): void;
   add(e: E): boolean;
   addAll(index: number, c: Collection<E>): boolean;
   addAll(c: Collection<E>): boolean;
   clear(): void;
   contains(o: JavaObject): boolean;
   containsAll(c: Collection): boolean;
   static copyOf<E>(coll: Collection<E>): List<E>;
   equals(o: JavaObject): boolean;
   get(index: number): E;
   hashCode(): number;
   indexOf(o: JavaObject): number;
   isEmpty(): boolean;
   iterator(): Iterator<E>;
   lastIndexOf(o: JavaObject): number;
   listIterator(): ListIterator<E>;
   listIterator(index: number): ListIterator<E>;
   static of<E>(): List<E>;
   static of<E>(e1: E): List<E>;
   static of<E>(...elements: E): List<E>;
   static of<E>(e1: E, e2: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E, e10: E): List<E>;
   remove(index: number): E;
   remove(o: JavaObject): boolean;
   removeAll(c: Collection): boolean;
   replaceAll(operator: UnaryOperator<E>): void;
   retainAll(c: Collection): boolean;
   set(index: number, element: E): E;
   size(): number;
   sort(c: Comparator<E>): void;
   spliterator(): Spliterator<E>;
   subList(from_index: number, to_index: number): List<E>;
   toArray(): JavaObject[];
   toArray<T>(a: T[]): T[];
}
export interface Map<K, V> {
   clear(): void;
   compute(key: K, remapping_funktion: BiFunction<K, V, V>): V;
   computeIfAbsent(key: K, mapping_funktion: Function<K, V>): V;
   computeIfPresent(key: K, remapping_funktion: BiFunction<K, V, V>): V;
   containsKey(key: JavaObject): boolean;
   containsValue(value: JavaObject): boolean;
   static copyOf<K, V>(map: Map<K, V>): Map<K, V>;
   static entry<K, V>(k: K, v: V): Map$Entry<K, V>;
   entrySet(): Set<Map$Entry<K, V>>;
   equals(o: JavaObject): boolean;
   forEach(action: BiConsumer<K, V>): void;
   get(key: JavaObject): V;
   getOrDefault(key: JavaObject, default_value: V): V;
   hashCode(): number;
   isEmpty(): boolean;
   keySet(): Set<K>;
   merge(key: K, value: V, remapping_funktion: BiFunction<V, V, V>): V;
   static of<K, V>(): Map<K, V>;
   static of<K, V>(k1: K, v1: V): Map<K, V>;
   static of<K, V>(k1: K, v1: V, k2: K, v2: V): Map<K, V>;
   static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V): Map<K, V>;
   static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V): Map<K, V>;
   static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V): Map<K, V>;
   static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V): Map<K, V>;
   static of<K, V>(
      k1: K,
      v1: V,
      k2: K,
      v2: V,
      k3: K,
      v3: V,
      k4: K,
      v4: V,
      k5: K,
      v5: V,
      k6: K,
      v6: V,
      k7: K,
      v7: V
   ): Map<K, V>;
   static of<K, V>(
      k1: K,
      v1: V,
      k2: K,
      v2: V,
      k3: K,
      v3: V,
      k4: K,
      v4: V,
      k5: K,
      v5: V,
      k6: K,
      v6: V,
      k7: K,
      v7: V,
      k8: K,
      v8: V
   ): Map<K, V>;
   static of<K, V>(
      k1: K,
      v1: V,
      k2: K,
      v2: V,
      k3: K,
      v3: V,
      k4: K,
      v4: V,
      k5: K,
      v5: V,
      k6: K,
      v6: V,
      k7: K,
      v7: V,
      k8: K,
      v8: V,
      k9: K,
      v9: V
   ): Map<K, V>;
   static of<K, V>(
      k1: K,
      v1: V,
      k2: K,
      v2: V,
      k3: K,
      v3: V,
      k4: K,
      v4: V,
      k5: K,
      v5: V,
      k6: K,
      v6: V,
      k7: K,
      v7: V,
      k8: K,
      v8: V,
      k9: K,
      v9: V,
      k10: K,
      v10: V
   ): Map<K, V>;
   static ofEntries<K, V>(...entries: Map$Entry<K, V>): Map<K, V>;
   put(key: K, value: V): V;
   putAll(m: Map<K, V>): void;
   putIfAbsent(key: K, value: V): V;
   remove(key: JavaObject): V;
   remove(key: JavaObject, value: JavaObject): boolean;
   replace(key: K, value: V): V;
   replace(key: K, old_value: V, new_value: V): boolean;
   replaceAll(funktion: BiFunction<K, V, V>): void;
   size(): number;
   values(): Collection<V>;
}
export interface Path extends Comparable<Path>, Iterable<Path>, Watchable {
   compareTo(other: Path): number;
   endsWith(other: string): boolean;
   endsWith(other: Path): boolean;
   equals(other: JavaObject): boolean;
   getFileName(): Path;
   getFileSystem(): FileSystem;
   getName(index: number): Path;
   getNameCount(): number;
   getParent(): Path;
   getRoot(): Path;
   hashCode(): number;
   isAbsolute(): boolean;
   iterator(): Iterator<Path>;
   normalize(): Path;
   register(watcher: WatchService, ...events: WatchEvent$Kind): WatchKey;
   register(watcher: WatchService, events: WatchEvent$Kind[], ...modifiers: WatchEvent$Modifier): WatchKey;
   relativize(other: Path): Path;
   resolve(other: string): Path;
   resolve(other: Path): Path;
   resolveSibling(other: string): Path;
   resolveSibling(other: Path): Path;
   startsWith(other: string): boolean;
   startsWith(other: Path): boolean;
   subpath(begin_index: number, end_index: number): Path;
   toAbsolutePath(): Path;
   toFile(): File;
   toRealPath(...options: LinkOption): Path;
   toString(): string;
   toUri(): URI;
}
export interface Predicate<T> {
   and(other: Predicate<T>): Predicate<T>;
   static isEqual<T>(target_ref: JavaObject): Predicate<T>;
   negate(): Predicate<T>;
   or(other: Predicate<T>): Predicate<T>;
   test(t: T): boolean;
}
export interface Set<E> extends Collection<E> {
   add(e: E): boolean;
   addAll(c: Collection<E>): boolean;
   clear(): void;
   contains(o: JavaObject): boolean;
   containsAll(c: Collection): boolean;
   static copyOf<E>(coll: Collection<E>): Set<E>;
   equals(o: JavaObject): boolean;
   hashCode(): number;
   isEmpty(): boolean;
   iterator(): Iterator<E>;
   static of<E>(): Set<E>;
   static of<E>(e1: E): Set<E>;
   static of<E>(...elements: E): Set<E>;
   static of<E>(e1: E, e2: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E, e10: E): Set<E>;
   remove(o: JavaObject): boolean;
   removeAll(c: Collection): boolean;
   retainAll(c: Collection): boolean;
   size(): number;
   spliterator(): Spliterator<E>;
   toArray(): JavaObject[];
   toArray<T>(a: T[]): T[];
}
/*
















*/
///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                        BUKKIT/SPIGOT/PAPER CLASSES                        //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
export interface AbstractArrow extends Projectile {
   getAttachedBlock(): Block;
   getDamage(): number;
   getItemStack(): ItemStack;
   getKnockbackStrength(): number;
   getPickupRule(): AbstractArrow$PickupRule;
   getPickupStatus(): AbstractArrow$PickupStatus;
   getPierceLevel(): number;
   isCritical(): boolean;
   isInBlock(): boolean;
   isShotFromCrossbow(): boolean;
   setCritical(critical: boolean): void;
   setDamage(damage: number): void;
   setKnockbackStrength(knockback_strength: number): void;
   setPickupRule(rule: AbstractArrow$PickupRule): void;
   setPickupStatus(status: AbstractArrow$PickupStatus): void;
   setPierceLevel(pierce_level: number): void;
   setShotFromCrossbow(shot_from_crossbow: boolean): void;
}
export class AbstractArrow$PickupRule {
   static ALLOWED: AbstractArrow$PickupRule;
   static CREATIVE_ONLY: AbstractArrow$PickupRule;
   static DISALLOWED: AbstractArrow$PickupRule;
   static valueOf (name: string): AbstractArrow$PickupRule;
   static values (): AbstractArrow$PickupRule[];
}
export class AbstractArrow$PickupStatus {
   static ALLOWED: AbstractArrow$PickupStatus;
   static CREATIVE_ONLY: AbstractArrow$PickupStatus;
   static DISALLOWED: AbstractArrow$PickupStatus;
   static valueOf (name: string): AbstractArrow$PickupStatus;
   static values (): AbstractArrow$PickupStatus[];
}
export interface AbstractHorse extends Vehicle, InventoryHolder, Tameable {
   getDomestication(): number;
   getInventory(): AbstractHorseInventory;
   getJumpStrength(): number;
   getMaxDomestication(): number;
   getVariant(): Horse$Variant;
   setDomestication(level: number): void;
   setJumpStrength(strength: number): void;
   setMaxDomestication(level: number): void;
   setVariant(variant: Horse$Variant): void;
}
export interface AbstractHorseInventory extends Inventory {
   getSaddle(): ItemStack;
   setSaddle(stack: ItemStack): void;
}
export interface AbstractVillager extends Ageable, NPC, InventoryHolder, Merchant {
   getInventory(): Inventory;
}
export class Action {
   static LEFT_CLICK_AIR: Action;
   static LEFT_CLICK_BLOCK: Action;
   static PHYSICAL: Action;
   static RIGHT_CLICK_AIR: Action;
   static RIGHT_CLICK_BLOCK: Action;
   static valueOf (name: string): Action;
   static values (): Action[];
}
export interface Advancement extends Keyed {
   getCriteria(): Collection<string>;
}
export interface AdvancementProgress {
   awardCriteria(criteria: string): boolean;
   getAdvancement(): Advancement;
   getAwardedCriteria(): Collection<string>;
   getDateAwarded(criteria: string): Date;
   getRemainingCriteria(): Collection<string>;
   isDone(): boolean;
   revokeCriteria(criteria: string): boolean;
}
export interface Ageable extends BlockData {
   getAge(): number;
   getMaximumAge(): number;
   setAge(age: number): void;
}
export interface Ageable extends Creature {
   canBreed(): boolean;
   getAge(): number;
   getAgeLock(): boolean;
   isAdult(): boolean;
   setAdult(): void;
   setAge(age: number): void;
   setAgeLock(lock: boolean): void;
   setBaby(): void;
   setBreed(breed: boolean): void;
}
export interface Ambient extends Mob {}
export interface AnaloguePowerable extends BlockData {
   getMaximumPower(): number;
   getPower(): number;
   setPower(power: number): void;
}
export interface Animals extends Ageable {
   getBreedCause(): UUID;
   getLoveModeTicks(): number;
   isLoveMode(): boolean;
   setBreedCause(uuid: UUID): void;
   setLoveModeTicks(ticks: number): void;
}
export interface AnimalTamer {
   getName(): string;
   getUniqueId(): UUID;
}
export class AnvilDamagedEvent extends InventoryEvent implements Cancellable {
   constructor (inventory: InventoryView, block_data: BlockData);
   getDamageState (): AnvilDamagedEvent$DamageState;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getInventory (): AnvilInventory;
   isBreaking (): boolean;
   isCancelled (): boolean;
   setBreaking (breaking: boolean): void;
   setCancelled (cancel: boolean): void;
   setDamageState (damage_state: AnvilDamagedEvent$DamageState): void;
}
export class AnvilDamagedEvent$DamageState {
   static BROKEN: AnvilDamagedEvent$DamageState;
   static CHIPPED: AnvilDamagedEvent$DamageState;
   static DAMAGED: AnvilDamagedEvent$DamageState;
   static FULL: AnvilDamagedEvent$DamageState;
   getMaterial (): Material;
   static getState (block_data: BlockData): AnvilDamagedEvent$DamageState;
   static getState (material: Material): AnvilDamagedEvent$DamageState;
   static valueOf (name: string): AnvilDamagedEvent$DamageState;
   static values (): AnvilDamagedEvent$DamageState[];
}
export interface AnvilInventory extends Inventory {
   getFirstItem(): ItemStack;
   getMaximumRepairCost(): number;
   getRenameText(): string;
   getRepairCost(): number;
   getResult(): ItemStack;
   getSecondItem(): ItemStack;
   setFirstItem(first_item: ItemStack): void;
   setMaximumRepairCost(levels: number): void;
   setRepairCost(levels: number): void;
   setResult(result: ItemStack): void;
   setSecondItem(second_item: ItemStack): void;
}
export interface AreaEffectCloud extends Entity {
   addCustomEffect(effect: PotionEffect, overwrite: boolean): boolean;
   clearCustomEffects(): void;
   getBasePotionData(): PotionData;
   getColor(): Color;
   getCustomEffects(): List<PotionEffect>;
   getDuration(): number;
   getDurationOnUse(): number;
   getParticle(): Particle;
   getRadius(): number;
   getRadiusOnUse(): number;
   getRadiusPerTick(): number;
   getReapplicationDelay(): number;
   getSource(): ProjectileSource;
   getWaitTime(): number;
   hasCustomEffect(type: PotionEffectType): boolean;
   hasCustomEffects(): boolean;
   removeCustomEffect(type: PotionEffectType): boolean;
   setBasePotionData(data: PotionData): void;
   setColor(color: Color): void;
   setDuration(duration: number): void;
   setDurationOnUse(duration: number): void;
   setParticle(particle: Particle): void;
   setParticle<T>(particle: Particle, data: T): void;
   setRadius(radius: number): void;
   setRadiusOnUse(radius: number): void;
   setRadiusPerTick(radius: number): void;
   setReapplicationDelay(delay: number): void;
   setSource(source: ProjectileSource): void;
   setWaitTime(wait_time: number): void;
}
export class AreaEffectCloudApplyEvent extends EntityEvent implements Cancellable {
   constructor (entity: AreaEffectCloud, affected_entities: List<LivingEntity>);
   getAffectedEntities (): List<LivingEntity>;
   getEntity (): AreaEffectCloud;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export interface ArmoredHorseInventory extends AbstractHorseInventory {
   getArmor(): ItemStack;
   setArmor(stack: ItemStack): void;
}
export interface ArmorStand extends LivingEntity {
   addDisabledSlots(...slots: EquipmentSlot): void;
   canMove(): boolean;
   canTick(): boolean;
   getBodyPose(): EulerAngle;
   getBoots(): ItemStack;
   getChestplate(): ItemStack;
   getDisabledSlots(): Set<EquipmentSlot>;
   getHeadPose(): EulerAngle;
   getHelmet(): ItemStack;
   getItem(slot: EquipmentSlot): ItemStack;
   getItemInHand(): ItemStack;
   getLeftArmPose(): EulerAngle;
   getLeftLegPose(): EulerAngle;
   getLeggings(): ItemStack;
   getRightArmPose(): EulerAngle;
   getRightLegPose(): EulerAngle;
   hasArms(): boolean;
   hasBasePlate(): boolean;
   isMarker(): boolean;
   isSlotDisabled(slot: EquipmentSlot): boolean;
   isSmall(): boolean;
   isVisible(): boolean;
   removeDisabledSlots(...slots: EquipmentSlot): void;
   setArms(arms: boolean): void;
   setBasePlate(base_plate: boolean): void;
   setBodyPose(pose: EulerAngle): void;
   setBoots(item: ItemStack): void;
   setCanMove(move: boolean): void;
   setCanTick(tick: boolean): void;
   setChestplate(item: ItemStack): void;
   setDisabledSlots(...slots: EquipmentSlot): void;
   setHeadPose(pose: EulerAngle): void;
   setHelmet(item: ItemStack): void;
   setItem(slot: EquipmentSlot, item: ItemStack): void;
   setItemInHand(item: ItemStack): void;
   setLeftArmPose(pose: EulerAngle): void;
   setLeftLegPose(pose: EulerAngle): void;
   setLeggings(item: ItemStack): void;
   setMarker(marker: boolean): void;
   setRightArmPose(pose: EulerAngle): void;
   setRightLegPose(pose: EulerAngle): void;
   setSmall(small: boolean): void;
   setVisible(visible: boolean): void;
}
export interface ArmorStandMeta extends ItemMeta {
   hasNoBasePlate(): boolean;
   isInvisible(): boolean;
   isMarker(): boolean;
   isSmall(): boolean;
   setInvisible(invisible: boolean): void;
   setMarker(marker: boolean): void;
   setNoBasePlate(no_base_plate: boolean): void;
   setShowArms(show_arms: boolean): void;
   setSmall(small: boolean): void;
   shouldShowArms(): boolean;
}
export interface Arrow extends AbstractArrow {
   addCustomEffect(effect: PotionEffect, overwrite: boolean): boolean;
   clearCustomEffects(): void;
   getBasePotionData(): PotionData;
   getColor(): Color;
   getCustomEffects(): List<PotionEffect>;
   hasCustomEffect(type: PotionEffectType): boolean;
   hasCustomEffects(): boolean;
   removeCustomEffect(type: PotionEffectType): boolean;
   setBasePotionData(data: PotionData): void;
   setColor(color: Color): void;
}
export class Art {
   static ALBAN: Art;
   static AZTEC: Art;
   static AZTEC2: Art;
   static BOMB: Art;
   static BURNING_SKULL: Art;
   static BUST: Art;
   static COURBET: Art;
   static CREEBET: Art;
   static DONKEY_KONG: Art;
   static FIGHTERS: Art;
   static GRAHAM: Art;
   static KEBAB: Art;
   static MATCH: Art;
   static PIGSCENE: Art;
   static PLANT: Art;
   static POINTER: Art;
   static POOL: Art;
   static SEA: Art;
   static SKELETON: Art;
   static SKULL_AND_ROSES: Art;
   static STAGE: Art;
   static SUNSET: Art;
   static VOID: Art;
   static WANDERER: Art;
   static WASTELAND: Art;
   static WITHER: Art;
   getBlockHeight (): number;
   getBlockWidth (): number;
   static getById (id: number): Art;
   static getByName (name: string): Art;
   getId (): number;
   getKey (): NamespacedKey;
   static valueOf (name: string): Art;
   static values (): Art[];
}
export class ASMEventExecutorGenerator extends JavaObject {
   constructor ();
   static generateEventExecutor (m: Method, name: string): number[];
   static generateName (): string;
}
export class AsyncPlayerChatEvent extends PlayerEvent implements Cancellable {
   constructor (async: boolean, who: Player, message: string, players: Set<Player>);
   getFormat (): string;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getMessage (): string;
   getRecipients (): Set<Player>;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setFormat (format: string): void;
   setMessage (message: string): void;
}
export class AsyncPlayerPreLoginEvent extends Event {
   constructor (name: string, ip_address: InetAddress);
   constructor (name: string, ip_address: InetAddress, unique_id: UUID);
   constructor (name: string, ip_address: InetAddress, unique_id: UUID, profile: PlayerProfile);
   allow (): void;
   disallow (result: AsyncPlayerPreLoginEvent$Result, message: string): void;
   disallow (result: PlayerPreLoginEvent$Result, message: string): void;
   getAddress (): InetAddress;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getKickMessage (): string;
   getLoginResult (): AsyncPlayerPreLoginEvent$Result;
   getName (): string;
   getPlayerProfile (): PlayerProfile;
   getResult (): PlayerPreLoginEvent$Result;
   getUniqueId (): UUID;
   setKickMessage (message: string): void;
   setLoginResult (result: AsyncPlayerPreLoginEvent$Result): void;
   setPlayerProfile (profile: PlayerProfile): void;
   setResult (result: PlayerPreLoginEvent$Result): void;
}
export class AsyncPlayerPreLoginEvent$Result {
   static ALLOWED: AsyncPlayerPreLoginEvent$Result;
   static KICK_BANNED: AsyncPlayerPreLoginEvent$Result;
   static KICK_FULL: AsyncPlayerPreLoginEvent$Result;
   static KICK_OTHER: AsyncPlayerPreLoginEvent$Result;
   static KICK_WHITELIST: AsyncPlayerPreLoginEvent$Result;
   static valueOf (name: string): AsyncPlayerPreLoginEvent$Result;
   static values (): AsyncPlayerPreLoginEvent$Result[];
}
export class AsyncTabCompleteEvent extends Event implements Cancellable {
   constructor (sender: CommandSender, completions: List<string>, buffer: string, is_command: boolean, loc: Location);
   getBuffer (): string;
   getCompletions (): List<string>;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getLocation (): Location;
   getSender (): CommandSender;
   isCancelled (): boolean;
   isCommand (): boolean;
   isHandled (): boolean;
   setCancelled (cancelled: boolean): void;
   setCompletions (completions: List<string>): void;
   setHandled (handled: boolean): void;
}
export interface Attachable extends BlockData {
   isAttached(): boolean;
   setAttached(attached: boolean): void;
}
export interface Attachable extends Directional {
   getAttachedFace(): BlockFace;
}
export interface Attributable {
   getAttribute(attribute: Attribute): AttributeInstance;
}
export class Attribute {
   static GENERIC_ARMOR: Attribute;
   static GENERIC_ARMOR_TOUGHNESS: Attribute;
   static GENERIC_ATTACK_DAMAGE: Attribute;
   static GENERIC_ATTACK_KNOCKBACK: Attribute;
   static GENERIC_ATTACK_SPEED: Attribute;
   static GENERIC_FLYING_SPEED: Attribute;
   static GENERIC_FOLLOW_RANGE: Attribute;
   static GENERIC_KNOCKBACK_RESISTANCE: Attribute;
   static GENERIC_LUCK: Attribute;
   static GENERIC_MAX_HEALTH: Attribute;
   static GENERIC_MOVEMENT_SPEED: Attribute;
   static HORSE_JUMP_STRENGTH: Attribute;
   static ZOMBIE_SPAWN_REINFORCEMENTS: Attribute;
   getKey (): NamespacedKey;
   static valueOf (name: string): Attribute;
   static values (): Attribute[];
}
export interface AttributeInstance {
   addModifier(modifier: AttributeModifier): void;
   getAttribute(): Attribute;
   getBaseValue(): number;
   getDefaultValue(): number;
   getModifiers(): Collection<AttributeModifier>;
   getValue(): number;
   removeModifier(modifier: AttributeModifier): void;
   setBaseValue(value: number): void;
}
export class AttributeModifier extends JavaObject implements ConfigurationSerializable {
   constructor (name: string, amount: number, operation: AttributeModifier$Operation);
   constructor (uuid: UUID, name: string, amount: number, operation: AttributeModifier$Operation);
   constructor (uuid: UUID, name: string, amount: number, operation: AttributeModifier$Operation, slot: EquipmentSlot);
   static deserialize (args: Map<string, JavaObject>): AttributeModifier;
   equals (other: JavaObject): boolean;
   getAmount (): number;
   getName (): string;
   getOperation (): AttributeModifier$Operation;
   getSlot (): EquipmentSlot;
   getUniqueId (): UUID;
   hashCode (): number;
   serialize (): Map<string, JavaObject>;
   toString (): string;
}
export class AttributeModifier$Operation {
   static ADD_NUMBER: AttributeModifier$Operation;
   static ADD_SCALAR: AttributeModifier$Operation;
   static MULTIPLY_SCALAR_1: AttributeModifier$Operation;
   static valueOf (name: string): AttributeModifier$Operation;
   static values (): AttributeModifier$Operation[];
}
export class AuthorNagException extends RuntimeException {
   constructor (message: string);
   getMessage (): string;
}
export class Axis {
   static X: Axis;
   static Y: Axis;
   static Z: Axis;
   static valueOf (name: string): Axis;
   static values (): Axis[];
}
export interface Bamboo extends Ageable, Sapling {
   getLeaves(): Bamboo$Leaves;
   setLeaves(leaves: Bamboo$Leaves): void;
}
export class Bamboo$Leaves {
   static LARGE: Bamboo$Leaves;
   static NONE: Bamboo$Leaves;
   static SMALL: Bamboo$Leaves;
   static valueOf (name: string): Bamboo$Leaves;
   static values (): Bamboo$Leaves[];
}
export interface BanEntry {
   getCreated(): Date;
   getExpiration(): Date;
   getReason(): string;
   getSource(): string;
   getTarget(): string;
   save(): void;
   setCreated(created: Date): void;
   setExpiration(expiration: Date): void;
   setReason(reason: string): void;
   setSource(source: string): void;
}
export interface BanList {
   addBan(target: string, reason: string, expires: Date, source: string): BanEntry;
   getBanEntries(): Set<BanEntry>;
   getBanEntry(target: string): BanEntry;
   isBanned(target: string): boolean;
   pardon(target: string): void;
}
export class BanList$Type {
   static IP: BanList$Type;
   static NAME: BanList$Type;
   static valueOf (name: string): BanList$Type;
   static values (): BanList$Type[];
}
export interface Banner extends TileState {
   addPattern(pattern: Pattern): void;
   getBaseColor(): DyeColor;
   getPattern(i: number): Pattern;
   getPatterns(): List<Pattern>;
   numberOfPatterns(): number;
   removePattern(i: number): Pattern;
   setBaseColor(color: DyeColor): void;
   setPattern(i: number, pattern: Pattern): void;
   setPatterns(patterns: List<Pattern>): void;
}
export class Banner extends MaterialData {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Banner;
   getAttachedFace (): BlockFace;
   getFacing (): BlockFace;
   isWallBanner (): boolean;
   setFacingDirection (face: BlockFace): void;
   toString (): string;
}
export interface BannerMeta extends ItemMeta {
   addPattern(pattern: Pattern): void;
   getBaseColor(): DyeColor;
   getPattern(i: number): Pattern;
   getPatterns(): List<Pattern>;
   numberOfPatterns(): number;
   removePattern(i: number): Pattern;
   setBaseColor(color: DyeColor): void;
   setPattern(i: number, pattern: Pattern): void;
   setPatterns(patterns: List<Pattern>): void;
}
export class BarColor {
   static BLUE: BarColor;
   static GREEN: BarColor;
   static PINK: BarColor;
   static PURPLE: BarColor;
   static RED: BarColor;
   static WHITE: BarColor;
   static YELLOW: BarColor;
   static valueOf (name: string): BarColor;
   static values (): BarColor[];
}
export class BarFlag {
   static CREATE_FOG: BarFlag;
   static DARKEN_SKY: BarFlag;
   static PLAY_BOSS_MUSIC: BarFlag;
   static valueOf (name: string): BarFlag;
   static values (): BarFlag[];
}
export interface Barrel extends Container, Lootable, Lidded {}
export class BarStyle {
   static SEGMENTED_10: BarStyle;
   static SEGMENTED_12: BarStyle;
   static SEGMENTED_20: BarStyle;
   static SEGMENTED_6: BarStyle;
   static SOLID: BarStyle;
   static valueOf (name: string): BarStyle;
   static values (): BarStyle[];
}
export interface Bat extends Ambient {
   isAwake(): boolean;
   setAwake(state: boolean): void;
}
export class BatToggleSleepEvent extends EntityEvent implements Cancellable {
   constructor (what: Bat, awake: boolean);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isAwake (): boolean;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export interface Beacon extends TileState, Lockable, Nameable {
   getEntitiesInRange(): Collection<LivingEntity>;
   getPrimaryEffect(): PotionEffect;
   getSecondaryEffect(): PotionEffect;
   getTier(): number;
   setPrimaryEffect(effect: PotionEffectType): void;
   setSecondaryEffect(effect: PotionEffectType): void;
}
export class BeaconEffectEvent extends BlockEvent implements Cancellable {
   constructor (block: Block, effect: PotionEffect, player: Player, primary: boolean);
   getEffect (): PotionEffect;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getPlayer (): Player;
   isCancelled (): boolean;
   isPrimary (): boolean;
   setCancelled (cancelled: boolean): void;
   setEffect (effect: PotionEffect): void;
}
export interface BeaconInventory extends Inventory {
   getItem(): ItemStack;
   setItem(item: ItemStack): void;
}
export interface Bed extends TileState, Colorable {}
export interface Bed extends Directional {
   getPart(): Bed$Part;
   isOccupied(): boolean;
   setPart(part: Bed$Part): void;
}
export class Bed extends MaterialData {
   constructor ();
   constructor (direction: BlockFace);
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Bed;
   getFacing (): BlockFace;
   isHeadOfBed (): boolean;
   setFacingDirection (face: BlockFace): void;
   setHeadOfBed (is_head_of_bed: boolean): void;
   toString (): string;
}
export class Bed$Part {
   static FOOT: Bed$Part;
   static HEAD: Bed$Part;
   static valueOf (name: string): Bed$Part;
   static values (): Bed$Part[];
}
export interface Bee extends Animals {
   getAnger(): number;
   getCannotEnterHiveTicks(): number;
   getFlower(): Location;
   getHive(): Location;
   hasNectar(): boolean;
   hasStung(): boolean;
   setAnger(anger: number): void;
   setCannotEnterHiveTicks(ticks: number): void;
   setFlower(location: Location): void;
   setHasNectar(nectar: boolean): void;
   setHasStung(stung: boolean): void;
   setHive(location: Location): void;
}
export interface Beehive extends EntityBlockStorage<Bee> {
   getFlower(): Location;
   isSedated(): boolean;
   setFlower(location: Location): void;
}
export interface Beehive extends Directional {
   getHoneyLevel(): number;
   getMaximumHoneyLevel(): number;
   setHoneyLevel(honey_level: number): void;
}
export interface Bell extends TileState {}
export interface Bell extends Directional, Powerable {
   getAttachment(): Bell$Attachment;
   setAttachment(attachment: Bell$Attachment): void;
}
export class Bell$Attachment {
   static CEILING: Bell$Attachment;
   static DOUBLE_WALL: Bell$Attachment;
   static FLOOR: Bell$Attachment;
   static SINGLE_WALL: Bell$Attachment;
   static valueOf (name: string): Bell$Attachment;
   static values (): Bell$Attachment[];
}
export class Biome {
   static BADLANDS: Biome;
   static BADLANDS_PLATEAU: Biome;
   static BAMBOO_JUNGLE: Biome;
   static BAMBOO_JUNGLE_HILLS: Biome;
   static BASALT_DELTAS: Biome;
   static BEACH: Biome;
   static BIRCH_FOREST: Biome;
   static BIRCH_FOREST_HILLS: Biome;
   static COLD_OCEAN: Biome;
   static CRIMSON_FOREST: Biome;
   static DARK_FOREST: Biome;
   static DARK_FOREST_HILLS: Biome;
   static DEEP_COLD_OCEAN: Biome;
   static DEEP_FROZEN_OCEAN: Biome;
   static DEEP_LUKEWARM_OCEAN: Biome;
   static DEEP_OCEAN: Biome;
   static DEEP_WARM_OCEAN: Biome;
   static DESERT: Biome;
   static DESERT_HILLS: Biome;
   static DESERT_LAKES: Biome;
   static END_BARRENS: Biome;
   static END_HIGHLANDS: Biome;
   static END_MIDLANDS: Biome;
   static ERODED_BADLANDS: Biome;
   static FLOWER_FOREST: Biome;
   static FOREST: Biome;
   static FROZEN_OCEAN: Biome;
   static FROZEN_RIVER: Biome;
   static GIANT_SPRUCE_TAIGA: Biome;
   static GIANT_SPRUCE_TAIGA_HILLS: Biome;
   static GIANT_TREE_TAIGA: Biome;
   static GIANT_TREE_TAIGA_HILLS: Biome;
   static GRAVELLY_MOUNTAINS: Biome;
   static ICE_SPIKES: Biome;
   static JUNGLE: Biome;
   static JUNGLE_EDGE: Biome;
   static JUNGLE_HILLS: Biome;
   static LUKEWARM_OCEAN: Biome;
   static MODIFIED_BADLANDS_PLATEAU: Biome;
   static MODIFIED_GRAVELLY_MOUNTAINS: Biome;
   static MODIFIED_JUNGLE: Biome;
   static MODIFIED_JUNGLE_EDGE: Biome;
   static MODIFIED_WOODED_BADLANDS_PLATEAU: Biome;
   static MOUNTAIN_EDGE: Biome;
   static MOUNTAINS: Biome;
   static MUSHROOM_FIELD_SHORE: Biome;
   static MUSHROOM_FIELDS: Biome;
   static NETHER_WASTES: Biome;
   static OCEAN: Biome;
   static PLAINS: Biome;
   static RIVER: Biome;
   static SAVANNA: Biome;
   static SAVANNA_PLATEAU: Biome;
   static SHATTERED_SAVANNA: Biome;
   static SHATTERED_SAVANNA_PLATEAU: Biome;
   static SMALL_END_ISLANDS: Biome;
   static SNOWY_BEACH: Biome;
   static SNOWY_MOUNTAINS: Biome;
   static SNOWY_TAIGA: Biome;
   static SNOWY_TAIGA_HILLS: Biome;
   static SNOWY_TAIGA_MOUNTAINS: Biome;
   static SNOWY_TUNDRA: Biome;
   static SOUL_SAND_VALLEY: Biome;
   static STONE_SHORE: Biome;
   static SUNFLOWER_PLAINS: Biome;
   static SWAMP: Biome;
   static SWAMP_HILLS: Biome;
   static TAIGA: Biome;
   static TAIGA_HILLS: Biome;
   static TAIGA_MOUNTAINS: Biome;
   static TALL_BIRCH_FOREST: Biome;
   static TALL_BIRCH_HILLS: Biome;
   static THE_END: Biome;
   static THE_VOID: Biome;
   static WARM_OCEAN: Biome;
   static WARPED_FOREST: Biome;
   static WOODED_BADLANDS_PLATEAU: Biome;
   static WOODED_HILLS: Biome;
   static WOODED_MOUNTAINS: Biome;
   getKey (): NamespacedKey;
   static valueOf (name: string): Biome;
   static values (): Biome[];
}
export interface Bisected extends BlockData {
   getHalf(): Bisected$Half;
   setHalf(half: Bisected$Half): void;
}
export class Bisected$Half {
   static BOTTOM: Bisected$Half;
   static TOP: Bisected$Half;
   static valueOf (name: string): Bisected$Half;
   static values (): Bisected$Half[];
}
export interface BlastFurnace extends Furnace {}
export class BlastingRecipe extends CookingRecipe<BlastingRecipe> {
   constructor (key: NamespacedKey, result: ItemStack, input: RecipeChoice, experience: number, cooking_time: number);
   constructor (key: NamespacedKey, result: ItemStack, source: Material, experience: number, cooking_time: number);
}
export interface Blaze extends Monster {}
export interface Block extends Metadatable {
   breakNaturally(): boolean;
   breakNaturally(tool: ItemStack): boolean;
   breakNaturally(tool: ItemStack, trigger_effect: boolean): boolean;
   getBiome(): Biome;
   getBlockData(): BlockData;
   getBlockKey(): number;
   static getBlockKey(x: number, y: number, z: number): number;
   static getBlockKeyX(packed: number): number;
   static getBlockKeyY(packed: number): number;
   static getBlockKeyZ(packed: number): number;
   getBlockPower(): number;
   getBlockPower(face: BlockFace): number;
   getBoundingBox(): BoundingBox;
   getChunk(): Chunk;
   getData(): number;
   getDrops(): Collection<ItemStack>;
   getDrops(tool: ItemStack): Collection<ItemStack>;
   getDrops(tool: ItemStack, entity: Entity): Collection<ItemStack>;
   getFace(block: Block): BlockFace;
   getHumidity(): number;
   getLightFromBlocks(): number;
   getLightFromSky(): number;
   getLightLevel(): number;
   getLocation(): Location;
   getLocation(loc: Location): Location;
   getPistonMoveReaction(): PistonMoveReaction;
   getRelative(mod_x: number, mod_y: number, mod_z: number): Block;
   getRelative(face: BlockFace): Block;
   getRelative(face: BlockFace, distance: number): Block;
   getSoundGroup(): BlockSoundGroup;
   getState(): BlockState;
   getState(use_snapshot: boolean): BlockState;
   getTemperature(): number;
   getType(): Material;
   getWorld(): World;
   getX(): number;
   getY(): number;
   getZ(): number;
   isBlockFaceIndirectlyPowered(face: BlockFace): boolean;
   isBlockFacePowered(face: BlockFace): boolean;
   isBlockIndirectlyPowered(): boolean;
   isBlockPowered(): boolean;
   isEmpty(): boolean;
   isLiquid(): boolean;
   isPassable(): boolean;
   rayTrace(
      start: Location,
      direction: Vector,
      max_distance: number,
      fluid_collision_mode: FluidCollisionMode
   ): RayTraceResult;
   setBiome(bio: Biome): void;
   setBlockData(data: BlockData): void;
   setBlockData(data: BlockData, apply_physics: boolean): void;
   setType(type: Material): void;
   setType(type: Material, apply_physics: boolean): void;
}
export class BlockBreakEvent extends BlockExpEvent implements Cancellable {
   constructor (the_block: Block, player: Player);
   getPlayer (): Player;
   isCancelled (): boolean;
   isDropItems (): boolean;
   setCancelled (cancel: boolean): void;
   setDropItems (drop_items: boolean): void;
}
export class BlockBurnEvent extends BlockEvent implements Cancellable {
   constructor (block: Block);
   constructor (block: Block, igniting_block: Block);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getIgnitingBlock (): Block;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class BlockCanBuildEvent extends BlockEvent {
   constructor (block: Block, type: BlockData, can_build: boolean);
   constructor (block: Block, player: Player, type: BlockData, can_build: boolean);
   getBlockData (): BlockData;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getMaterial (): Material;
   getPlayer (): Player;
   isBuildable (): boolean;
   setBuildable (cancel: boolean): void;
}
export interface BlockChangeDelegate {
   getBlockData(x: number, y: number, z: number): BlockData;
   getHeight(): number;
   isEmpty(x: number, y: number, z: number): boolean;
   setBlockData(x: number, y: number, z: number, block_data: BlockData): boolean;
}
export interface BlockCommandSender extends CommandSender {
   getBlock(): Block;
}
export class BlockCookEvent extends BlockEvent implements Cancellable {
   constructor (block: Block, source: ItemStack, result: ItemStack);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getResult (): ItemStack;
   getSource (): ItemStack;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setResult (result: ItemStack): void;
}
export class BlockDamageEvent extends BlockEvent implements Cancellable {
   constructor (player: Player, block: Block, item_in_hand: ItemStack, insta_break: boolean);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getInstaBreak (): boolean;
   getItemInHand (): ItemStack;
   getPlayer (): Player;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setInstaBreak (bool: boolean): void;
}
export interface BlockData extends Cloneable {
   clone(): BlockData;
   getAsString(): string;
   getAsString(hide_unspecified: boolean): string;
   getMaterial(): Material;
   matches(data: BlockData): boolean;
   merge(data: BlockData): BlockData;
}
export interface BlockDataMeta extends ItemMeta {
   getBlockData(material: Material): BlockData;
   hasBlockData(): boolean;
   setBlockData(block_data: BlockData): void;
}
export class BlockDestroyEvent extends BlockEvent implements Cancellable {
   constructor (block: Block, new_state: BlockData, will_drop: boolean);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getNewState (): BlockData;
   isCancelled (): boolean;
   playEffect (): boolean;
   setCancelled (cancel: boolean): void;
   setPlayEffect (play_effect: boolean): void;
   willDrop (): boolean;
}
export class BlockDispenseArmorEvent extends BlockDispenseEvent {
   constructor (block: Block, dispensed: ItemStack, target: LivingEntity);
   getTargetEntity (): LivingEntity;
}
export class BlockDispenseEvent extends BlockEvent implements Cancellable {
   constructor (block: Block, dispensed: ItemStack, velocity: Vector);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getItem (): ItemStack;
   getVelocity (): Vector;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setItem (item: ItemStack): void;
   setVelocity (vel: Vector): void;
}
export class BlockDropItemEvent extends BlockEvent implements Cancellable {
   constructor (block: Block, block_state: BlockState, player: Player, items: List<Item>);
   getBlockState (): BlockState;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getItems (): List<Item>;
   getPlayer (): Player;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class BlockEvent extends Event {
   constructor (the_block: Block);
   getBlock (): Block;
}
export class BlockExpEvent extends BlockEvent {
   constructor (block: Block, exp: number);
   getExpToDrop (): number;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   setExpToDrop (exp: number): void;
}
export class BlockExplodeEvent extends BlockEvent implements Cancellable {
   constructor (what: Block, blocks: List<Block>, yield: number);
   blockList (): List<Block>;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getYield (): number;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setYield (yield: number): void;
}
export class BlockFace {
   static DOWN: BlockFace;
   static EAST: BlockFace;
   static EAST_NORTH_EAST: BlockFace;
   static EAST_SOUTH_EAST: BlockFace;
   static NORTH: BlockFace;
   static NORTH_EAST: BlockFace;
   static NORTH_NORTH_EAST: BlockFace;
   static NORTH_NORTH_WEST: BlockFace;
   static NORTH_WEST: BlockFace;
   static SELF: BlockFace;
   static SOUTH: BlockFace;
   static SOUTH_EAST: BlockFace;
   static SOUTH_SOUTH_EAST: BlockFace;
   static SOUTH_SOUTH_WEST: BlockFace;
   static SOUTH_WEST: BlockFace;
   static UP: BlockFace;
   static WEST: BlockFace;
   static WEST_NORTH_WEST: BlockFace;
   static WEST_SOUTH_WEST: BlockFace;
   getDirection (): Vector;
   getModX (): number;
   getModY (): number;
   getModZ (): number;
   getOppositeFace (): BlockFace;
   static valueOf (name: string): BlockFace;
   static values (): BlockFace[];
}
export class BlockFadeEvent extends BlockEvent implements Cancellable {
   constructor (block: Block, new_state: BlockState);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getNewState (): BlockState;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class BlockFertilizeEvent extends BlockEvent implements Cancellable {
   constructor (the_block: Block, player: Player, blocks: List<BlockState>);
   getBlocks (): List<BlockState>;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getPlayer (): Player;
   isCancelled (): boolean;
   setCancelled (cancelled: boolean): void;
}
export class BlockFormEvent extends BlockGrowEvent {
   constructor (block: Block, new_state: BlockState);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class BlockFromToEvent extends BlockEvent implements Cancellable {
   constructor (block: Block, to_block: Block);
   constructor (block: Block, face: BlockFace);
   getFace (): BlockFace;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getToBlock (): Block;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class BlockGrowEvent extends BlockEvent implements Cancellable {
   constructor (block: Block, new_state: BlockState);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getNewState (): BlockState;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class BlockIgniteEvent extends BlockEvent implements Cancellable {
   constructor (the_block: Block, cause: BlockIgniteEvent$IgniteCause, igniting_block: Block);
   constructor (the_block: Block, cause: BlockIgniteEvent$IgniteCause, igniting_entity: Entity);
   constructor (the_block: Block, cause: BlockIgniteEvent$IgniteCause, igniting_entity: Entity, igniting_block: Block);
   getCause (): BlockIgniteEvent$IgniteCause;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getIgnitingBlock (): Block;
   getIgnitingEntity (): Entity;
   getPlayer (): Player;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class BlockIgniteEvent$IgniteCause {
   static ARROW: BlockIgniteEvent$IgniteCause;
   static ENDER_CRYSTAL: BlockIgniteEvent$IgniteCause;
   static EXPLOSION: BlockIgniteEvent$IgniteCause;
   static FIREBALL: BlockIgniteEvent$IgniteCause;
   static FLINT_AND_STEEL: BlockIgniteEvent$IgniteCause;
   static LAVA: BlockIgniteEvent$IgniteCause;
   static LIGHTNING: BlockIgniteEvent$IgniteCause;
   static SPREAD: BlockIgniteEvent$IgniteCause;
   static valueOf (name: string): BlockIgniteEvent$IgniteCause;
   static values (): BlockIgniteEvent$IgniteCause[];
}
export interface BlockInventoryHolder extends InventoryHolder {
   getBlock(): Block;
}
export class BlockIterator extends JavaObject implements Iterator<Block> {
   constructor (entity: LivingEntity);
   constructor (entity: LivingEntity, max_distance: number);
   constructor (loc: Location);
   constructor (loc: Location, y_offset: number);
   constructor (loc: Location, y_offset: number, max_distance: number);
   constructor (world: World, start: Vector, direction: Vector, y_offset: number, max_distance: number);
   hasNext (): boolean;
   next (): Block;
   remove (): void;
}
export class BlockMultiPlaceEvent extends BlockPlaceEvent {
   constructor (
      states: List<BlockState>,
      clicked: Block,
      item_in_hand: ItemStack,
      the_player: Player,
      can_build: boolean
   );
   constructor (
      states: List<BlockState>,
      clicked: Block,
      item_in_hand: ItemStack,
      the_player: Player,
      can_build: boolean,
      hand: EquipmentSlot
   );
   getReplacedBlockStates (): List<BlockState>;
}
export class BlockPhysicsEvent extends BlockEvent implements Cancellable {
   constructor (block: Block, changed: BlockData);
   constructor (block: Block, changed: BlockData, source_x: number, source_y: number, source_z: number);
   constructor (block: Block, changed: BlockData, source_block: Block);
   getChangedType (): Material;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getSourceBlock (): Block;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class BlockPistonEvent extends BlockEvent implements Cancellable {
   constructor (block: Block, direction: BlockFace);
   getDirection (): BlockFace;
   isCancelled (): boolean;
   isSticky (): boolean;
   setCancelled (cancelled: boolean): void;
}
export class BlockPistonExtendEvent extends BlockPistonEvent {
   constructor (block: Block, length: number, direction: BlockFace);
   constructor (block: Block, blocks: List<Block>, direction: BlockFace);
   getBlocks (): List<Block>;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getLength (): number;
}
export class BlockPistonRetractEvent extends BlockPistonEvent {
   constructor (block: Block, blocks: List<Block>, direction: BlockFace);
   getBlocks (): List<Block>;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getRetractLocation (): Location;
}
export class BlockPlaceEvent extends BlockEvent implements Cancellable {
   constructor (
      placed_block: Block,
      replaced_block_state: BlockState,
      placed_against: Block,
      item_in_hand: ItemStack,
      the_player: Player,
      can_build: boolean
   );
   constructor (
      placed_block: Block,
      replaced_block_state: BlockState,
      placed_against: Block,
      item_in_hand: ItemStack,
      the_player: Player,
      can_build: boolean,
      hand: EquipmentSlot
   );
   canBuild (): boolean;
   getBlockAgainst (): Block;
   getBlockPlaced (): Block;
   getBlockReplacedState (): BlockState;
   getHand (): EquipmentSlot;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getItemInHand (): ItemStack;
   getPlayer (): Player;
   isCancelled (): boolean;
   setBuild (can_build: boolean): void;
   setCancelled (cancel: boolean): void;
}
export class BlockPopulator extends JavaObject {
   constructor ();
   populate (world: World, random: Random, source: Chunk): void;
}
export interface BlockProjectileSource extends ProjectileSource {
   getBlock(): Block;
}
export class BlockRedstoneEvent extends BlockEvent {
   constructor (block: Block, old_current: number, new_current: number);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getNewCurrent (): number;
   getOldCurrent (): number;
   setNewCurrent (new_current: number): void;
}
export class BlockShearEntityEvent extends BlockEvent implements Cancellable {
   constructor (dispenser: Block, sheared: Entity, tool: ItemStack);
   getEntity (): Entity;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getTool (): ItemStack;
   isCancelled (): boolean;
   setCancelled (cancelled: boolean): void;
}
export interface BlockSoundGroup {
   getBreakSound(): Sound;
   getFallSound(): Sound;
   getHitSound(): Sound;
   getPlaceSound(): Sound;
   getStepSound(): Sound;
}
export class BlockSpreadEvent extends BlockFormEvent {
   constructor (block: Block, source: Block, new_state: BlockState);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getSource (): Block;
}
export interface BlockState extends Metadatable {
   getBlock(): Block;
   getBlockData(): BlockData;
   getChunk(): Chunk;
   getData(): MaterialData;
   getLightLevel(): number;
   getLocation(): Location;
   getLocation(loc: Location): Location;
   getRawData(): number;
   getType(): Material;
   getWorld(): World;
   getX(): number;
   getY(): number;
   getZ(): number;
   isPlaced(): boolean;
   setBlockData(data: BlockData): void;
   setData(data: MaterialData): void;
   setRawData(data: number): void;
   setType(type: Material): void;
   update(): boolean;
   update(force: boolean): boolean;
   update(force: boolean, apply_physics: boolean): boolean;
}
export interface BlockStateMeta extends ItemMeta {
   getBlockState(): BlockState;
   hasBlockState(): boolean;
   setBlockState(block_state: BlockState): void;
}
export class BlockVector extends Vector {
   constructor ();
   constructor (x: number, y: number, z: number);
   constructor (x: number, y: number, z: number);
   constructor (x: number, y: number, z: number);
   constructor (vec: Vector);
   clone (): BlockVector;
   static deserialize (args: Map<string, JavaObject>): BlockVector;
   equals (obj: JavaObject): boolean;
   hashCode (): number;
}
export interface Boat extends Vehicle {
   getMaxSpeed(): number;
   getOccupiedDeceleration(): number;
   getUnoccupiedDeceleration(): number;
   getWoodType(): TreeSpecies;
   getWorkOnLand(): boolean;
   setMaxSpeed(speed: number): void;
   setOccupiedDeceleration(rate: number): void;
   setUnoccupiedDeceleration(rate: number): void;
   setWoodType(species: TreeSpecies): void;
   setWorkOnLand(work_on_land: boolean): void;
}
export interface BookMeta extends ItemMeta {
   addPage(...pages: string): void;
   clone(): BookMeta;
   getAuthor(): string;
   getGeneration(): BookMeta$Generation;
   getPage(page: number): string;
   getPageCount(): number;
   getPages(): List<string>;
   getTitle(): string;
   hasAuthor(): boolean;
   hasGeneration(): boolean;
   hasPages(): boolean;
   hasTitle(): boolean;
   setAuthor(author: string): void;
   setGeneration(generation: BookMeta$Generation): void;
   setPage(page: number, data: string): void;
   setPages(...pages: string): void;
   setPages(pages: List<string>): void;
   setTitle(title: string): boolean;
   spigot(): BookMeta$Spigot;
}
export class BookMeta$Generation {
   static COPY_OF_COPY: BookMeta$Generation;
   static COPY_OF_ORIGINAL: BookMeta$Generation;
   static ORIGINAL: BookMeta$Generation;
   static TATTERED: BookMeta$Generation;
   static valueOf (name: string): BookMeta$Generation;
   static values (): BookMeta$Generation[];
}
export class BookMeta$Spigot extends JavaObject {
   constructor ();
   addPage (...pages: BaseComponent[]): void;
   getPage (page: number): BaseComponent[];
   getPages (): List<BaseComponent[]>;
   setPage (page: number, ...data: BaseComponent): void;
   setPages (pages: List<BaseComponent[]>): void;
   setPages (...pages: BaseComponent[]): void;
}
export class BooleanPrompt extends ValidatingPrompt {
   constructor ();
   acceptValidatedInput (context: ConversationContext, input: boolean): Prompt;
   acceptValidatedInput (context: ConversationContext, input: string): Prompt;
   isInputValid (context: ConversationContext, input: string): boolean;
}
export interface Boss extends Entity {
   getBossBar(): BossBar;
}
export interface BossBar {
   addFlag(flag: BarFlag): void;
   addPlayer(player: Player): void;
   getColor(): BarColor;
   getPlayers(): List<Player>;
   getProgress(): number;
   getStyle(): BarStyle;
   getTitle(): string;
   hasFlag(flag: BarFlag): boolean;
   hide(): void;
   isVisible(): boolean;
   removeAll(): void;
   removeFlag(flag: BarFlag): void;
   removePlayer(player: Player): void;
   setColor(color: BarColor): void;
   setProgress(progress: number): void;
   setStyle(style: BarStyle): void;
   setTitle(title: string): void;
   setVisible(visible: boolean): void;
   show(): void;
}
export class BoundingBox extends JavaObject implements Cloneable, ConfigurationSerializable {
   constructor ();
   constructor (x1: number, y1: number, z1: number, x2: number, y2: number, z2: number);
   clone (): BoundingBox;
   contains (x: number, y: number, z: number): boolean;
   contains (other: BoundingBox): boolean;
   contains (position: Vector): boolean;
   contains (min: Vector, max: Vector): boolean;
   copy (other: BoundingBox): BoundingBox;
   static deserialize (args: Map<string, JavaObject>): BoundingBox;
   equals (obj: JavaObject): boolean;
   expand (expansion: number): BoundingBox;
   expand (x: number, y: number, z: number): BoundingBox;
   expand (dir_x: number, dir_y: number, dir_z: number, expansion: number): BoundingBox;
   expand (
      negative_x: number,
      negative_y: number,
      negative_z: number,
      positive_x: number,
      positive_y: number,
      positive_z: number
   ): BoundingBox;
   expand (block_face: BlockFace, expansion: number): BoundingBox;
   expand (expansion: Vector): BoundingBox;
   expand (direction: Vector, expansion: number): BoundingBox;
   expandDirectional (dir_x: number, dir_y: number, dir_z: number): BoundingBox;
   expandDirectional (direction: Vector): BoundingBox;
   getCenter (): Vector;
   getCenterX (): number;
   getCenterY (): number;
   getCenterZ (): number;
   getHeight (): number;
   getMax (): Vector;
   getMaxX (): number;
   getMaxY (): number;
   getMaxZ (): number;
   getMin (): Vector;
   getMinX (): number;
   getMinY (): number;
   getMinZ (): number;
   getVolume (): number;
   getWidthX (): number;
   getWidthZ (): number;
   hashCode (): number;
   intersection (other: BoundingBox): BoundingBox;
   static of (block: Block): BoundingBox;
   static of (corner1: Block, corner2: Block): BoundingBox;
   static of (center: Location, x: number, y: number, z: number): BoundingBox;
   static of (corner1: Location, corner2: Location): BoundingBox;
   static of (center: Vector, x: number, y: number, z: number): BoundingBox;
   static of (corner1: Vector, corner2: Vector): BoundingBox;
   overlaps (other: BoundingBox): boolean;
   overlaps (min: Vector, max: Vector): boolean;
   rayTrace (start: Vector, direction: Vector, max_distance: number): RayTraceResult;
   resize (x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): BoundingBox;
   serialize (): Map<string, JavaObject>;
   shift (shift_x: number, shift_y: number, shift_z: number): BoundingBox;
   shift (shift: Location): BoundingBox;
   shift (shift: Vector): BoundingBox;
   toString (): string;
   union (pos_x: number, pos_y: number, pos_z: number): BoundingBox;
   union (position: Location): BoundingBox;
   union (other: BoundingBox): BoundingBox;
   union (position: Vector): BoundingBox;
}
export interface BrewerInventory extends Inventory {
   getFuel(): ItemStack;
   getHolder(): BrewingStand;
   getIngredient(): ItemStack;
   setFuel(fuel: ItemStack): void;
   setIngredient(ingredient: ItemStack): void;
}
export class BrewEvent extends BlockEvent implements Cancellable {
   constructor (brewer: Block, contents: BrewerInventory, fuel_level: number);
   getContents (): BrewerInventory;
   getFuelLevel (): number;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export interface BrewingStand extends Container {
   getBrewingTime(): number;
   getFuelLevel(): number;
   getInventory(): BrewerInventory;
   getSnapshotInventory(): BrewerInventory;
   setBrewingTime(brew_time: number): void;
   setFuelLevel(level: number): void;
}
export interface BrewingStand extends BlockData {
   getBottles(): Set<Integer>;
   getMaximumBottles(): number;
   hasBottle(bottle: number): boolean;
   setBottle(bottle: number, has: boolean): void;
}
export class BrewingStandFuelEvent extends BlockEvent implements Cancellable {
   constructor (brewing_stand: Block, fuel: ItemStack, fuel_power: number);
   getFuel (): ItemStack;
   getFuelPower (): number;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   isConsuming (): boolean;
   setCancelled (cancel: boolean): void;
   setConsuming (consuming: boolean): void;
   setFuelPower (fuel_power: number): void;
}
export class BroadcastMessageEvent extends ServerEvent implements Cancellable {
   constructor (is_async: boolean, message: string, recipients: Set<CommandSender>);
   constructor (message: string, recipients: Set<CommandSender>);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getMessage (): string;
   getRecipients (): Set<CommandSender>;
   isCancelled (): boolean;
   setCancelled (cancelled: boolean): void;
   setMessage (message: string): void;
}
export class BroadcastPermissions extends JavaObject {
   static registerPermissions (parent: Permission): Permission;
}
export interface BubbleColumn extends BlockData {
   isDrag(): boolean;
   setDrag(drag: boolean): void;
}
export class BufferedCommandSender extends JavaObject implements MessageCommandSender {
   constructor ();
   getBuffer (): string;
   reset (): void;
   sendMessage (message: string): void;
}
export class Bukkit extends JavaObject {
   static addRecipe (recipe: Recipe): boolean;
   static advancementIterator (): Iterator<Advancement>;
   static banIP (address: string): void;
   static broadcast (message: string, permission: string): number;
   static broadcast (component: BaseComponent): void;
   static broadcast (...components: BaseComponent): void;
   static broadcastMessage (message: string): number;
   static clearRecipes (): void;
   static createBlockData (data: string): BlockData;
   static createBlockData (material: Material): BlockData;
   static createBlockData (material: Material, data: string): BlockData;
   static createBlockData (material: Material, consumer: Consumer<BlockData>): BlockData;
   static createBossBar (title: string, color: BarColor, style: BarStyle, ...flags: BarFlag): BossBar;
   static createBossBar (
      key: NamespacedKey,
      title: string,
      color: BarColor,
      style: BarStyle,
      ...flags: BarFlag
   ): KeyedBossBar;
   static createChunkData (world: World): ChunkGenerator$ChunkData;
   static createExplorerMap (world: World, location: Location, structure_type: StructureType): ItemStack;
   static createExplorerMap (
      world: World,
      location: Location,
      structure_type: StructureType,
      radius: number,
      find_unexplored: boolean
   ): ItemStack;
   static createInventory (owner: InventoryHolder, size: number): Inventory;
   static createInventory (owner: InventoryHolder, size: number, title: string): Inventory;
   static createInventory (owner: InventoryHolder, type: InventoryType): Inventory;
   static createInventory (owner: InventoryHolder, type: InventoryType, title: string): Inventory;
   static createMap (world: World): MapView;
   static createMerchant (title: string): Merchant;
   static createProfile (name: string): PlayerProfile;
   static createProfile (uuid: UUID): PlayerProfile;
   static createProfile (uuid: UUID, name: string): PlayerProfile;
   static createVanillaChunkData (world: World, x: number, z: number): ChunkGenerator$ChunkData;
   static createWorld (creator: WorldCreator): World;
   static dispatchCommand (sender: CommandSender, command_line: string): boolean;
   static getAdvancement (key: NamespacedKey): Advancement;
   static getAllowEnd (): boolean;
   static getAllowFlight (): boolean;
   static getAllowNether (): boolean;
   static getAmbientSpawnLimit (): number;
   static getAnimalSpawnLimit (): number;
   static getAverageTickTime (): number;
   static getBanList (type: BanList$Type): BanList;
   static getBannedPlayers (): Set<OfflinePlayer>;
   static getBossBar (key: NamespacedKey): KeyedBossBar;
   static getBossBars (): Iterator<KeyedBossBar>;
   static getBukkitVersion (): string;
   static getCommandAliases (): Map<string, string[]>;
   static getCommandMap (): CommandMap;
   static getConnectionThrottle (): number;
   static getConsoleSender (): ConsoleCommandSender;
   static getCurrentTick (): number;
   static getDefaultGameMode (): GameMode;
   static getEntity (uuid: UUID): Entity;
   static getGenerateStructures (): boolean;
   static getHelpMap (): HelpMap;
   static getIdleTimeout (): number;
   static getIp (): string;
   static getIPBans (): Set<string>;
   static getItemFactory (): ItemFactory;
   static getLogger (): Logger;
   static getLootTable (key: NamespacedKey): LootTable;
   static getMap (id: number): MapView;
   static getMaxPlayers (): number;
   static getMessenger (): Messenger;
   static getMinecraftVersion (): string;
   static getMobGoals (): MobGoals;
   static getMonsterSpawnLimit (): number;
   static getMotd (): string;
   static getName (): string;
   static getOfflinePlayer (name: string): OfflinePlayer;
   static getOfflinePlayer (id: UUID): OfflinePlayer;
   static getOfflinePlayers (): OfflinePlayer[];
   static getOnlineMode (): boolean;
   static getOnlinePlayers (): Collection<Player>;
   static getOperators (): Set<OfflinePlayer>;
   static getPermissionMessage (): string;
   static getPlayer (name: string): Player;
   static getPlayer (id: UUID): Player;
   static getPlayerExact (name: string): Player;
   static getPlayerUniqueId (player_name: string): UUID;
   static getPluginCommand (name: string): PluginCommand;
   static getPluginManager (): PluginManager;
   static getPort (): number;
   static getRecipe (recipe_key: NamespacedKey): Recipe;
   static getRecipesFor (result: ItemStack): List<Recipe>;
   static getScheduler (): BukkitScheduler;
   static getScoreboardManager (): ScoreboardManager;
   static getServer (): Server;
   static getServerIcon (): CachedServerIcon;
   static getServicesManager (): ServicesManager;
   static getShutdownMessage (): string;
   static getSpawnRadius (): number;
   static getTag<T extends Keyed> (registry: string, tag: NamespacedKey, clazz: Class<T>): Tag<T>;
   static getTags<T extends Keyed> (registry: string, clazz: Class<T>): Iterable<Tag<T>>;
   static getTicksPerAmbientSpawns (): number;
   static getTicksPerAnimalSpawns (): number;
   static getTicksPerMonsterSpawns (): number;
   static getTicksPerWaterAmbientSpawns (): number;
   static getTicksPerWaterSpawns (): number;
   static getTickTimes (): number[];
   static getTPS (): number[];
   static getUnsafe (): UnsafeValues;
   static getUpdateFolder (): string;
   static getUpdateFolderFile (): File;
   static getVersion (): string;
   static getViewDistance (): number;
   static getWarningState (): Warning$WarningState;
   static getWaterAmbientSpawnLimit (): number;
   static getWaterAnimalSpawnLimit (): number;
   static getWhitelistedPlayers (): Set<OfflinePlayer>;
   static getWorld (name: string): World;
   static getWorld (uid: UUID): World;
   static getWorldContainer (): File;
   static getWorlds (): List<World>;
   static getWorldType (): string;
   static hasWhitelist (): boolean;
   static isHardcore (): boolean;
   static isPrimaryThread (): boolean;
   static isStopping (): boolean;
   static loadServerIcon (image: BufferedImage): CachedServerIcon;
   static loadServerIcon (file: File): CachedServerIcon;
   static matchPlayer (name: string): List<Player>;
   static recipeIterator (): Iterator<Recipe>;
   static reload (): void;
   static reloadCommandAliases (): boolean;
   static reloadData (): void;
   static reloadPermissions (): void;
   static reloadWhitelist (): void;
   static removeBossBar (key: NamespacedKey): boolean;
   static removeRecipe (key: NamespacedKey): boolean;
   static resetRecipes (): void;
   static savePlayers (): void;
   static selectEntities (sender: CommandSender, selector: string): List<Entity>;
   static setDefaultGameMode (mode: GameMode): void;
   static setIdleTimeout (threshold: number): void;
   static setServer (server: Server): void;
   static setSpawnRadius (value: number): void;
   static setWhitelist (value: boolean): void;
   static shutdown (): void;
   static spigot (): Server$Spigot;
   static suggestPlayerNamesWhenNullTabCompletions (): boolean;
   static unbanIP (address: string): void;
   static unloadWorld (name: string, save: boolean): boolean;
   static unloadWorld (world: World, save: boolean): boolean;
}
export class BukkitCommand extends Command {
   constructor (name: string);
   constructor (name: string, description: string, usage_message: string, aliases: List<string>);
}
export class BukkitObjectInputStream extends JavaObjectInputStream {
   constructor ();
   constructor (_in: InputStream);
   resolveObject (obj: JavaObject): JavaObject;
}
export class BukkitObjectOutputStream extends JavaObjectOutputStream {
   constructor ();
   constructor (out: OutputStream);
   replaceObject (obj: JavaObject): JavaObject;
}
export class BukkitRunnable extends JavaObject implements Runnable {
   constructor ();
   cancel (): void;
   getTaskId (): number;
   isCancelled (): boolean;
   runTask (plugin: Plugin): BukkitTask;
   runTaskAsynchronously (plugin: Plugin): BukkitTask;
   runTaskLater (plugin: Plugin, delay: number): BukkitTask;
   runTaskLaterAsynchronously (plugin: Plugin, delay: number): BukkitTask;
   runTaskTimer (plugin: Plugin, delay: number, period: number): BukkitTask;
   runTaskTimerAsynchronously (plugin: Plugin, delay: number, period: number): BukkitTask;
}
export interface BukkitScheduler {
   callSyncMethod<T>(plugin: Plugin, task: Callable<T>): Future<T>;
   cancelTask(task_id: number): void;
   cancelTasks(plugin: Plugin): void;
   getActiveWorkers(): List<BukkitWorker>;
   getPendingTasks(): List<BukkitTask>;
   isCurrentlyRunning(task_id: number): boolean;
   isQueued(task_id: number): boolean;
   runTask(plugin: Plugin, task: Runnable): BukkitTask;
   runTask(plugin: Plugin, task: Consumer<BukkitTask>): void;
   runTask(plugin: Plugin, task: BukkitRunnable): BukkitTask;
   runTaskAsynchronously(plugin: Plugin, task: Runnable): BukkitTask;
   runTaskAsynchronously(plugin: Plugin, task: Consumer<BukkitTask>): void;
   runTaskAsynchronously(plugin: Plugin, task: BukkitRunnable): BukkitTask;
   runTaskLater(plugin: Plugin, task: Runnable, delay: number): BukkitTask;
   runTaskLater(plugin: Plugin, task: Consumer<BukkitTask>, delay: number): void;
   runTaskLater(plugin: Plugin, task: BukkitRunnable, delay: number): BukkitTask;
   runTaskLaterAsynchronously(plugin: Plugin, task: Runnable, delay: number): BukkitTask;
   runTaskLaterAsynchronously(plugin: Plugin, task: Consumer<BukkitTask>, delay: number): void;
   runTaskLaterAsynchronously(plugin: Plugin, task: BukkitRunnable, delay: number): BukkitTask;
   runTaskTimer(plugin: Plugin, task: Runnable, delay: number, period: number): BukkitTask;
   runTaskTimer(plugin: Plugin, task: Consumer<BukkitTask>, delay: number, period: number): void;
   runTaskTimer(plugin: Plugin, task: BukkitRunnable, delay: number, period: number): BukkitTask;
   runTaskTimerAsynchronously(plugin: Plugin, task: Runnable, delay: number, period: number): BukkitTask;
   runTaskTimerAsynchronously(plugin: Plugin, task: Consumer<BukkitTask>, delay: number, period: number): void;
   runTaskTimerAsynchronously(plugin: Plugin, task: BukkitRunnable, delay: number, period: number): BukkitTask;
   scheduleAsyncDelayedTask(plugin: Plugin, task: Runnable): number;
   scheduleAsyncDelayedTask(plugin: Plugin, task: Runnable, delay: number): number;
   scheduleAsyncRepeatingTask(plugin: Plugin, task: Runnable, delay: number, period: number): number;
   scheduleSyncDelayedTask(plugin: Plugin, task: Runnable): number;
   scheduleSyncDelayedTask(plugin: Plugin, task: Runnable, delay: number): number;
   scheduleSyncDelayedTask(plugin: Plugin, task: BukkitRunnable): number;
   scheduleSyncDelayedTask(plugin: Plugin, task: BukkitRunnable, delay: number): number;
   scheduleSyncRepeatingTask(plugin: Plugin, task: Runnable, delay: number, period: number): number;
   scheduleSyncRepeatingTask(plugin: Plugin, task: BukkitRunnable, delay: number, period: number): number;
}
export interface BukkitTask {
   cancel(): void;
   getOwner(): Plugin;
   getTaskId(): number;
   isCancelled(): boolean;
   isSync(): boolean;
}
export interface BukkitWorker {
   getOwner(): Plugin;
   getTaskId(): number;
   getThread(): Thread;
}
export class Button extends SimpleAttachableMaterialData {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Button;
   getAttachedFace (): BlockFace;
   isPowered (): boolean;
   setFacingDirection (face: BlockFace): void;
   setPowered (bool: boolean): void;
   toString (): string;
}
export interface CachedServerIcon {
   getData(): string;
   isEmpty(): boolean;
}
export class CachedSizeConcurrentLinkedQueue<E> extends ConcurrentLinkedQueue<E> {
   constructor ();
   add (e: E): boolean;
   poll (): E;
   size (): number;
}
export interface Cake extends BlockData {
   getBites(): number;
   getMaximumBites(): number;
   setBites(bites: number): void;
}
export class Cake extends MaterialData {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Cake;
   getSlicesEaten (): number;
   getSlicesRemaining (): number;
   setSlicesEaten (n: number): void;
   setSlicesRemaining (n: number): void;
   toString (): string;
}
export interface Campfire extends TileState {
   getCookTime(index: number): number;
   getCookTimeTotal(index: number): number;
   getItem(index: number): ItemStack;
   getSize(): number;
   setCookTime(index: number, cook_time: number): void;
   setCookTimeTotal(index: number, cook_time_total: number): void;
   setItem(index: number, item: ItemStack): void;
}
export interface Campfire extends Directional, Lightable, Waterlogged {
   isSignalFire(): boolean;
   setSignalFire(signal_fire: boolean): void;
}
export class CampfireRecipe extends CookingRecipe<CampfireRecipe> {
   constructor (key: NamespacedKey, result: ItemStack, input: RecipeChoice, experience: number, cooking_time: number);
   constructor (key: NamespacedKey, result: ItemStack, source: Material, experience: number, cooking_time: number);
}
export interface Cancellable {
   isCancelled(): boolean;
   setCancelled(cancel: boolean): void;
}
export interface CartographyInventory extends Inventory {}
export interface Cat extends Tameable, Sittable {
   getCatType(): Cat$Type;
   getCollarColor(): DyeColor;
   setCatType(type: Cat$Type): void;
   setCollarColor(color: DyeColor): void;
}
export class Cat$Type {
   static ALL_BLACK: Cat$Type;
   static BLACK: Cat$Type;
   static BRITISH_SHORTHAIR: Cat$Type;
   static CALICO: Cat$Type;
   static JELLIE: Cat$Type;
   static PERSIAN: Cat$Type;
   static RAGDOLL: Cat$Type;
   static RED: Cat$Type;
   static SIAMESE: Cat$Type;
   static TABBY: Cat$Type;
   static WHITE: Cat$Type;
   static valueOf (name: string): Cat$Type;
   static values (): Cat$Type[];
}
export class Cauldron extends MaterialData {
   constructor ();
   constructor (data: number);
   constructor (type: Material, data: number);
   clone (): Cauldron;
   isEmpty (): boolean;
   isFull (): boolean;
   toString (): string;
}
export class CauldronLevelChangeEvent extends BlockEvent implements Cancellable {
   constructor (
      block: Block,
      entity: Entity,
      reason: CauldronLevelChangeEvent$ChangeReason,
      old_level: number,
      new_level: number
   );
   getEntity (): Entity;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getNewLevel (): number;
   getOldLevel (): number;
   getReason (): CauldronLevelChangeEvent$ChangeReason;
   isCancelled (): boolean;
   setCancelled (cancelled: boolean): void;
   setNewLevel (new_level: number): void;
}
export class CauldronLevelChangeEvent$ChangeReason {
   static ARMOR_WASH: CauldronLevelChangeEvent$ChangeReason;
   static BANNER_WASH: CauldronLevelChangeEvent$ChangeReason;
   static BOTTLE_EMPTY: CauldronLevelChangeEvent$ChangeReason;
   static BOTTLE_FILL: CauldronLevelChangeEvent$ChangeReason;
   static BUCKET_EMPTY: CauldronLevelChangeEvent$ChangeReason;
   static BUCKET_FILL: CauldronLevelChangeEvent$ChangeReason;
   static EVAPORATE: CauldronLevelChangeEvent$ChangeReason;
   static EXTINGUISH: CauldronLevelChangeEvent$ChangeReason;
   static UNKNOWN: CauldronLevelChangeEvent$ChangeReason;
   static valueOf (name: string): CauldronLevelChangeEvent$ChangeReason;
   static values (): CauldronLevelChangeEvent$ChangeReason[];
}
export interface CaveSpider extends Spider {}
export class ChannelNameTooLongException extends RuntimeException {
   constructor ();
   constructor (channel: string);
}
export class ChannelNotRegisteredException extends RuntimeException {
   constructor ();
   constructor (channel: string);
}
export class ChatColor {
   static AQUA: ChatColor;
   static BLACK: ChatColor;
   static BLUE: ChatColor;
   static BOLD: ChatColor;
   static DARK_AQUA: ChatColor;
   static DARK_BLUE: ChatColor;
   static DARK_GRAY: ChatColor;
   static DARK_GREEN: ChatColor;
   static DARK_PURPLE: ChatColor;
   static DARK_RED: ChatColor;
   static GOLD: ChatColor;
   static GRAY: ChatColor;
   static GREEN: ChatColor;
   static ITALIC: ChatColor;
   static LIGHT_PURPLE: ChatColor;
   static MAGIC: ChatColor;
   static RED: ChatColor;
   static RESET: ChatColor;
   static STRIKETHROUGH: ChatColor;
   static UNDERLINE: ChatColor;
   static WHITE: ChatColor;
   static YELLOW: ChatColor;
   asBungee (): ChatColor;
   static getByChar (code: char): ChatColor;
   static getByChar (code: string): ChatColor;
   getChar (): char;
   static getLastColors (input: string): string;
   isColor (): boolean;
   isFormat (): boolean;
   static stripColor (input: string): string;
   toString (): string;
   static translateAlternateColorCodes (alt_color_char: char, text_to_translate: string): string;
   static valueOf (name: string): ChatColor;
   static values (): ChatColor[];
}
export class ChatPaginator extends JavaObject {
   constructor ();
   static paginate (unpaginated_string: string, page_number: number): ChatPaginator$ChatPage;
   static paginate (
      unpaginated_string: string,
      page_number: number,
      line_length: number,
      page_height: number
   ): ChatPaginator$ChatPage;
   static wordWrap (raw_string: string, line_length: number): string[];
}
export class ChatPaginator$ChatPage extends JavaObject {
   constructor (lines: string[], page_number: number, total_pages: number);
   getLines (): string[];
   getPageNumber (): number;
   getTotalPages (): number;
}
export interface Chest extends Container, LootableBlockInventory, Lidded {
   getBlockInventory(): Inventory;
}
export interface Chest extends Directional, Waterlogged {
   getType(): Chest$Type;
   setType(type: Chest$Type): void;
}
export class Chest extends DirectionalContainer {
   constructor ();
   constructor (direction: BlockFace);
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Chest;
}
export class Chest$Type {
   static LEFT: Chest$Type;
   static RIGHT: Chest$Type;
   static SINGLE: Chest$Type;
   static valueOf (name: string): Chest$Type;
   static values (): Chest$Type[];
}
export interface ChestedHorse extends AbstractHorse {
   isCarryingChest(): boolean;
   setCarryingChest(chest: boolean): void;
}
export interface Chicken extends Animals {}
export interface Chunk {
   addPluginChunkTicket(plugin: Plugin): boolean;
   contains(block: BlockData): boolean;
   getBlock(x: number, y: number, z: number): Block;
   getChunkKey(): number;
   static getChunkKey(x: number, z: number): number;
   static getChunkKey(loc: Location): number;
   getChunkSnapshot(): ChunkSnapshot;
   getChunkSnapshot(
      include_maxblocky: boolean,
      include_biome: boolean,
      include_biome_temp_rain: boolean
   ): ChunkSnapshot;
   getEntities(): Entity[];
   getInhabitedTime(): number;
   getPluginChunkTickets(): Collection<Plugin>;
   getTileEntities(): BlockState[];
   getTileEntities(use_snapshot: boolean): BlockState[];
   getWorld(): World;
   getX(): number;
   getZ(): number;
   isForceLoaded(): boolean;
   isLoaded(): boolean;
   isSlimeChunk(): boolean;
   load(): boolean;
   load(generate: boolean): boolean;
   removePluginChunkTicket(plugin: Plugin): boolean;
   setForceLoaded(forced: boolean): void;
   setInhabitedTime(ticks: number): void;
   unload(): boolean;
   unload(save: boolean): boolean;
}
export class ChunkEvent extends WorldEvent {
   constructor (chunk: Chunk);
   getChunk (): Chunk;
}
export class ChunkGenerator extends JavaObject {
   constructor ();
   canSpawn (world: World, x: number, z: number): boolean;
   createChunkData (world: World): ChunkGenerator$ChunkData;
   createVanillaChunkData (world: World, x: number, z: number): ChunkGenerator$ChunkData;
   generateChunkData (
      world: World,
      random: Random,
      x: number,
      z: number,
      biome: ChunkGenerator$BiomeGrid
   ): ChunkGenerator$ChunkData;
   getDefaultPopulators (world: World): List<BlockPopulator>;
   getFixedSpawnLocation (world: World, random: Random): Location;
   isParallelCapable (): boolean;
   shouldGenerateCaves (): boolean;
   shouldGenerateDecorations (): boolean;
   shouldGenerateMobs (): boolean;
   shouldGenerateStructures (): boolean;
}
export interface ChunkGenerator$BiomeGrid {
   getBiome(x: number, z: number): Biome;
   getBiome(x: number, y: number, z: number): Biome;
   setBiome(x: number, y: number, z: number, bio: Biome): void;
   setBiome(x: number, z: number, bio: Biome): void;
}
export interface ChunkGenerator$ChunkData {
   getBlockData(x: number, y: number, z: number): BlockData;
   getData(x: number, y: number, z: number): number;
   getMaxHeight(): number;
   getType(x: number, y: number, z: number): Material;
   getTypeAndData(x: number, y: number, z: number): MaterialData;
   setBlock(x: number, y: number, z: number, block_data: BlockData): void;
   setBlock(x: number, y: number, z: number, material: Material): void;
   setBlock(x: number, y: number, z: number, material: MaterialData): void;
   setRegion(
      x_min: number,
      y_min: number,
      z_min: number,
      x_max: number,
      y_max: number,
      z_max: number,
      block_data: BlockData
   ): void;
   setRegion(
      x_min: number,
      y_min: number,
      z_min: number,
      x_max: number,
      y_max: number,
      z_max: number,
      material: Material
   ): void;
   setRegion(
      x_min: number,
      y_min: number,
      z_min: number,
      x_max: number,
      y_max: number,
      z_max: number,
      material: MaterialData
   ): void;
}
export class ChunkLoadEvent extends ChunkEvent {
   constructor (chunk: Chunk, new_chunk: boolean);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isNewChunk (): boolean;
}
export class ChunkPopulateEvent extends ChunkEvent {
   constructor (chunk: Chunk);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export interface ChunkSnapshot {
   contains(block: BlockData): boolean;
   getBiome(x: number, z: number): Biome;
   getBiome(x: number, y: number, z: number): Biome;
   getBlockData(x: number, y: number, z: number): BlockData;
   getBlockEmittedLight(x: number, y: number, z: number): number;
   getBlockSkyLight(x: number, y: number, z: number): number;
   getBlockType(x: number, y: number, z: number): Material;
   getCaptureFullTime(): number;
   getData(x: number, y: number, z: number): number;
   getHighestBlockYAt(x: number, z: number): number;
   getRawBiomeTemperature(x: number, z: number): number;
   getRawBiomeTemperature(x: number, y: number, z: number): number;
   getWorldName(): string;
   getX(): number;
   getZ(): number;
   isSectionEmpty(sy: number): boolean;
}
export class ChunkUnloadEvent extends ChunkEvent {
   constructor (chunk: Chunk);
   constructor (chunk: Chunk, save: boolean);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isSaveChunk (): boolean;
   setSaveChunk (save_chunk: boolean): void;
}
export interface ClassDefiner {
   defineClass(parent_loader: ClassLoader, name: string, data: byte[]): Class;
   static getInstance(): ClassDefiner;
   isBypassAccessChecks(): boolean;
}
export class ClickType {
   static CONTROL_DROP: ClickType;
   static CREATIVE: ClickType;
   static DOUBLE_CLICK: ClickType;
   static DROP: ClickType;
   static LEFT: ClickType;
   static MIDDLE: ClickType;
   static NUMBER_KEY: ClickType;
   static RIGHT: ClickType;
   static SHIFT_LEFT: ClickType;
   static SHIFT_RIGHT: ClickType;
   static SWAP_OFFHAND: ClickType;
   static UNKNOWN: ClickType;
   static WINDOW_BORDER_LEFT: ClickType;
   static WINDOW_BORDER_RIGHT: ClickType;
   isCreativeAction (): boolean;
   isKeyboardClick (): boolean;
   isLeftClick (): boolean;
   isRightClick (): boolean;
   isShiftClick (): boolean;
   static valueOf (name: string): ClickType;
   static values (): ClickType[];
}
export class ClientOption<T> extends JavaObject {
   getType (): Class<T>;
}
export class ClientOption$ChatVisibility {
   static FULL: ClientOption$ChatVisibility;
   static HIDDEN: ClientOption$ChatVisibility;
   static SYSTEM: ClientOption$ChatVisibility;
   static UNKNOWN: ClientOption$ChatVisibility;
   static valueOf (name: string): ClientOption$ChatVisibility;
   static values (): ClientOption$ChatVisibility[];
}
export class Coal extends MaterialData {
   constructor ();
   constructor (type: CoalType);
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Coal;
   getType (): CoalType;
   setType (type: CoalType): void;
   toString (): string;
}
export class CoalType {
   static CHARCOAL: CoalType;
   static COAL: CoalType;
   static getByData (data: number): CoalType;
   getData (): number;
   static valueOf (name: string): CoalType;
   static values (): CoalType[];
}
export interface Cocoa extends Ageable, Directional {}
export class CocoaPlant extends MaterialData {
   constructor ();
   constructor (sz: CocoaPlant$CocoaPlantSize);
   constructor (sz: CocoaPlant$CocoaPlantSize, dir: BlockFace);
   constructor (type: Material, data: number);
   clone (): CocoaPlant;
   getAttachedFace (): BlockFace;
   getFacing (): BlockFace;
   getSize (): CocoaPlant$CocoaPlantSize;
   setFacingDirection (face: BlockFace): void;
   setSize (sz: CocoaPlant$CocoaPlantSize): void;
   toString (): string;
}
export class CocoaPlant$CocoaPlantSize {
   static LARGE: CocoaPlant$CocoaPlantSize;
   static MEDIUM: CocoaPlant$CocoaPlantSize;
   static SMALL: CocoaPlant$CocoaPlantSize;
   static valueOf (name: string): CocoaPlant$CocoaPlantSize;
   static values (): CocoaPlant$CocoaPlantSize[];
}
export interface Cod extends Fish {}
export class Color extends JavaObject implements ConfigurationSerializable {
   asBGR (): number;
   asRGB (): number;
   static deserialize (map: Map<string, JavaObject>): Color;
   equals (o: JavaObject): boolean;
   static fromBGR (bgr: number): Color;
   static fromBGR (blue: number, green: number, red: number): Color;
   static fromRGB (rgb: number): Color;
   static fromRGB (red: number, green: number, blue: number): Color;
   getBlue (): number;
   getGreen (): number;
   getRed (): number;
   hashCode (): number;
   mixColors (...colors: Color): Color;
   mixDyes (...colors: DyeColor): Color;
   serialize (): Map<string, JavaObject>;
   setBlue (blue: number): Color;
   setGreen (green: number): Color;
   setRed (red: number): Color;
   toString (): string;
}
export interface Colorable {
   getColor(): DyeColor;
   setColor(color: DyeColor): void;
}
export class Command extends JavaObject {
   constructor (name: string);
   constructor (name: string, description: string, usage_message: string, aliases: List<string>);
   static broadcastCommandMessage (source: CommandSender, message: string): void;
   static broadcastCommandMessage (source: CommandSender, message: string, send_to_source: boolean): void;
   execute (sender: CommandSender, command_label: string, args: string[]): boolean;
   getAliases (): List<string>;
   getDescription (): string;
   getLabel (): string;
   getName (): string;
   getPermission (): string;
   getPermissionMessage (): string;
   getTimingName (): string;
   getUsage (): string;
   isRegistered (): boolean;
   register (command_map: CommandMap): boolean;
   setAliases (aliases: List<string>): Command;
   setDescription (description: string): Command;
   setLabel (name: string): boolean;
   setName (name: string): boolean;
   setPermission (permission: string): void;
   setPermissionMessage (permission_message: string): Command;
   setUsage (usage: string): Command;
   tabComplete (sender: CommandSender, alias: string, args: string[]): List<string>;
   tabComplete (sender: CommandSender, alias: string, args: string[], location: Location): List<string>;
   testPermission (target: CommandSender): boolean;
   testPermissionSilent (target: CommandSender): boolean;
   toString (): string;
   unregister (command_map: CommandMap): boolean;
}
export class Command extends MaterialData {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Command;
   isPowered (): boolean;
   setPowered (bool: boolean): void;
   toString (): string;
}
export interface CommandBlock extends TileState {
   getCommand(): string;
   getName(): string;
   setCommand(command: string): void;
   setName(name: string): void;
}
export interface CommandBlock extends Directional {
   isConditional(): boolean;
   setConditional(conditional: boolean): void;
}
export class CommandException extends RuntimeException {
   constructor ();
   constructor (msg: string);
   constructor (msg: string, cause: Throwable);
}
export interface CommandExecutor {
   onCommand(sender: CommandSender, command: Command, label: string, args: string[]): boolean;
}
export interface CommandMap {
   clearCommands(): void;
   dispatch(sender: CommandSender, cmd_line: string): boolean;
   getCommand(name: string): Command;
   getKnownCommands(): Map<string, Command>;
   register(label: string, fallback_prefix: string, command: Command): boolean;
   register(fallback_prefix: string, command: Command): boolean;
   registerAll(fallback_prefix: string, commands: List<Command>): void;
   tabComplete(sender: CommandSender, cmd_line: string): List<string>;
   tabComplete(sender: CommandSender, cmd_line: string, location: Location): List<string>;
}
export interface CommandMinecart extends Minecart {
   getCommand(): string;
   setCommand(command: string): void;
   setName(name: string): void;
}
export class CommandPermissions extends JavaObject {
   static registerPermissions (parent: Permission): Permission;
}
export interface CommandSender extends Permissible {
   getName(): string;
   getServer(): Server;
   sendMessage(message: string): void;
   sendMessage(messages: string[]): void;
   sendMessage(component: BaseComponent): void;
   sendMessage(...components: BaseComponent): void;
   spigot(): CommandSender$Spigot;
}
export class CommandSender$Spigot extends JavaObject {
   constructor ();
   sendMessage (component: BaseComponent): void;
   sendMessage (...components: BaseComponent): void;
}
export interface Comparator extends TileState {}
export interface Comparator extends Directional, Powerable {
   getMode(): Comparator$Mode;
   setMode(mode: Comparator$Mode): void;
}
export class Comparator extends MaterialData {
   constructor ();
   constructor (facing_direction: BlockFace);
   constructor (facing_direction: BlockFace, is_subtraction: boolean);
   constructor (facing_direction: BlockFace, is_subtraction: boolean, state: boolean);
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Comparator;
   getFacing (): BlockFace;
   isBeingPowered (): boolean;
   isPowered (): boolean;
   isSubtractionMode (): boolean;
   setFacingDirection (face: BlockFace): void;
   setSubtractionMode (is_subtraction: boolean): void;
   toString (): string;
}
export class Comparator$Mode {
   static COMPARE: Comparator$Mode;
   static SUBTRACT: Comparator$Mode;
   static valueOf (name: string): Comparator$Mode;
   static values (): Comparator$Mode[];
}
export interface CompassMeta extends ItemMeta {
   clone(): CompassMeta;
   getLodestone(): Location;
   hasLodestone(): boolean;
   isLodestoneTracked(): boolean;
   setLodestone(lodestone: Location): void;
   setLodestoneTracked(tracked: boolean): void;
}
export interface ComplexEntityPart extends Entity {
   getParent(): ComplexLivingEntity;
}
export interface ComplexLivingEntity extends LivingEntity {
   getParts(): Set<ComplexEntityPart>;
}
export interface ComplexRecipe extends Recipe, Keyed {}
export interface Conduit extends TileState {}
export interface Configuration extends ConfigurationSection {
   addDefault(path: string, value: JavaObject): void;
   addDefaults(defaults: Map<string, JavaObject>): void;
   addDefaults(defaults: Configuration): void;
   getDefaults(): Configuration;
   options(): ConfigurationOptions;
   setDefaults(defaults: Configuration): void;
}
export class ConfigurationOptions extends JavaObject {
   constructor (configuration: Configuration);
   configuration (): Configuration;
   copyDefaults (): boolean;
   copyDefaults (value: boolean): ConfigurationOptions;
   pathSeparator (): char;
   pathSeparator (value: char): ConfigurationOptions;
}
export interface ConfigurationSection {
   addDefault(path: string, value: JavaObject): void;
   contains(path: string): boolean;
   contains(path: string, ignore_default: boolean): boolean;
   createSection(path: string): ConfigurationSection;
   createSection(path: string, map: Map<X, X>): ConfigurationSection;
   get(path: string): JavaObject;
   get(path: string, def: JavaObject): JavaObject;
   getBoolean(path: string): boolean;
   getBoolean(path: string, def: boolean): boolean;
   getBooleanList(path: string): List<Boolean>;
   getByteList(path: string): List<Byte>;
   getCharacterList(path: string): List<Character>;
   getColor(path: string): Color;
   getColor(path: string, def: Color): Color;
   getConfigurationSection(path: string): ConfigurationSection;
   getCurrentPath(): string;
   getDefaultSection(): ConfigurationSection;
   getDouble(path: string): number;
   getDouble(path: string, def: number): number;
   getDoubleList(path: string): List<Double>;
   getFloatList(path: string): List<Float>;
   getInt(path: string): number;
   getInt(path: string, def: number): number;
   getIntegerList(path: string): List<Integer>;
   getItemStack(path: string): ItemStack;
   getItemStack(path: string, def: ItemStack): ItemStack;
   getKeys(deep: boolean): Set<string>;
   getList(path: string): List;
   getList(path: string, def: List): List;
   getLocation(path: string): Location;
   getLocation(path: string, def: Location): Location;
   getLong(path: string): number;
   getLong(path: string, def: number): number;
   getLongList(path: string): List<Long>;
   getMapList(path: string): List<Map<X, X>>;
   getName(): string;
   getObject<T>(path: string, clazz: Class<T>): T;
   getObject<T>(path: string, clazz: Class<T>, def: T): T;
   getOfflinePlayer(path: string): OfflinePlayer;
   getOfflinePlayer(path: string, def: OfflinePlayer): OfflinePlayer;
   getParent(): ConfigurationSection;
   getRoot(): Configuration;
   getSerializable<T extends ConfigurationSerializable>(path: string, clazz: Class<T>): T;
   getSerializable<T extends ConfigurationSerializable>(path: string, clazz: Class<T>, def: T): T;
   getShortList(path: string): List<Short>;
   getString(path: string): string;
   getString(path: string, def: string): string;
   getStringList(path: string): List<string>;
   getValues(deep: boolean): Map<string, JavaObject>;
   getVector(path: string): Vector;
   getVector(path: string, def: Vector): Vector;
   isBoolean(path: string): boolean;
   isColor(path: string): boolean;
   isConfigurationSection(path: string): boolean;
   isDouble(path: string): boolean;
   isInt(path: string): boolean;
   isItemStack(path: string): boolean;
   isList(path: string): boolean;
   isLocation(path: string): boolean;
   isLong(path: string): boolean;
   isOfflinePlayer(path: string): boolean;
   isSet(path: string): boolean;
   isString(path: string): boolean;
   isVector(path: string): boolean;
   set(path: string, value: JavaObject): void;
}
export interface ConfigurationSerializable {
   serialize(): Map<string, JavaObject>;
}
export class ConfigurationSerialization extends JavaObject {
   constructor (clazz: Class<ConfigurationSerializable>);
   deserialize (args: Map<string, X>): ConfigurationSerializable;
   static deserializeObject (args: Map<string, X>): ConfigurationSerializable;
   static deserializeObject (args: Map<string, X>, clazz: Class<ConfigurationSerializable>): ConfigurationSerializable;
   deserializeViaCtor (ctor: Constructor<ConfigurationSerializable>, args: Map<string, X>): ConfigurationSerializable;
   deserializeViaMethod (method: Method, args: Map<string, X>): ConfigurationSerializable;
   static getAlias (clazz: Class<ConfigurationSerializable>): string;
   static getClassByAlias (alias: string): Class<ConfigurationSerializable>;
   getConstructor (): Constructor<ConfigurationSerializable>;
   getMethod (name: string, is_static: boolean): Method;
   static registerClass (clazz: Class<ConfigurationSerializable>): void;
   static registerClass (clazz: Class<ConfigurationSerializable>, alias: string): void;
   static unregisterClass (clazz: Class<ConfigurationSerializable>): void;
   static unregisterClass (alias: string): void;
}
export interface ConsoleCommandSender extends CommandSender, Conversable {}
export interface Consumer<T> {
   accept(t: T): void;
}
export interface Container extends TileState, BlockInventoryHolder, Lockable, Nameable {
   getInventory(): Inventory;
   getSnapshotInventory(): Inventory;
}
export interface Conversable {
   abandonConversation(conversation: Conversation): void;
   abandonConversation(conversation: Conversation, details: ConversationAbandonedEvent): void;
   acceptConversationInput(input: string): void;
   beginConversation(conversation: Conversation): boolean;
   isConversing(): boolean;
   sendRawMessage(message: string): void;
}
export class Conversation extends JavaObject {
   constructor (plugin: Plugin, for_whom: Conversable, first_prompt: Prompt);
   constructor (
      plugin: Plugin,
      for_whom: Conversable,
      first_prompt: Prompt,
      initial_session_data: Map<JavaObject, JavaObject>
   );
   abandon (): void;
   abandon (details: ConversationAbandonedEvent): void;
   acceptInput (input: string): void;
   addConversationAbandonedListener (listener: ConversationAbandonedListener): void;
   begin (): void;
   getCancellers (): List<ConversationCanceller>;
   getContext (): ConversationContext;
   getForWhom (): Conversable;
   getPrefix (): ConversationPrefix;
   getState (): Conversation$ConversationState;
   isLocalEchoEnabled (): boolean;
   isModal (): boolean;
   outputNextPrompt (): void;
   removeConversationAbandonedListener (listener: ConversationAbandonedListener): void;
   setLocalEchoEnabled (local_echo_enabled: boolean): void;
}
export class Conversation$ConversationState {
   static ABANDONED: Conversation$ConversationState;
   static STARTED: Conversation$ConversationState;
   static UNSTARTED: Conversation$ConversationState;
   static valueOf (name: string): Conversation$ConversationState;
   static values (): Conversation$ConversationState[];
}
export class ConversationAbandonedEvent extends EventObject {
   constructor (conversation: Conversation);
   constructor (conversation: Conversation, canceller: ConversationCanceller);
   getCanceller (): ConversationCanceller;
   getContext (): ConversationContext;
   gracefulExit (): boolean;
}
export interface ConversationAbandonedListener extends EventListener {
   conversationAbandoned(abandoned_event: ConversationAbandonedEvent): void;
}
export interface ConversationCanceller extends Cloneable {
   cancelBasedOnInput(context: ConversationContext, input: string): boolean;
   clone(): ConversationCanceller;
   setConversation(conversation: Conversation): void;
}
export class ConversationContext extends JavaObject {
   constructor (plugin: Plugin, for_whom: Conversable, initial_session_data: Map<JavaObject, JavaObject>);
   getAllSessionData (): Map<JavaObject, JavaObject>;
   getForWhom (): Conversable;
   getPlugin (): Plugin;
   getSessionData (key: JavaObject): JavaObject;
   setSessionData (key: JavaObject, value: JavaObject): void;
}
export class ConversationFactory extends JavaObject {
   constructor (plugin: Plugin);
   addConversationAbandonedListener (listener: ConversationAbandonedListener): ConversationFactory;
   buildConversation (for_whom: Conversable): Conversation;
   thatExcludesNonPlayersWithMessage (player_only_message: string): ConversationFactory;
   withConversationCanceller (canceller: ConversationCanceller): ConversationFactory;
   withEscapeSequence (escape_sequence: string): ConversationFactory;
   withFirstPrompt (first_prompt: Prompt): ConversationFactory;
   withInitialSessionData (initial_session_data: Map<JavaObject, JavaObject>): ConversationFactory;
   withLocalEcho (local_echo_enabled: boolean): ConversationFactory;
   withModality (modal: boolean): ConversationFactory;
   withPrefix (prefix: ConversationPrefix): ConversationFactory;
   withTimeout (timeout_seconds: number): ConversationFactory;
}
export interface ConversationPrefix {
   getPrefix(context: ConversationContext): string;
}
export class CookingRecipe<T extends CookingRecipe> extends JavaObject implements Recipe, Keyed {
   constructor (key: NamespacedKey, result: ItemStack, input: RecipeChoice, experience: number, cooking_time: number);
   constructor (key: NamespacedKey, result: ItemStack, source: Material, experience: number, cooking_time: number);
   getCookingTime (): number;
   getExperience (): number;
   getGroup (): string;
   getInput (): ItemStack;
   getInputChoice (): RecipeChoice;
   getKey (): NamespacedKey;
   getResult (): ItemStack;
   setCookingTime (cooking_time: number): void;
   setExperience (experience: number): void;
   setGroup (group: string): void;
   setInput (input: Material): CookingRecipe;
   setInputChoice (input: RecipeChoice): T;
}
export interface CoralWallFan extends Directional, Waterlogged {}
export class Counter<T> extends ForwardingMap<T, Long> {
   constructor ();
   decrement (key: T): number;
   decrement (key: T, amount: number): number;
   delegate (): Map<T, Long>;
   getCount (key: T): number;
   increment (key: T): number;
   increment (key: T, amount: number): number;
}
export interface Cow extends Animals {}
export interface CraftingInventory extends Inventory {
   getMatrix(): ItemStack[];
   getRecipe(): Recipe;
   getResult(): ItemStack;
   setMatrix(contents: ItemStack[]): void;
   setResult(new_result: ItemStack): void;
}
export class CraftItemEvent extends InventoryClickEvent {
   constructor (
      recipe: Recipe,
      what: InventoryView,
      type: InventoryType$SlotType,
      slot: number,
      click: ClickType,
      action: InventoryAction
   );
   constructor (
      recipe: Recipe,
      what: InventoryView,
      type: InventoryType$SlotType,
      slot: number,
      click: ClickType,
      action: InventoryAction,
      key: number
   );
   getInventory (): CraftingInventory;
   getRecipe (): Recipe;
}
export interface Creature extends Mob {}
export interface CreatureSpawner extends TileState {
   getCreatureTypeName(): string;
   getDelay(): number;
   getMaxNearbyEntities(): number;
   getMaxSpawnDelay(): number;
   getMinSpawnDelay(): number;
   getRequiredPlayerRange(): number;
   getSpawnCount(): number;
   getSpawnedType(): EntityType;
   getSpawnRange(): number;
   isActivated(): boolean;
   resetTimer(): void;
   setCreatureTypeByName(creature_type: string): void;
   setDelay(delay: number): void;
   setMaxNearbyEntities(max_nearby_entities: number): void;
   setMaxSpawnDelay(delay: number): void;
   setMinSpawnDelay(delay: number): void;
   setRequiredPlayerRange(required_player_range: number): void;
   setSpawnCount(spawn_count: number): void;
   setSpawnedType(creature_type: EntityType): void;
   setSpawnRange(spawn_range: number): void;
}
export class CreatureSpawnEvent extends EntitySpawnEvent {
   constructor (spawnee: LivingEntity, spawn_reason: CreatureSpawnEvent$SpawnReason);
   getEntity (): LivingEntity;
   getSpawnReason (): CreatureSpawnEvent$SpawnReason;
}
export class CreatureSpawnEvent$SpawnReason {
   static BEEHIVE: CreatureSpawnEvent$SpawnReason;
   static BREEDING: CreatureSpawnEvent$SpawnReason;
   static BUILD_IRONGOLEM: CreatureSpawnEvent$SpawnReason;
   static BUILD_SNOWMAN: CreatureSpawnEvent$SpawnReason;
   static BUILD_WITHER: CreatureSpawnEvent$SpawnReason;
   static CHUNK_GEN: CreatureSpawnEvent$SpawnReason;
   static CURED: CreatureSpawnEvent$SpawnReason;
   static CUSTOM: CreatureSpawnEvent$SpawnReason;
   static DEFAULT: CreatureSpawnEvent$SpawnReason;
   static DISPENSE_EGG: CreatureSpawnEvent$SpawnReason;
   static DROWNED: CreatureSpawnEvent$SpawnReason;
   static EGG: CreatureSpawnEvent$SpawnReason;
   static ENDER_PEARL: CreatureSpawnEvent$SpawnReason;
   static EXPLOSION: CreatureSpawnEvent$SpawnReason;
   static INFECTION: CreatureSpawnEvent$SpawnReason;
   static JOCKEY: CreatureSpawnEvent$SpawnReason;
   static LIGHTNING: CreatureSpawnEvent$SpawnReason;
   static MOUNT: CreatureSpawnEvent$SpawnReason;
   static NATURAL: CreatureSpawnEvent$SpawnReason;
   static NETHER_PORTAL: CreatureSpawnEvent$SpawnReason;
   static OCELOT_BABY: CreatureSpawnEvent$SpawnReason;
   static PATROL: CreatureSpawnEvent$SpawnReason;
   static RAID: CreatureSpawnEvent$SpawnReason;
   static REINFORCEMENTS: CreatureSpawnEvent$SpawnReason;
   static SHEARED: CreatureSpawnEvent$SpawnReason;
   static SHOULDER_ENTITY: CreatureSpawnEvent$SpawnReason;
   static SILVERFISH_BLOCK: CreatureSpawnEvent$SpawnReason;
   static SLIME_SPLIT: CreatureSpawnEvent$SpawnReason;
   static SPAWNER: CreatureSpawnEvent$SpawnReason;
   static SPAWNER_EGG: CreatureSpawnEvent$SpawnReason;
   static TRAP: CreatureSpawnEvent$SpawnReason;
   static VILLAGE_DEFENSE: CreatureSpawnEvent$SpawnReason;
   static VILLAGE_INVASION: CreatureSpawnEvent$SpawnReason;
   static valueOf (name: string): CreatureSpawnEvent$SpawnReason;
   static values (): CreatureSpawnEvent$SpawnReason[];
}
export interface Creeper extends Monster {
   explode(): void;
   getExplosionRadius(): number;
   getFuseTicks(): number;
   getMaxFuseTicks(): number;
   ignite(): void;
   isIgnited(): boolean;
   isPowered(): boolean;
   setExplosionRadius(radius: number): void;
   setIgnited(ignited: boolean): void;
   setMaxFuseTicks(ticks: number): void;
   setPowered(value: boolean): void;
}
export class CreeperIgniteEvent extends EntityEvent implements Cancellable {
   constructor (creeper: Creeper, ignited: boolean);
   getEntity (): Creeper;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   isIgnited (): boolean;
   setCancelled (cancel: boolean): void;
   setIgnited (ignited: boolean): void;
}
export class CreeperPowerEvent extends EntityEvent implements Cancellable {
   constructor (creeper: Creeper, bolt: LightningStrike, cause: CreeperPowerEvent$PowerCause);
   constructor (creeper: Creeper, cause: CreeperPowerEvent$PowerCause);
   getCause (): CreeperPowerEvent$PowerCause;
   getEntity (): Creeper;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getLightning (): LightningStrike;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class CreeperPowerEvent$PowerCause {
   static LIGHTNING: CreeperPowerEvent$PowerCause;
   static SET_OFF: CreeperPowerEvent$PowerCause;
   static SET_ON: CreeperPowerEvent$PowerCause;
   static valueOf (name: string): CreeperPowerEvent$PowerCause;
   static values (): CreeperPowerEvent$PowerCause[];
}
export class Criterias extends JavaObject {
   static DEATH (undefined): string;
   static DEATH (undefined): string;
   static DEATH (undefined): string;
}
export class Crops extends MaterialData {
   constructor ();
   constructor (state: CropState);
   constructor (type: Material);
   constructor (type: Material, data: number);
   constructor (type: Material, state: CropState);
   clone (): Crops;
   getState (): CropState;
   setState (state: CropState): void;
   toString (): string;
}
export class CropState {
   static GERMINATED: CropState;
   static MEDIUM: CropState;
   static RIPE: CropState;
   static SEEDED: CropState;
   static SMALL: CropState;
   static TALL: CropState;
   static VERY_SMALL: CropState;
   static VERY_TALL: CropState;
   static getByData (data: number): CropState;
   getData (): number;
   static valueOf (name: string): CropState;
   static values (): CropState[];
}
export interface CrossbowMeta extends ItemMeta {
   addChargedProjectile(item: ItemStack): void;
   getChargedProjectiles(): List<ItemStack>;
   hasChargedProjectiles(): boolean;
   setChargedProjectiles(projectiles: List<ItemStack>): void;
}
export interface CustomItemTagContainer {
   getAdapterContext(): ItemTagAdapterContext;
   getCustomTag<T, Z>(key: NamespacedKey, type: ItemTagType<T, Z>): Z;
   hasCustomTag<T, Z>(key: NamespacedKey, type: ItemTagType<T, Z>): boolean;
   isEmpty(): boolean;
   removeCustomTag(key: NamespacedKey): void;
   setCustomTag<T, Z>(key: NamespacedKey, type: ItemTagType<T, Z>, value: Z): void;
}
export class CustomTimingsHandler extends JavaObject {
   constructor (name: string);
   startTiming (): void;
   stopTiming (): void;
}
export interface Damageable extends Entity {
   damage(amount: number): void;
   damage(amount: number, source: Entity): void;
   getAbsorptionAmount(): number;
   getHealth(): number;
   getMaxHealth(): number;
   resetMaxHealth(): void;
   setAbsorptionAmount(amount: number): void;
   setHealth(health: number): void;
   setMaxHealth(health: number): void;
}
export interface Damageable {
   clone(): Damageable;
   getDamage(): number;
   hasDamage(): boolean;
   setDamage(damage: number): void;
}
export interface DaylightDetector extends AnaloguePowerable {
   isInverted(): boolean;
   setInverted(inverted: boolean): void;
}
export interface DaylightDetector extends TileState {}
export class DefaultPermissions extends JavaObject {
   static registerCorePermissions (): void;
   static registerPermission (name: string, desc: string): Permission;
   static registerPermission (name: string, desc: string, parent: Permission): Permission;
   static registerPermission (name: string, desc: string, def: PermissionDefault): Permission;
   static registerPermission (
      name: string,
      desc: string,
      def: PermissionDefault,
      children: Map<string, Boolean>
   ): Permission;
   static registerPermission (
      name: string,
      desc: string,
      def: PermissionDefault,
      children: Map<string, Boolean>,
      parent: Permission
   ): Permission;
   static registerPermission (name: string, desc: string, def: PermissionDefault, parent: Permission): Permission;
   static registerPermission (perm: Permission): Permission;
   static registerPermission (perm: Permission, with_legacy: boolean): Permission;
   static registerPermission (perm: Permission, parent: Permission): Permission;
}
export class DetectorRail extends ExtendedRails {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): DetectorRail;
   isPressed (): boolean;
   setPressed (is_pressed: boolean): void;
}
export class Difficulty {
   static EASY: Difficulty;
   static HARD: Difficulty;
   static NORMAL: Difficulty;
   static PEACEFUL: Difficulty;
   static getByValue (value: number): Difficulty;
   getValue (): number;
   static valueOf (name: string): Difficulty;
   static values (): Difficulty[];
}
export class Diode extends MaterialData {
   constructor ();
   constructor (facing_direction: BlockFace);
   constructor (facing_direction: BlockFace, delay: number);
   constructor (facing_direction: BlockFace, delay: number, state: boolean);
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Diode;
   getDelay (): number;
   getFacing (): BlockFace;
   isPowered (): boolean;
   setDelay (delay: number): void;
   setFacingDirection (face: BlockFace): void;
   toString (): string;
}
export interface Directional extends BlockData {
   getFaces(): Set<BlockFace>;
   getFacing(): BlockFace;
   setFacing(facing: BlockFace): void;
}
export interface Directional {
   getFacing(): BlockFace;
   setFacingDirection(face: BlockFace): void;
}
export class DirectionalContainer extends MaterialData {
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): DirectionalContainer;
   getFacing (): BlockFace;
   setFacingDirection (face: BlockFace): void;
   toString (): string;
}
export interface Dispenser extends Directional {
   isTriggered(): boolean;
   setTriggered(triggered: boolean): void;
}
export interface Dispenser extends Container, Nameable, LootableBlockInventory {
   dispense(): boolean;
   getBlockProjectileSource(): BlockProjectileSource;
}
export class Dispenser extends FurnaceAndDispenser {
   constructor ();
   constructor (direction: BlockFace);
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Dispenser;
   getFacing (): BlockFace;
   setFacingDirection (face: BlockFace): void;
}
export class DisplaySlot {
   static BELOW_NAME: DisplaySlot;
   static PLAYER_LIST: DisplaySlot;
   static SIDEBAR: DisplaySlot;
   static valueOf (name: string): DisplaySlot;
   static values (): DisplaySlot[];
}
export interface Dolphin extends WaterMob {}
export interface Donkey extends ChestedHorse {}
export interface Door extends Bisected, Directional, Openable, Powerable {
   getHinge(): Door$Hinge;
   setHinge(hinge: Door$Hinge): void;
}
export class Door extends MaterialData {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, is_hinge_right: boolean);
   constructor (type: Material, data: number);
   constructor (type: Material, face: BlockFace);
   constructor (type: Material, face: BlockFace, is_open: boolean);
   constructor (species: TreeSpecies, is_hinge_right: boolean);
   constructor (species: TreeSpecies, face: BlockFace);
   constructor (species: TreeSpecies, face: BlockFace, is_open: boolean);
   clone (): Door;
   getFacing (): BlockFace;
   getHinge (): boolean;
   getHingeCorner (): BlockFace;
   static getWoodDoorOfSpecies (species: TreeSpecies): Material;
   isOpen (): boolean;
   isTopHalf (): boolean;
   setFacingDirection (face: BlockFace): void;
   setHinge (is_hinge_right: boolean): void;
   setOpen (is_open: boolean): void;
   setTopHalf (is_top_half: boolean): void;
   toString (): string;
}
export class Door$Hinge {
   static LEFT: Door$Hinge;
   static RIGHT: Door$Hinge;
   static valueOf (name: string): Door$Hinge;
   static values (): Door$Hinge[];
}
export class DoubleChest extends JavaObject implements InventoryHolder {
   constructor (chest: DoubleChestInventory);
   getInventory (): Inventory;
   getLeftSide (): InventoryHolder;
   getLeftSide (use_snapshot: boolean): InventoryHolder;
   getLocation (): Location;
   getRightSide (): InventoryHolder;
   getRightSide (use_snapshot: boolean): InventoryHolder;
   getWorld (): World;
   getX (): number;
   getY (): number;
   getZ (): number;
}
export interface DoubleChestInventory extends Inventory {
   getHolder(): DoubleChest;
   getLeftSide(): Inventory;
   getRightSide(): Inventory;
}
export interface DragonBattle {
   generateEndPortal(with_portals: boolean): boolean;
   getBossBar(): BossBar;
   getEnderDragon(): EnderDragon;
   getEndPortalLocation(): Location;
   getRespawnPhase(): DragonBattle$RespawnPhase;
   hasBeenPreviouslyKilled(): boolean;
   initiateRespawn(): void;
   resetCrystals(): void;
   setRespawnPhase(phase: DragonBattle$RespawnPhase): boolean;
}
export class DragonBattle$RespawnPhase {
   static END: DragonBattle$RespawnPhase;
   static NONE: DragonBattle$RespawnPhase;
   static PREPARING_TO_SUMMON_PILLARS: DragonBattle$RespawnPhase;
   static START: DragonBattle$RespawnPhase;
   static SUMMONING_DRAGON: DragonBattle$RespawnPhase;
   static SUMMONING_PILLARS: DragonBattle$RespawnPhase;
   static valueOf (name: string): DragonBattle$RespawnPhase;
   static values (): DragonBattle$RespawnPhase[];
}
export interface DragonFireball extends Fireball {}
export class DragType {
   static EVEN: DragType;
   static SINGLE: DragType;
   static valueOf (name: string): DragType;
   static values (): DragType[];
}
export interface Dropper extends Container, LootableBlockInventory {
   drop(): void;
}
export interface Drowned extends Zombie, RangedEntity {}
export class Dye extends MaterialData {
   constructor ();
   constructor (color: DyeColor);
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Dye;
   getColor (): DyeColor;
   setColor (color: DyeColor): void;
   toString (): string;
}
export class DyeColor {
   static BLACK: DyeColor;
   static BLUE: DyeColor;
   static BROWN: DyeColor;
   static CYAN: DyeColor;
   static GRAY: DyeColor;
   static GREEN: DyeColor;
   static LIGHT_BLUE: DyeColor;
   static LIGHT_GRAY: DyeColor;
   static LIME: DyeColor;
   static MAGENTA: DyeColor;
   static ORANGE: DyeColor;
   static PINK: DyeColor;
   static PURPLE: DyeColor;
   static RED: DyeColor;
   static WHITE: DyeColor;
   static YELLOW: DyeColor;
   static getByColor (color: Color): DyeColor;
   static getByDyeData (data: number): DyeColor;
   static getByFireworkColor (color: Color): DyeColor;
   static getByWoolData (data: number): DyeColor;
   getColor (): Color;
   getDyeData (): number;
   getFireworkColor (): Color;
   getWoolData (): number;
   static legacyValueOf (name: string): DyeColor;
   static valueOf (name: string): DyeColor;
   static values (): DyeColor[];
}
export class Effect {
   static ANVIL_BREAK: Effect;
   static ANVIL_LAND: Effect;
   static ANVIL_USE: Effect;
   static BAT_TAKEOFF: Effect;
   static BLAZE_SHOOT: Effect;
   static BOW_FIRE: Effect;
   static BREWING_STAND_BREW: Effect;
   static CHORUS_FLOWER_DEATH: Effect;
   static CHORUS_FLOWER_GROW: Effect;
   static CLICK1: Effect;
   static CLICK2: Effect;
   static DOOR_CLOSE: Effect;
   static DOOR_TOGGLE: Effect;
   static DRAGON_BREATH: Effect;
   static END_GATEWAY_SPAWN: Effect;
   static ENDER_SIGNAL: Effect;
   static ENDERDRAGON_GROWL: Effect;
   static ENDERDRAGON_SHOOT: Effect;
   static ENDEREYE_LAUNCH: Effect;
   static EXTINGUISH: Effect;
   static FENCE_GATE_CLOSE: Effect;
   static FENCE_GATE_TOGGLE: Effect;
   static FIREWORK_SHOOT: Effect;
   static GHAST_SHOOT: Effect;
   static GHAST_SHRIEK: Effect;
   static INSTANT_POTION_BREAK: Effect;
   static IRON_DOOR_CLOSE: Effect;
   static IRON_DOOR_TOGGLE: Effect;
   static IRON_TRAPDOOR_CLOSE: Effect;
   static IRON_TRAPDOOR_TOGGLE: Effect;
   static MOBSPAWNER_FLAMES: Effect;
   static PORTAL_TRAVEL: Effect;
   static POTION_BREAK: Effect;
   static RECORD_PLAY: Effect;
   static SMOKE: Effect;
   static STEP_SOUND: Effect;
   static TRAPDOOR_CLOSE: Effect;
   static TRAPDOOR_TOGGLE: Effect;
   static VILLAGER_PLANT_GROW: Effect;
   static WITHER_BREAK_BLOCK: Effect;
   static WITHER_SHOOT: Effect;
   static ZOMBIE_CHEW_IRON_DOOR: Effect;
   static ZOMBIE_CHEW_WOODEN_DOOR: Effect;
   static ZOMBIE_CONVERTED_VILLAGER: Effect;
   static ZOMBIE_DESTROY_DOOR: Effect;
   static ZOMBIE_INFECT: Effect;
   static getById (id: number): Effect;
   getData (): Class;
   getId (): number;
   getType (): Effect$Type;
   static valueOf (name: string): Effect;
   static values (): Effect[];
}
export class Effect$Type {
   static SOUND: Effect$Type;
   static VISUAL: Effect$Type;
   static valueOf (name: string): Effect$Type;
   static values (): Effect$Type[];
}
export interface Egg extends ThrowableProjectile {}
export interface ElderGuardian extends Guardian {}
export interface EnchantingInventory extends Inventory {
   getItem(): ItemStack;
   getSecondary(): ItemStack;
   setItem(item: ItemStack): void;
   setSecondary(item: ItemStack): void;
}
export interface EnchantingTable extends TileState, Nameable {}
export class EnchantItemEvent extends InventoryEvent implements Cancellable {
   constructor (
      enchanter: Player,
      view: InventoryView,
      table: Block,
      item: ItemStack,
      level: number,
      enchants: Map<Enchantment, Integer>,
      i: number
   );
   getEnchantBlock (): Block;
   getEnchanter (): Player;
   getEnchantsToAdd (): Map<Enchantment, Integer>;
   getExpLevelCost (): number;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getItem (): ItemStack;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setExpLevelCost (level: number): void;
   whichButton (): number;
}
export class Enchantment extends JavaObject implements Keyed {
   constructor (key: NamespacedKey);
   canEnchantItem (item: ItemStack): boolean;
   conflictsWith (other: Enchantment): boolean;
   equals (obj: JavaObject): boolean;
   static getByKey (key: NamespacedKey): Enchantment;
   static getByName (name: string): Enchantment;
   getItemTarget (): EnchantmentTarget;
   getKey (): NamespacedKey;
   getMaxLevel (): number;
   getName (): string;
   getStartLevel (): number;
   hashCode (): number;
   static isAcceptingRegistrations (): boolean;
   isCursed (): boolean;
   isTreasure (): boolean;
   static registerEnchantment (enchantment: Enchantment): void;
   static stopAcceptingRegistrations (): void;
   toString (): string;
   static values (): Enchantment[];
}
export class EnchantmentOffer extends JavaObject {
   constructor (enchantment: Enchantment, enchantment_level: number, cost: number);
   getCost (): number;
   getEnchantment (): Enchantment;
   getEnchantmentLevel (): number;
   setCost (cost: number): void;
   setEnchantment (enchantment: Enchantment): void;
   setEnchantmentLevel (enchantment_level: number): void;
}
export interface EnchantmentStorageMeta extends ItemMeta {
   addStoredEnchant(ench: Enchantment, level: number, ignore_level_restriction: boolean): boolean;
   clone(): EnchantmentStorageMeta;
   getStoredEnchantLevel(ench: Enchantment): number;
   getStoredEnchants(): Map<Enchantment, Integer>;
   hasConflictingStoredEnchant(ench: Enchantment): boolean;
   hasStoredEnchant(ench: Enchantment): boolean;
   hasStoredEnchants(): boolean;
   removeStoredEnchant(ench: Enchantment): boolean;
}
export class EnchantmentTarget {
   static ALL: EnchantmentTarget;
   static ARMOR: EnchantmentTarget;
   static ARMOR_FEET: EnchantmentTarget;
   static ARMOR_HEAD: EnchantmentTarget;
   static ARMOR_LEGS: EnchantmentTarget;
   static ARMOR_TORSO: EnchantmentTarget;
   static BOW: EnchantmentTarget;
   static BREAKABLE: EnchantmentTarget;
   static CROSSBOW: EnchantmentTarget;
   static FISHING_ROD: EnchantmentTarget;
   static TOOL: EnchantmentTarget;
   static TRIDENT: EnchantmentTarget;
   static VANISHABLE: EnchantmentTarget;
   static WEAPON: EnchantmentTarget;
   static WEARABLE: EnchantmentTarget;
   includes (item: ItemStack): boolean;
   includes (item: Material): boolean;
   static valueOf (name: string): EnchantmentTarget;
   static values (): EnchantmentTarget[];
}
export class EnchantmentWrapper extends Enchantment {
   constructor (name: string);
   canEnchantItem (item: ItemStack): boolean;
   conflictsWith (other: Enchantment): boolean;
   getEnchantment (): Enchantment;
   getItemTarget (): EnchantmentTarget;
   getMaxLevel (): number;
   getName (): string;
   getStartLevel (): number;
   isCursed (): boolean;
   isTreasure (): boolean;
}
export interface EnderChest extends Directional, Waterlogged {}
export interface EnderChest extends TileState {}
export class EnderChest extends DirectionalContainer {
   constructor ();
   constructor (direction: BlockFace);
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): EnderChest;
}
export interface EnderCrystal extends Entity {
   getBeamTarget(): Location;
   isShowingBottom(): boolean;
   setBeamTarget(location: Location): void;
   setShowingBottom(showing: boolean): void;
}
export interface EnderDragon extends ComplexLivingEntity, Boss, Mob {
   getDeathAnimationTicks(): number;
   getDragonBattle(): DragonBattle;
   getPhase(): EnderDragon$Phase;
   setPhase(phase: EnderDragon$Phase): void;
}
export class EnderDragon$Phase {
   static BREATH_ATTACK: EnderDragon$Phase;
   static CHARGE_PLAYER: EnderDragon$Phase;
   static CIRCLING: EnderDragon$Phase;
   static DYING: EnderDragon$Phase;
   static FLY_TO_PORTAL: EnderDragon$Phase;
   static HOVER: EnderDragon$Phase;
   static LAND_ON_PORTAL: EnderDragon$Phase;
   static LEAVE_PORTAL: EnderDragon$Phase;
   static ROAR_BEFORE_ATTACK: EnderDragon$Phase;
   static SEARCH_FOR_BREATH_ATTACK_TARGET: EnderDragon$Phase;
   static STRAFING: EnderDragon$Phase;
   static valueOf (name: string): EnderDragon$Phase;
   static values (): EnderDragon$Phase[];
}
export class EnderDragonChangePhaseEvent extends EntityEvent implements Cancellable {
   constructor (ender_dragon: EnderDragon, current_phase: EnderDragon$Phase, new_phase: EnderDragon$Phase);
   getCurrentPhase (): EnderDragon$Phase;
   getEntity (): EnderDragon;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getNewPhase (): EnderDragon$Phase;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setNewPhase (new_phase: EnderDragon$Phase): void;
}
export class EnderDragonFireballHitEvent extends EntityEvent implements Cancellable {
   constructor (fireball: DragonFireball, targets: Collection<LivingEntity>, area_effect_cloud: AreaEffectCloud);
   getAreaEffectCloud (): AreaEffectCloud;
   getEntity (): DragonFireball;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getTargets (): Collection<LivingEntity>;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EnderDragonFlameEvent extends EntityEvent implements Cancellable {
   constructor (ender_dragon: EnderDragon, area_effect_cloud: AreaEffectCloud);
   getAreaEffectCloud (): AreaEffectCloud;
   getEntity (): EnderDragon;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export interface EnderDragonPart extends ComplexEntityPart, Damageable {
   getParent(): EnderDragon;
}
export class EnderDragonShootFireballEvent extends EntityEvent implements Cancellable {
   constructor (entity: EnderDragon, fireball: DragonFireball);
   getEntity (): EnderDragon;
   getFireball (): DragonFireball;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export interface Enderman extends Monster {
   getCarriedBlock(): BlockData;
   getCarriedMaterial(): MaterialData;
   setCarriedBlock(block_data: BlockData): void;
   setCarriedMaterial(material: MaterialData): void;
   teleportRandomly(): boolean;
}
export class EndermanAttackPlayerEvent extends EntityEvent implements Cancellable {
   constructor (entity: Enderman, player: Player);
   getEntity (): Enderman;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getPlayer (): Player;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EndermanEscapeEvent extends EntityEvent implements Cancellable {
   constructor (entity: Enderman, reason: EndermanEscapeEvent$Reason);
   getEntity (): Enderman;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getReason (): EndermanEscapeEvent$Reason;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EndermanEscapeEvent$Reason {
   static CRITICAL_HIT: EndermanEscapeEvent$Reason;
   static DROWN: EndermanEscapeEvent$Reason;
   static INDIRECT: EndermanEscapeEvent$Reason;
   static RUNAWAY: EndermanEscapeEvent$Reason;
   static STARE: EndermanEscapeEvent$Reason;
   static valueOf (name: string): EndermanEscapeEvent$Reason;
   static values (): EndermanEscapeEvent$Reason[];
}
export interface Endermite extends Monster {
   isPlayerSpawned(): boolean;
   setPlayerSpawned(player_spawned: boolean): void;
}
export interface EnderPearl extends ThrowableProjectile {}
export interface EnderSignal extends Entity {
   getDespawnTimer(): number;
   getDropItem(): boolean;
   getTargetLocation(): Location;
   setDespawnTimer(timer: number): void;
   setDropItem(drop: boolean): void;
   setTargetLocation(location: Location): void;
}
export interface EndGateway extends TileState {
   getAge(): number;
   getExitLocation(): Location;
   isExactTeleport(): boolean;
   setAge(age: number): void;
   setExactTeleport(exact: boolean): void;
   setExitLocation(location: Location): void;
}
export interface EndPortalFrame extends Directional {
   hasEye(): boolean;
   setEye(eye: boolean): void;
}
export interface Entity extends Metadatable, CommandSender, Nameable, PersistentDataHolder {
   addPassenger(passenger: Entity): boolean;
   addScoreboardTag(tag: string): boolean;
   eject(): boolean;
   fromMobSpawner(): boolean;
   getBoundingBox(): BoundingBox;
   getChunk(): Chunk;
   getEntityId(): number;
   getEntitySpawnReason(): CreatureSpawnEvent$SpawnReason;
   getFacing(): BlockFace;
   getFallDistance(): number;
   getFireTicks(): number;
   getHeight(): number;
   getLastDamageCause(): EntityDamageEvent;
   getLocation(): Location;
   getLocation(loc: Location): Location;
   getMaxFireTicks(): number;
   getNearbyEntities(x: number, y: number, z: number): List<Entity>;
   getOrigin(): Location;
   getPassenger(): Entity;
   getPassengers(): List<Entity>;
   getPistonMoveReaction(): PistonMoveReaction;
   getPortalCooldown(): number;
   getPose(): Pose;
   getScoreboardTags(): Set<string>;
   getServer(): Server;
   getTicksLived(): number;
   getType(): EntityType;
   getUniqueId(): UUID;
   getVehicle(): Entity;
   getVelocity(): Vector;
   getWidth(): number;
   getWorld(): World;
   hasGravity(): boolean;
   isCustomNameVisible(): boolean;
   isDead(): boolean;
   isEmpty(): boolean;
   isGlowing(): boolean;
   isInBubbleColumn(): boolean;
   isInLava(): boolean;
   isInRain(): boolean;
   isInsideVehicle(): boolean;
   isInvulnerable(): boolean;
   isInWater(): boolean;
   isInWaterOrBubbleColumn(): boolean;
   isInWaterOrRain(): boolean;
   isInWaterOrRainOrBubbleColumn(): boolean;
   isOnGround(): boolean;
   isPersistent(): boolean;
   isSilent(): boolean;
   isValid(): boolean;
   leaveVehicle(): boolean;
   playEffect(type: EntityEffect): void;
   remove(): void;
   removePassenger(passenger: Entity): boolean;
   removeScoreboardTag(tag: string): boolean;
   setCustomNameVisible(flag: boolean): void;
   setFallDistance(distance: number): void;
   setFireTicks(ticks: number): void;
   setGlowing(flag: boolean): void;
   setGravity(gravity: boolean): void;
   setInvulnerable(flag: boolean): void;
   setLastDamageCause(event: EntityDamageEvent): void;
   setPassenger(passenger: Entity): boolean;
   setPersistent(persistent: boolean): void;
   setPortalCooldown(cooldown: number): void;
   setRotation(yaw: number, pitch: number): void;
   setSilent(flag: boolean): void;
   setTicksLived(value: number): void;
   setVelocity(velocity: Vector): void;
   spigot(): Entity$Spigot;
   teleport(destination: Entity): boolean;
   teleport(destination: Entity, cause: PlayerTeleportEvent$TeleportCause): boolean;
   teleport(location: Location): boolean;
   teleport(location: Location, cause: PlayerTeleportEvent$TeleportCause): boolean;
   teleportAsync(loc: Location): CompletableFuture<Boolean>;
   teleportAsync(loc: Location, cause: PlayerTeleportEvent$TeleportCause): CompletableFuture<Boolean>;
}
export class Entity$Spigot extends CommandSender$Spigot {
   constructor ();
}
export class EntityAddToWorldEvent extends EntityEvent {
   constructor (entity: Entity);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class EntityAirChangeEvent extends EntityEvent implements Cancellable {
   constructor (what: Entity, amount: number);
   getAmount (): number;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setAmount (amount: number): void;
   setCancelled (cancelled: boolean): void;
}
export class EntityBlockFormEvent extends BlockFormEvent {
   constructor (entity: Entity, block: Block, blockstate: BlockState);
   getEntity (): Entity;
}
export interface EntityBlockStorage<T extends Entity> extends TileState {
   addEntity(entity: T): void;
   getEntityCount(): number;
   getMaxEntities(): number;
   isFull(): boolean;
   releaseEntities(): List<T>;
   setMaxEntities(max: number): void;
}
export class EntityBreakDoorEvent extends EntityChangeBlockEvent {
   constructor (entity: LivingEntity, target_block: Block);
   getEntity (): LivingEntity;
}
export class EntityBreedEvent extends EntityEvent implements Cancellable {
   constructor (
      child: LivingEntity,
      mother: LivingEntity,
      father: LivingEntity,
      breeder: LivingEntity,
      bred_with: ItemStack,
      experience: number
   );
   getBredWith (): ItemStack;
   getBreeder (): LivingEntity;
   getEntity (): LivingEntity;
   getExperience (): number;
   getFather (): LivingEntity;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getMother (): LivingEntity;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setExperience (experience: number): void;
}
export class EntityChangeBlockEvent extends EntityEvent implements Cancellable {
   constructor (what: Entity, block: Block, to: BlockData);
   getBlock (): Block;
   getBlockData (): BlockData;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getTo (): Material;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EntityCombustByBlockEvent extends EntityCombustEvent {
   constructor (combuster: Block, combustee: Entity, duration: number);
   getCombuster (): Block;
}
export class EntityCombustByEntityEvent extends EntityCombustEvent {
   constructor (combuster: Entity, combustee: Entity, duration: number);
   getCombuster (): Entity;
}
export class EntityCombustEvent extends EntityEvent implements Cancellable {
   constructor (combustee: Entity, duration: number);
   getDuration (): number;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setDuration (duration: number): void;
}
export class EntityCreatePortalEvent extends EntityEvent {
   constructor (what: LivingEntity, blocks: List<BlockState>, type: PortalType);
   getBlocks (): List<BlockState>;
   getEntity (): LivingEntity;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getPortalType (): PortalType;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EntityDamageByBlockEvent extends EntityDamageEvent {
   constructor (damager: Block, damagee: Entity, cause: EntityDamageEvent$DamageCause, damage: number);
   constructor (
      damager: Block,
      damagee: Entity,
      cause: EntityDamageEvent$DamageCause,
      modifiers: Map<EntityDamageEvent$DamageModifier, Double>,
      modifier_functions: Map<EntityDamageEvent$DamageModifier, Function<Double, Double>>
   );
   getDamager (): Block;
}
export class EntityDamageByEntityEvent extends EntityDamageEvent {
   constructor (damager: Entity, damagee: Entity, cause: EntityDamageEvent$DamageCause, damage: number);
   constructor (
      damager: Entity,
      damagee: Entity,
      cause: EntityDamageEvent$DamageCause,
      modifiers: Map<EntityDamageEvent$DamageModifier, Double>,
      modifier_functions: Map<EntityDamageEvent$DamageModifier, Function<Double, Double>>
   );
   getDamager (): Entity;
}
export class EntityDamageEvent extends EntityEvent implements Cancellable {
   constructor (damagee: Entity, cause: EntityDamageEvent$DamageCause, damage: number);
   constructor (
      damagee: Entity,
      cause: EntityDamageEvent$DamageCause,
      modifiers: Map<EntityDamageEvent$DamageModifier, Double>,
      modifier_functions: Map<EntityDamageEvent$DamageModifier, Function<Double, Double>>
   );
   getCause (): EntityDamageEvent$DamageCause;
   getDamage (): number;
   getDamage (type: EntityDamageEvent$DamageModifier): number;
   getFinalDamage (): number;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getOriginalDamage (type: EntityDamageEvent$DamageModifier): number;
   isApplicable (type: EntityDamageEvent$DamageModifier): boolean;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setDamage (damage: number): void;
   setDamage (type: EntityDamageEvent$DamageModifier, damage: number): void;
}
export class EntityDamageEvent$DamageCause {
   static BLOCK_EXPLOSION: EntityDamageEvent$DamageCause;
   static CONTACT: EntityDamageEvent$DamageCause;
   static CRAMMING: EntityDamageEvent$DamageCause;
   static CUSTOM: EntityDamageEvent$DamageCause;
   static DRAGON_BREATH: EntityDamageEvent$DamageCause;
   static DROWNING: EntityDamageEvent$DamageCause;
   static DRYOUT: EntityDamageEvent$DamageCause;
   static ENTITY_ATTACK: EntityDamageEvent$DamageCause;
   static ENTITY_EXPLOSION: EntityDamageEvent$DamageCause;
   static ENTITY_SWEEP_ATTACK: EntityDamageEvent$DamageCause;
   static FALL: EntityDamageEvent$DamageCause;
   static FALLING_BLOCK: EntityDamageEvent$DamageCause;
   static FIRE: EntityDamageEvent$DamageCause;
   static FIRE_TICK: EntityDamageEvent$DamageCause;
   static FLY_INTO_WALL: EntityDamageEvent$DamageCause;
   static HOT_FLOOR: EntityDamageEvent$DamageCause;
   static LAVA: EntityDamageEvent$DamageCause;
   static LIGHTNING: EntityDamageEvent$DamageCause;
   static MAGIC: EntityDamageEvent$DamageCause;
   static MELTING: EntityDamageEvent$DamageCause;
   static POISON: EntityDamageEvent$DamageCause;
   static PROJECTILE: EntityDamageEvent$DamageCause;
   static STARVATION: EntityDamageEvent$DamageCause;
   static SUFFOCATION: EntityDamageEvent$DamageCause;
   static SUICIDE: EntityDamageEvent$DamageCause;
   static THORNS: EntityDamageEvent$DamageCause;
   static VOID: EntityDamageEvent$DamageCause;
   static WITHER: EntityDamageEvent$DamageCause;
   static valueOf (name: string): EntityDamageEvent$DamageCause;
   static values (): EntityDamageEvent$DamageCause[];
}
export class EntityDamageEvent$DamageModifier {
   static ABSORPTION: EntityDamageEvent$DamageModifier;
   static ARMOR: EntityDamageEvent$DamageModifier;
   static BASE: EntityDamageEvent$DamageModifier;
   static BLOCKING: EntityDamageEvent$DamageModifier;
   static HARD_HAT: EntityDamageEvent$DamageModifier;
   static MAGIC: EntityDamageEvent$DamageModifier;
   static RESISTANCE: EntityDamageEvent$DamageModifier;
   static valueOf (name: string): EntityDamageEvent$DamageModifier;
   static values (): EntityDamageEvent$DamageModifier[];
}
export class EntityDeathEvent extends EntityEvent implements Cancellable {
   constructor (entity: LivingEntity, drops: List<ItemStack>);
   constructor (what: LivingEntity, drops: List<ItemStack>, dropped_exp: number);
   getDeathSound (): Sound;
   getDeathSoundCategory (): SoundCategory;
   getDeathSoundPitch (): number;
   getDeathSoundVolume (): number;
   getDroppedExp (): number;
   getDrops (): List<ItemStack>;
   getEntity (): LivingEntity;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getReviveHealth (): number;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setDeathSound (sound: Sound): void;
   setDeathSoundCategory (sound_category: SoundCategory): void;
   setDeathSoundPitch (pitch: number): void;
   setDeathSoundVolume (volume: number): void;
   setDroppedExp (exp: number): void;
   setReviveHealth (revive_health: number): void;
   setShouldPlayDeathSound (play_death_sound: boolean): void;
   shouldPlayDeathSound (): boolean;
}
export class EntityDismountEvent extends EntityEvent implements Cancellable {
   constructor (what: Entity, dismounted: Entity);
   constructor (what: Entity, dismounted: Entity, is_cancellable: boolean);
   getDismounted (): Entity;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancellable (): boolean;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EntityDropItemEvent extends EntityEvent implements Cancellable {
   constructor (entity: Entity, drop: Item);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getItemDrop (): Item;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EntityEffect {
   static ARMOR_STAND_HIT: EntityEffect;
   static ARROW_PARTICLES: EntityEffect;
   static BREAK_EQUIPMENT_BOOTS: EntityEffect;
   static BREAK_EQUIPMENT_CHESTPLATE: EntityEffect;
   static BREAK_EQUIPMENT_HELMET: EntityEffect;
   static BREAK_EQUIPMENT_LEGGINGS: EntityEffect;
   static BREAK_EQUIPMENT_MAIN_HAND: EntityEffect;
   static BREAK_EQUIPMENT_OFF_HAND: EntityEffect;
   static CAT_TAME_FAIL: EntityEffect;
   static CAT_TAME_SUCCESS: EntityEffect;
   static DEATH: EntityEffect;
   static DOLPHIN_FED: EntityEffect;
   static ENTITY_POOF: EntityEffect;
   static FIREWORK_EXPLODE: EntityEffect;
   static FOX_CHEW: EntityEffect;
   static GUARDIAN_TARGET: EntityEffect;
   static HURT: EntityEffect;
   static HURT_BERRY_BUSH: EntityEffect;
   static HURT_DROWN: EntityEffect;
   static HURT_EXPLOSION: EntityEffect;
   static IRON_GOLEM_ROSE: EntityEffect;
   static IRON_GOLEM_SHEATH: EntityEffect;
   static LOVE_HEARTS: EntityEffect;
   static PLAYER_BAD_OMEN_RAID: EntityEffect;
   static RABBIT_JUMP: EntityEffect;
   static RAVAGER_STUNNED: EntityEffect;
   static SHEEP_EAT: EntityEffect;
   static SHIELD_BLOCK: EntityEffect;
   static SHIELD_BREAK: EntityEffect;
   static SQUID_ROTATE: EntityEffect;
   static TELEPORT_ENDER: EntityEffect;
   static THORNS_HURT: EntityEffect;
   static TOTEM_RESURRECT: EntityEffect;
   static VILLAGER_ANGRY: EntityEffect;
   static VILLAGER_HAPPY: EntityEffect;
   static VILLAGER_HEART: EntityEffect;
   static VILLAGER_SPLASH: EntityEffect;
   static WITCH_MAGIC: EntityEffect;
   static WOLF_HEARTS: EntityEffect;
   static WOLF_SHAKE: EntityEffect;
   static WOLF_SMOKE: EntityEffect;
   static ZOMBIE_TRANSFORM: EntityEffect;
   getApplicable (): Class<Entity>;
   getData (): number;
   static valueOf (name: string): EntityEffect;
   static values (): EntityEffect[];
}
export class EntityEnterBlockEvent extends EntityEvent implements Cancellable {
   constructor (entity: Entity, block: Block);
   getBlock (): Block;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EntityEnterLoveModeEvent extends EntityEvent implements Cancellable {
   constructor (animal_in_love: Animals, human_entity: HumanEntity, ticks_in_love: number);
   getEntity (): Animals;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getHumanEntity (): HumanEntity;
   getTicksInLove (): number;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setTicksInLove (ticks_in_love: number): void;
}
export interface EntityEquipment {
   clear(): void;
   getArmorContents(): ItemStack[];
   getBoots(): ItemStack;
   getBootsDropChance(): number;
   getChestplate(): ItemStack;
   getChestplateDropChance(): number;
   getHelmet(): ItemStack;
   getHelmetDropChance(): number;
   getHolder(): Entity;
   getItem(slot: EquipmentSlot): ItemStack;
   getItemInHand(): ItemStack;
   getItemInHandDropChance(): number;
   getItemInMainHand(): ItemStack;
   getItemInMainHandDropChance(): number;
   getItemInOffHand(): ItemStack;
   getItemInOffHandDropChance(): number;
   getLeggings(): ItemStack;
   getLeggingsDropChance(): number;
   setArmorContents(items: ItemStack[]): void;
   setBoots(boots: ItemStack): void;
   setBootsDropChance(chance: number): void;
   setChestplate(chestplate: ItemStack): void;
   setChestplateDropChance(chance: number): void;
   setHelmet(helmet: ItemStack): void;
   setHelmetDropChance(chance: number): void;
   setItem(slot: EquipmentSlot, item: ItemStack): void;
   setItemInHand(stack: ItemStack): void;
   setItemInHandDropChance(chance: number): void;
   setItemInMainHand(item: ItemStack): void;
   setItemInMainHandDropChance(chance: number): void;
   setItemInOffHand(item: ItemStack): void;
   setItemInOffHandDropChance(chance: number): void;
   setLeggings(leggings: ItemStack): void;
   setLeggingsDropChance(chance: number): void;
}
export class EntityEvent extends Event {
   constructor (what: Entity);
   getEntity (): Entity;
   getEntityType (): EntityType;
}
export class EntityExplodeEvent extends EntityEvent implements Cancellable {
   constructor (what: Entity, location: Location, blocks: List<Block>, yield: number);
   blockList (): List<Block>;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getLocation (): Location;
   getYield (): number;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setYield (yield: number): void;
}
export class EntityInteractEvent extends EntityEvent implements Cancellable {
   constructor (entity: Entity, block: Block);
   getBlock (): Block;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EntityJumpEvent extends EntityEvent implements Cancellable {
   constructor (entity: LivingEntity);
   getEntity (): LivingEntity;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EntityKnockbackByEntityEvent extends EntityEvent implements Cancellable {
   constructor (entity: LivingEntity, hit_by: Entity, knockback_strength: number, acceleration: Vector);
   getAcceleration (): Vector;
   getEntity (): LivingEntity;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getHitBy (): Entity;
   getKnockbackStrength (): number;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EntityMountEvent extends EntityEvent implements Cancellable {
   constructor (what: Entity, mount: Entity);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getMount (): Entity;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EntityPathfindEvent extends EntityEvent implements Cancellable {
   constructor (entity: Entity, loc: Location, target_entity: Entity);
   getEntity (): Entity;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getLoc (): Location;
   getTargetEntity (): Entity;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EntityPickupItemEvent extends EntityEvent implements Cancellable {
   constructor (entity: LivingEntity, item: Item, remaining: number);
   getEntity (): LivingEntity;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getItem (): Item;
   getRemaining (): number;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EntityPlaceEvent extends EntityEvent {
   constructor (entity: Entity, player: Player, block: Block, block_face: BlockFace);
   getBlock (): Block;
   getBlockFace (): BlockFace;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getPlayer (): Player;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EntityPortalEnterEvent extends EntityEvent {
   constructor (entity: Entity, location: Location);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getLocation (): Location;
}
export class EntityPortalEvent extends EntityTeleportEvent {
   constructor (entity: Entity, from: Location, to: Location);
   constructor (entity: Entity, from: Location, to: Location, search_radius: number);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getSearchRadius (): number;
   setSearchRadius (search_radius: number): void;
}
export class EntityPortalExitEvent extends EntityTeleportEvent {
   constructor (entity: Entity, from: Location, to: Location, before: Vector, after: Vector);
   getAfter (): Vector;
   getBefore (): Vector;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   setAfter (after: Vector): void;
}
export class EntityPoseChangeEvent extends EntityEvent {
   constructor (who: Entity, pose: Pose);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getPose (): Pose;
}
export class EntityPotionEffectEvent extends EntityEvent implements Cancellable {
   constructor (
      living_entity: LivingEntity,
      old_effect: PotionEffect,
      new_effect: PotionEffect,
      cause: EntityPotionEffectEvent$Cause,
      action: EntityPotionEffectEvent$Action,
      override: boolean
   );
   getAction (): EntityPotionEffectEvent$Action;
   getCause (): EntityPotionEffectEvent$Cause;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getModifiedType (): PotionEffectType;
   getNewEffect (): PotionEffect;
   getOldEffect (): PotionEffect;
   isCancelled (): boolean;
   isOverride (): boolean;
   setCancelled (cancel: boolean): void;
   setOverride (override: boolean): void;
}
export class EntityPotionEffectEvent$Action {
   static ADDED: EntityPotionEffectEvent$Action;
   static CHANGED: EntityPotionEffectEvent$Action;
   static CLEARED: EntityPotionEffectEvent$Action;
   static REMOVED: EntityPotionEffectEvent$Action;
   static valueOf (name: string): EntityPotionEffectEvent$Action;
   static values (): EntityPotionEffectEvent$Action[];
}
export class EntityPotionEffectEvent$Cause {
   static AREA_EFFECT_CLOUD: EntityPotionEffectEvent$Cause;
   static ARROW: EntityPotionEffectEvent$Cause;
   static ATTACK: EntityPotionEffectEvent$Cause;
   static BEACON: EntityPotionEffectEvent$Cause;
   static COMMAND: EntityPotionEffectEvent$Cause;
   static CONDUIT: EntityPotionEffectEvent$Cause;
   static CONVERSION: EntityPotionEffectEvent$Cause;
   static DEATH: EntityPotionEffectEvent$Cause;
   static DOLPHIN: EntityPotionEffectEvent$Cause;
   static EXPIRATION: EntityPotionEffectEvent$Cause;
   static FOOD: EntityPotionEffectEvent$Cause;
   static ILLUSION: EntityPotionEffectEvent$Cause;
   static MILK: EntityPotionEffectEvent$Cause;
   static PATROL_CAPTAIN: EntityPotionEffectEvent$Cause;
   static PLUGIN: EntityPotionEffectEvent$Cause;
   static POTION_DRINK: EntityPotionEffectEvent$Cause;
   static POTION_SPLASH: EntityPotionEffectEvent$Cause;
   static SPIDER_SPAWN: EntityPotionEffectEvent$Cause;
   static TOTEM: EntityPotionEffectEvent$Cause;
   static TURTLE_HELMET: EntityPotionEffectEvent$Cause;
   static UNKNOWN: EntityPotionEffectEvent$Cause;
   static VILLAGER_TRADE: EntityPotionEffectEvent$Cause;
   static WITHER_ROSE: EntityPotionEffectEvent$Cause;
   static valueOf (name: string): EntityPotionEffectEvent$Cause;
   static values (): EntityPotionEffectEvent$Cause[];
}
export class EntityRegainHealthEvent extends EntityEvent implements Cancellable {
   constructor (entity: Entity, amount: number, regain_reason: EntityRegainHealthEvent$RegainReason);
   constructor (
      entity: Entity,
      amount: number,
      regain_reason: EntityRegainHealthEvent$RegainReason,
      is_fast_regen: boolean
   );
   getAmount (): number;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getRegainReason (): EntityRegainHealthEvent$RegainReason;
   isCancelled (): boolean;
   isFastRegen (): boolean;
   setAmount (amount: number): void;
   setCancelled (cancel: boolean): void;
}
export class EntityRegainHealthEvent$RegainReason {
   static CUSTOM: EntityRegainHealthEvent$RegainReason;
   static EATING: EntityRegainHealthEvent$RegainReason;
   static ENDER_CRYSTAL: EntityRegainHealthEvent$RegainReason;
   static MAGIC: EntityRegainHealthEvent$RegainReason;
   static MAGIC_REGEN: EntityRegainHealthEvent$RegainReason;
   static REGEN: EntityRegainHealthEvent$RegainReason;
   static SATIATED: EntityRegainHealthEvent$RegainReason;
   static WITHER: EntityRegainHealthEvent$RegainReason;
   static WITHER_SPAWN: EntityRegainHealthEvent$RegainReason;
   static valueOf (name: string): EntityRegainHealthEvent$RegainReason;
   static values (): EntityRegainHealthEvent$RegainReason[];
}
export class EntityRemoveFromWorldEvent extends EntityEvent {
   constructor (entity: Entity);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class EntityResurrectEvent extends EntityEvent implements Cancellable {
   constructor (what: LivingEntity);
   getEntity (): LivingEntity;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancelled: boolean): void;
}
export class EntityShootBowEvent extends EntityEvent implements Cancellable {
   constructor (shooter: LivingEntity, bow: ItemStack, projectile: Entity, force: number);
   constructor (shooter: LivingEntity, bow: ItemStack, arrow_item: ItemStack, projectile: Entity, force: number);
   getArrowItem (): ItemStack;
   getBow (): ItemStack;
   getConsumeArrow (): boolean;
   getEntity (): LivingEntity;
   getForce (): number;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getProjectile (): Entity;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setConsumeArrow (consume_arrow: boolean): void;
   setProjectile (projectile: Entity): void;
}
export class EntitySpawnEvent extends EntityEvent implements Cancellable {
   constructor (spawnee: Entity);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getLocation (): Location;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EntityTameEvent extends EntityEvent implements Cancellable {
   constructor (entity: LivingEntity, owner: AnimalTamer);
   getEntity (): LivingEntity;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getOwner (): AnimalTamer;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EntityTargetEvent extends EntityEvent implements Cancellable {
   constructor (entity: Entity, target: Entity, reason: EntityTargetEvent$TargetReason);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getReason (): EntityTargetEvent$TargetReason;
   getTarget (): Entity;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setTarget (target: Entity): void;
}
export class EntityTargetEvent$TargetReason {
   static CLOSEST_ENTITY: EntityTargetEvent$TargetReason;
   static CLOSEST_PLAYER: EntityTargetEvent$TargetReason;
   static COLLISION: EntityTargetEvent$TargetReason;
   static CUSTOM: EntityTargetEvent$TargetReason;
   static DEFEND_VILLAGE: EntityTargetEvent$TargetReason;
   static FOLLOW_LEADER: EntityTargetEvent$TargetReason;
   static FORGOT_TARGET: EntityTargetEvent$TargetReason;
   static OWNER_ATTACKED_TARGET: EntityTargetEvent$TargetReason;
   static PIG_ZOMBIE_TARGET: EntityTargetEvent$TargetReason;
   static RANDOM_TARGET: EntityTargetEvent$TargetReason;
   static REINFORCEMENT_TARGET: EntityTargetEvent$TargetReason;
   static TARGET_ATTACKED_ENTITY: EntityTargetEvent$TargetReason;
   static TARGET_ATTACKED_NEARBY_ENTITY: EntityTargetEvent$TargetReason;
   static TARGET_ATTACKED_OWNER: EntityTargetEvent$TargetReason;
   static TARGET_DIED: EntityTargetEvent$TargetReason;
   static TARGET_INVALID: EntityTargetEvent$TargetReason;
   static TARGET_OTHER_LEVEL: EntityTargetEvent$TargetReason;
   static TEMPT: EntityTargetEvent$TargetReason;
   static UNKNOWN: EntityTargetEvent$TargetReason;
   static valueOf (name: string): EntityTargetEvent$TargetReason;
   static values (): EntityTargetEvent$TargetReason[];
}
export class EntityTargetLivingEntityEvent extends EntityTargetEvent {
   constructor (entity: Entity, target: LivingEntity, reason: EntityTargetEvent$TargetReason);
   getTarget (): LivingEntity;
   setTarget (target: Entity): void;
}
export class EntityTeleportEndGatewayEvent extends EntityTeleportEvent {
   constructor (what: Entity, from: Location, to: Location, gateway: EndGateway);
   getGateway (): EndGateway;
}
export class EntityTeleportEvent extends EntityEvent implements Cancellable {
   constructor (what: Entity, from: Location, to: Location);
   getFrom (): Location;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getTo (): Location;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setFrom (from: Location): void;
   setTo (to: Location): void;
}
export class EntityToggleGlideEvent extends EntityEvent implements Cancellable {
   constructor (who: LivingEntity, is_gliding: boolean);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   isGliding (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EntityToggleSwimEvent extends EntityEvent implements Cancellable {
   constructor (who: LivingEntity, is_swimming: boolean);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   isSwimming (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EntityTransformedEvent extends EntityEvent {
   constructor (entity: Entity, transformed: Entity, reason: EntityTransformedEvent$TransformedReason);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getReason (): EntityTransformedEvent$TransformedReason;
   getTransformed (): Entity;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EntityTransformedEvent$TransformedReason {
   static CURED: EntityTransformedEvent$TransformedReason;
   static DROWNED: EntityTransformedEvent$TransformedReason;
   static INFECTED: EntityTransformedEvent$TransformedReason;
   static LIGHTNING: EntityTransformedEvent$TransformedReason;
   static SHEARED: EntityTransformedEvent$TransformedReason;
   static valueOf (name: string): EntityTransformedEvent$TransformedReason;
   static values (): EntityTransformedEvent$TransformedReason[];
}
export class EntityTransformEvent extends EntityEvent implements Cancellable {
   constructor (original: Entity, converted_list: List<Entity>, transform_reason: EntityTransformEvent$TransformReason);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getTransformedEntities (): List<Entity>;
   getTransformedEntity (): Entity;
   getTransformReason (): EntityTransformEvent$TransformReason;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EntityTransformEvent$TransformReason {
   static CURED: EntityTransformEvent$TransformReason;
   static DROWNED: EntityTransformEvent$TransformReason;
   static INFECTION: EntityTransformEvent$TransformReason;
   static LIGHTNING: EntityTransformEvent$TransformReason;
   static SHEARED: EntityTransformEvent$TransformReason;
   static SPLIT: EntityTransformEvent$TransformReason;
   static valueOf (name: string): EntityTransformEvent$TransformReason;
   static values (): EntityTransformEvent$TransformReason[];
}
export class EntityType {
   static AREA_EFFECT_CLOUD: EntityType;
   static ARMOR_STAND: EntityType;
   static ARROW: EntityType;
   static BAT: EntityType;
   static BEE: EntityType;
   static BLAZE: EntityType;
   static BOAT: EntityType;
   static CAT: EntityType;
   static CAVE_SPIDER: EntityType;
   static CHICKEN: EntityType;
   static COD: EntityType;
   static COW: EntityType;
   static CREEPER: EntityType;
   static DOLPHIN: EntityType;
   static DONKEY: EntityType;
   static DRAGON_FIREBALL: EntityType;
   static DROPPED_ITEM: EntityType;
   static DROWNED: EntityType;
   static EGG: EntityType;
   static ELDER_GUARDIAN: EntityType;
   static ENDER_CRYSTAL: EntityType;
   static ENDER_DRAGON: EntityType;
   static ENDER_PEARL: EntityType;
   static ENDER_SIGNAL: EntityType;
   static ENDERMAN: EntityType;
   static ENDERMITE: EntityType;
   static EVOKER: EntityType;
   static EVOKER_FANGS: EntityType;
   static EXPERIENCE_ORB: EntityType;
   static FALLING_BLOCK: EntityType;
   static FIREBALL: EntityType;
   static FIREWORK: EntityType;
   static FISHING_HOOK: EntityType;
   static FOX: EntityType;
   static GHAST: EntityType;
   static GIANT: EntityType;
   static GUARDIAN: EntityType;
   static HOGLIN: EntityType;
   static HORSE: EntityType;
   static HUSK: EntityType;
   static ILLUSIONER: EntityType;
   static IRON_GOLEM: EntityType;
   static ITEM_FRAME: EntityType;
   static LEASH_HITCH: EntityType;
   static LIGHTNING: EntityType;
   static LLAMA: EntityType;
   static LLAMA_SPIT: EntityType;
   static MAGMA_CUBE: EntityType;
   static MINECART: EntityType;
   static MINECART_CHEST: EntityType;
   static MINECART_COMMAND: EntityType;
   static MINECART_FURNACE: EntityType;
   static MINECART_HOPPER: EntityType;
   static MINECART_MOB_SPAWNER: EntityType;
   static MINECART_TNT: EntityType;
   static MULE: EntityType;
   static MUSHROOM_COW: EntityType;
   static OCELOT: EntityType;
   static PAINTING: EntityType;
   static PANDA: EntityType;
   static PARROT: EntityType;
   static PHANTOM: EntityType;
   static PIG: EntityType;
   static PIGLIN: EntityType;
   static PILLAGER: EntityType;
   static PLAYER: EntityType;
   static POLAR_BEAR: EntityType;
   static PRIMED_TNT: EntityType;
   static PUFFERFISH: EntityType;
   static RABBIT: EntityType;
   static RAVAGER: EntityType;
   static SALMON: EntityType;
   static SHEEP: EntityType;
   static SHULKER: EntityType;
   static SHULKER_BULLET: EntityType;
   static SILVERFISH: EntityType;
   static SKELETON: EntityType;
   static SKELETON_HORSE: EntityType;
   static SLIME: EntityType;
   static SMALL_FIREBALL: EntityType;
   static SNOWBALL: EntityType;
   static SNOWMAN: EntityType;
   static SPECTRAL_ARROW: EntityType;
   static SPIDER: EntityType;
   static SPLASH_POTION: EntityType;
   static SQUID: EntityType;
   static STRAY: EntityType;
   static STRIDER: EntityType;
   static THROWN_EXP_BOTTLE: EntityType;
   static TRADER_LLAMA: EntityType;
   static TRIDENT: EntityType;
   static TROPICAL_FISH: EntityType;
   static TURTLE: EntityType;
   static UNKNOWN: EntityType;
   static VEX: EntityType;
   static VILLAGER: EntityType;
   static VINDICATOR: EntityType;
   static WANDERING_TRADER: EntityType;
   static WITCH: EntityType;
   static WITHER: EntityType;
   static WITHER_SKELETON: EntityType;
   static WITHER_SKULL: EntityType;
   static WOLF: EntityType;
   static ZOGLIN: EntityType;
   static ZOMBIE: EntityType;
   static ZOMBIE_HORSE: EntityType;
   static ZOMBIE_VILLAGER: EntityType;
   static ZOMBIFIED_PIGLIN: EntityType;
   static fromId (id: number): EntityType;
   static fromName (name: string): EntityType;
   getEntityClass (): Class<Entity>;
   getKey (): NamespacedKey;
   getName (): string;
   getTypeId (): number;
   isAlive (): boolean;
   isSpawnable (): boolean;
   static valueOf (name: string): EntityType;
   static values (): EntityType[];
}
export class EntityUnleashEvent extends EntityEvent {
   constructor (entity: Entity, reason: EntityUnleashEvent$UnleashReason);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getReason (): EntityUnleashEvent$UnleashReason;
}
export class EntityUnleashEvent$UnleashReason {
   static DISTANCE: EntityUnleashEvent$UnleashReason;
   static HOLDER_GONE: EntityUnleashEvent$UnleashReason;
   static PLAYER_UNLEASH: EntityUnleashEvent$UnleashReason;
   static UNKNOWN: EntityUnleashEvent$UnleashReason;
   static valueOf (name: string): EntityUnleashEvent$UnleashReason;
   static values (): EntityUnleashEvent$UnleashReason[];
}
export class EntityZapEvent extends EntityTransformEvent implements Cancellable {
   constructor (entity: Entity, bolt: LightningStrike, replacement_entity: Entity);
   getBolt (): LightningStrike;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getReplacementEntity (): Entity;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class EquipmentSlot {
   static CHEST: EquipmentSlot;
   static FEET: EquipmentSlot;
   static HAND: EquipmentSlot;
   static HEAD: EquipmentSlot;
   static LEGS: EquipmentSlot;
   static OFF_HAND: EquipmentSlot;
   static valueOf (name: string): EquipmentSlot;
   static values (): EquipmentSlot[];
}
export class EulerAngle extends JavaObject {
   constructor (x: number, y: number, z: number);
   add (x: number, y: number, z: number): EulerAngle;
   equals (o: JavaObject): boolean;
   getX (): number;
   getY (): number;
   getZ (): number;
   hashCode (): number;
   setX (x: number): EulerAngle;
   setY (y: number): EulerAngle;
   setZ (z: number): EulerAngle;
   subtract (x: number, y: number, z: number): EulerAngle;
}
export class Event extends JavaObject {
   constructor ();
   constructor (is_async: boolean);
   callEvent (): boolean;
   getEventName (): string;
   getHandlers (): HandlerList;
   isAsynchronous (): boolean;
}
export class Event$Result {
   static ALLOW: Event$Result;
   static DEFAULT: Event$Result;
   static DENY: Event$Result;
   static valueOf (name: string): Event$Result;
   static values (): Event$Result[];
}
export class EventException extends Exception {
   constructor ();
   constructor (message: string);
   constructor (throwable: Throwable);
   constructor (cause: Throwable, message: string);
   getCause (): Throwable;
}
export interface EventExecutor {
   static create(m: Method, event_class: Class<Event>): EventExecutor;
   execute(listener: Listener, event: Event): void;
}
export class EventPriority {
   static HIGH: EventPriority;
   static HIGHEST: EventPriority;
   static LOW: EventPriority;
   static LOWEST: EventPriority;
   static MONITOR: EventPriority;
   static NORMAL: EventPriority;
   getSlot (): number;
   static valueOf (name: string): EventPriority;
   static values (): EventPriority[];
}
export interface Evoker extends Spellcaster {
   getCurrentSpell(): Evoker$Spell;
   setCurrentSpell(spell: Evoker$Spell): void;
}
export class Evoker$Spell {
   static BLINDNESS: Evoker$Spell;
   static DISAPPEAR: Evoker$Spell;
   static FANGS: Evoker$Spell;
   static NONE: Evoker$Spell;
   static SUMMON: Evoker$Spell;
   static WOLOLO: Evoker$Spell;
   static valueOf (name: string): Evoker$Spell;
   static values (): Evoker$Spell[];
}
export interface EvokerFangs extends Entity {
   getOwner(): LivingEntity;
   setOwner(owner: LivingEntity): void;
}
export class ExactMatchConversationCanceller extends JavaObject implements ConversationCanceller {
   constructor (escape_sequence: string);
   cancelBasedOnInput (context: ConversationContext, input: string): boolean;
   clone (): ConversationCanceller;
   setConversation (conversation: Conversation): void;
}
export class ExpBottleEvent extends ProjectileHitEvent {
   constructor (bottle: ThrownExpBottle, exp: number);
   getEntity (): ThrownExpBottle;
   getExperience (): number;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getShowEffect (): boolean;
   setExperience (exp: number): void;
   setShowEffect (show_effect: boolean): void;
}
export interface ExperienceOrb extends Entity {
   getExperience(): number;
   getSourceEntityId(): UUID;
   getSpawnReason(): ExperienceOrb$SpawnReason;
   getTriggerEntityId(): UUID;
   isFromBottle(): boolean;
   setExperience(value: number): void;
}
export class ExperienceOrb$SpawnReason {
   static BLOCK_BREAK: ExperienceOrb$SpawnReason;
   static BREED: ExperienceOrb$SpawnReason;
   static CUSTOM: ExperienceOrb$SpawnReason;
   static ENTITY_DEATH: ExperienceOrb$SpawnReason;
   static EXP_BOTTLE: ExperienceOrb$SpawnReason;
   static FISHING: ExperienceOrb$SpawnReason;
   static FURNACE: ExperienceOrb$SpawnReason;
   static GRINDSTONE: ExperienceOrb$SpawnReason;
   static PLAYER_DEATH: ExperienceOrb$SpawnReason;
   static UNKNOWN: ExperienceOrb$SpawnReason;
   static VILLAGER_TRADE: ExperienceOrb$SpawnReason;
   static valueOf (name: string): ExperienceOrb$SpawnReason;
   static values (): ExperienceOrb$SpawnReason[];
}
export class ExperienceOrbMergeEvent extends EntityEvent implements Cancellable {
   constructor (merge_target: ExperienceOrb, merge_source: ExperienceOrb);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getMergeSource (): ExperienceOrb;
   getMergeTarget (): ExperienceOrb;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class ExplosionPrimeEvent extends EntityEvent implements Cancellable {
   constructor (what: Entity, radius: number, fire: boolean);
   constructor (explosive: Explosive);
   getFire (): boolean;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getRadius (): number;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setFire (fire: boolean): void;
   setRadius (radius: number): void;
}
export interface Explosive extends Entity {
   getYield(): number;
   isIncendiary(): boolean;
   setIsIncendiary(is_incendiary: boolean): void;
   setYield(yield: number): void;
}
export interface ExplosiveMinecart extends Minecart {}
export class ExtendedRails extends Rails {
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): ExtendedRails;
   getConvertedData (): number;
   isCurve (): boolean;
   setDirection (face: BlockFace, is_on_slope: boolean): void;
}
export interface FaceAttachable extends BlockData {
   getAttachedFace(): FaceAttachable$AttachedFace;
   setAttachedFace(face: FaceAttachable$AttachedFace): void;
}
export class FaceAttachable$AttachedFace {
   static CEILING: FaceAttachable$AttachedFace;
   static FLOOR: FaceAttachable$AttachedFace;
   static WALL: FaceAttachable$AttachedFace;
   static valueOf (name: string): FaceAttachable$AttachedFace;
   static values (): FaceAttachable$AttachedFace[];
}
export interface FallingBlock extends Entity {
   canHurtEntities(): boolean;
   getBlockData(): BlockData;
   getDropItem(): boolean;
   getMaterial(): Material;
   getSourceLoc(): Location;
   setDropItem(drop: boolean): void;
   setHurtEntities(hurt_entities: boolean): void;
}
export interface Farmland extends BlockData {
   getMaximumMoisture(): number;
   getMoisture(): number;
   setMoisture(moisture: number): void;
}
export interface Fence extends MultipleFacing, Waterlogged {}
export class FileConfiguration extends MemoryConfiguration {
   constructor ();
   constructor (defaults: Configuration);
   buildHeader (): string;
   load (file: File): void;
   load (reader: Reader): void;
   load (file: string): void;
   loadFromString (contents: string): void;
   options (): FileConfigurationOptions;
   save (file: File): void;
   save (file: string): void;
   saveToString (): string;
}
export class FileConfigurationOptions extends MemoryConfigurationOptions {
   constructor (configuration: MemoryConfiguration);
   configuration (): FileConfiguration;
   copyDefaults (value: boolean): FileConfigurationOptions;
   copyHeader (): boolean;
   copyHeader (value: boolean): FileConfigurationOptions;
   header (): string;
   header (value: string): FileConfigurationOptions;
   pathSeparator (value: char): FileConfigurationOptions;
}
export class FileUtil extends JavaObject {
   constructor ();
   static copy (in_file: File, out_file: File): boolean;
}
export class FillProfileEvent extends Event {
   constructor (profile: PlayerProfile);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getPlayerProfile (): PlayerProfile;
   getProperties (): Set<ProfileProperty>;
}
export interface Fire extends Ageable, MultipleFacing {}
export interface Fireball extends Projectile, Explosive {
   getDirection(): Vector;
   setDirection(direction: Vector): void;
}
export interface Firework extends Projectile {
   detonate(): void;
   getBoostedEntity(): LivingEntity;
   getFireworkMeta(): FireworkMeta;
   getSpawningEntity(): UUID;
   isShotAtAngle(): boolean;
   setFireworkMeta(meta: FireworkMeta): void;
   setShotAtAngle(shot_at_angle: boolean): void;
}
export class FireworkEffect extends JavaObject implements ConfigurationSerializable {
   static builder (): FireworkEffect$Builder;
   static deserialize (map: Map<string, JavaObject>): ConfigurationSerializable;
   equals (obj: JavaObject): boolean;
   getColors (): List<Color>;
   getFadeColors (): List<Color>;
   getType (): FireworkEffect$Type;
   hasFlicker (): boolean;
   hashCode (): number;
   hasTrail (): boolean;
   serialize (): Map<string, JavaObject>;
   toString (): string;
}
export class FireworkEffect$Builder extends JavaObject {
   build (): FireworkEffect;
   flicker (flicker: boolean): FireworkEffect$Builder;
   trail (trail: boolean): FireworkEffect$Builder;
   with (type: FireworkEffect$Type): FireworkEffect$Builder;
   withColor (colors: Iterable): FireworkEffect$Builder;
   withColor (color: Color): FireworkEffect$Builder;
   withColor (...colors: Color): FireworkEffect$Builder;
   withFade (colors: Iterable): FireworkEffect$Builder;
   withFade (color: Color): FireworkEffect$Builder;
   withFade (...colors: Color): FireworkEffect$Builder;
   withFlicker (): FireworkEffect$Builder;
   withTrail (): FireworkEffect$Builder;
}
export class FireworkEffect$Type {
   static BALL: FireworkEffect$Type;
   static BALL_LARGE: FireworkEffect$Type;
   static BURST: FireworkEffect$Type;
   static CREEPER: FireworkEffect$Type;
   static STAR: FireworkEffect$Type;
   static valueOf (name: string): FireworkEffect$Type;
   static values (): FireworkEffect$Type[];
}
export interface FireworkEffectMeta extends ItemMeta {
   clone(): FireworkEffectMeta;
   getEffect(): FireworkEffect;
   hasEffect(): boolean;
   setEffect(effect: FireworkEffect): void;
}
export class FireworkExplodeEvent extends EntityEvent implements Cancellable {
   constructor (what: Firework);
   getEntity (): Firework;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export interface FireworkMeta extends ItemMeta {
   addEffect(effect: FireworkEffect): void;
   addEffects(effects: Iterable<FireworkEffect>): void;
   addEffects(...effects: FireworkEffect): void;
   clearEffects(): void;
   clone(): FireworkMeta;
   getEffects(): List<FireworkEffect>;
   getEffectsSize(): number;
   getPower(): number;
   hasEffects(): boolean;
   removeEffect(index: number): void;
   setPower(power: number): void;
}
export interface Fish extends WaterMob {}
export interface FishHook extends Projectile {
   getBiteChance(): number;
   setBiteChance(chance: number): void;
}
export class FixedMetadataValue extends LazyMetadataValue {
   constructor (owning_plugin: Plugin, value: JavaObject);
   invalidate (): void;
   value (): JavaObject;
}
export class FixedSetPrompt extends ValidatingPrompt {
   constructor (...fixed_set: string);
   formatFixedSet (): string;
   isInputValid (context: ConversationContext, input: string): boolean;
}
export class FlowerPot extends MaterialData {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): FlowerPot;
   getContents (): MaterialData;
   setContents (material_data: MaterialData): void;
   toString (): string;
}
export class FluidCollisionMode {
   static ALWAYS: FluidCollisionMode;
   static NEVER: FluidCollisionMode;
   static SOURCE_ONLY: FluidCollisionMode;
   static valueOf (name: string): FluidCollisionMode;
   static values (): FluidCollisionMode[];
}
export class FluidLevelChangeEvent extends BlockEvent implements Cancellable {
   constructor (the_block: Block, new_data: BlockData);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getNewData (): BlockData;
   isCancelled (): boolean;
   setCancelled (cancelled: boolean): void;
   setNewData (new_data: BlockData): void;
}
export interface Flying extends Mob {}
export class FoodLevelChangeEvent extends EntityEvent implements Cancellable {
   constructor (what: HumanEntity, level: number);
   constructor (what: HumanEntity, level: number, item: ItemStack);
   getEntity (): HumanEntity;
   getFoodLevel (): number;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getItem (): ItemStack;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setFoodLevel (level: number): void;
}
export class FormattedCommandAlias extends Command {
   constructor (alias: string, format_strings: string[]);
   execute (sender: CommandSender, command_label: string, args: string[]): boolean;
   getTimingName (): string;
}
export interface Fox extends Animals, Sittable {
   getFirstTrustedPlayer(): AnimalTamer;
   getFoxType(): Fox$Type;
   getSecondTrustedPlayer(): AnimalTamer;
   isCrouching(): boolean;
   setCrouching(crouching: boolean): void;
   setFirstTrustedPlayer(player: AnimalTamer): void;
   setFoxType(type: Fox$Type): void;
   setSecondTrustedPlayer(player: AnimalTamer): void;
   setSleeping(sleeping: boolean): void;
}
export class Fox$Type {
   static RED: Fox$Type;
   static SNOW: Fox$Type;
   static valueOf (name: string): Fox$Type;
   static values (): Fox$Type[];
}
export class FullServerTickHandler extends JavaObject {
   abort (): void;
   close (): void;
   equals (o: JavaObject): boolean;
   getTimingHandler (): co$aikar$timings$TimingHandler;
   hashCode (): number;
   isEnabled (): boolean;
   isSpecial (): boolean;
   startTiming (): Timing;
   startTimingIfSync (): Timing;
   stopTiming (): void;
   stopTimingIfSync (): void;
}
export interface Furnace extends Directional, Lightable {}
export interface Furnace extends Container {
   getBurnTime(): number;
   getCookSpeedMultiplier(): number;
   getCookTime(): number;
   getCookTimeTotal(): number;
   getInventory(): FurnaceInventory;
   getSnapshotInventory(): FurnaceInventory;
   setBurnTime(burn_time: number): void;
   setCookSpeedMultiplier(multiplier: number): void;
   setCookTime(cook_time: number): void;
   setCookTimeTotal(cook_time_total: number): void;
}
export class Furnace extends FurnaceAndDispenser {
   constructor ();
   constructor (direction: BlockFace);
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Furnace;
}
export class FurnaceAndDispenser extends DirectionalContainer {
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): FurnaceAndDispenser;
}
export class FurnaceBurnEvent extends BlockEvent implements Cancellable {
   constructor (furnace: Block, fuel: ItemStack, burn_time: number);
   getBurnTime (): number;
   getFuel (): ItemStack;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isBurning (): boolean;
   isCancelled (): boolean;
   setBurning (burning: boolean): void;
   setBurnTime (burn_time: number): void;
   setCancelled (cancel: boolean): void;
}
export class FurnaceExtractEvent extends BlockExpEvent {
   constructor (player: Player, block: Block, item_type: Material, item_amount: number, exp: number);
   getItemAmount (): number;
   getItemType (): Material;
   getPlayer (): Player;
}
export interface FurnaceInventory extends Inventory {
   getFuel(): ItemStack;
   getHolder(): Furnace;
   getResult(): ItemStack;
   getSmelting(): ItemStack;
   setFuel(stack: ItemStack): void;
   setResult(stack: ItemStack): void;
   setSmelting(stack: ItemStack): void;
}
export class FurnaceRecipe extends CookingRecipe<FurnaceRecipe> {
   constructor (result: ItemStack, source: Material);
   constructor (result: ItemStack, source: MaterialData);
   constructor (result: ItemStack, source: MaterialData, experience: number);
   constructor (result: ItemStack, source: Material, data: number);
   constructor (key: NamespacedKey, result: ItemStack, input: RecipeChoice, experience: number, cooking_time: number);
   constructor (key: NamespacedKey, result: ItemStack, source: Material, experience: number, cooking_time: number);
   constructor (
      key: NamespacedKey,
      result: ItemStack,
      source: Material,
      data: number,
      experience: number,
      cooking_time: number
   );
   setInput (input: Material): FurnaceRecipe;
   setInput (input: MaterialData): FurnaceRecipe;
   setInput (input: Material, data: number): FurnaceRecipe;
   setInputChoice (input: RecipeChoice): FurnaceRecipe;
}
export class FurnaceSmeltEvent extends BlockCookEvent {
   constructor (furnace: Block, source: ItemStack, result: ItemStack);
}
export class GameMode {
   static ADVENTURE: GameMode;
   static CREATIVE: GameMode;
   static SPECTATOR: GameMode;
   static SURVIVAL: GameMode;
   static getByValue (value: number): GameMode;
   getValue (): number;
   static valueOf (name: string): GameMode;
   static values (): GameMode[];
}
export class GameRule<T> extends JavaObject {
   equals (obj: JavaObject): boolean;
   static getByName (rule: string): GameRule;
   getName (): string;
   getType (): Class<T>;
   toString (): string;
   static values (): GameRule[];
}
export interface Gate extends Directional, Openable, Powerable {
   isInWall(): boolean;
   setInWall(in_wall: boolean): void;
}
export class Gate extends MaterialData {
   constructor ();
   constructor (data: number);
   constructor (type: Material, data: number);
   clone (): Gate;
   getFacing (): BlockFace;
   isOpen (): boolean;
   setFacingDirection (face: BlockFace): void;
   setOpen (is_open: boolean): void;
   toString (): string;
}
export class GenericCommandHelpTopic extends HelpTopic {
   constructor (command: Command);
   canSee (sender: CommandSender): boolean;
}
export interface Ghast extends Flying {}
export interface Giant extends Monster {}
export interface GlassPane extends MultipleFacing, Waterlogged {}
export interface Goal<T extends Mob> {
   getKey(): GoalKey<T>;
   getTypes(): EnumSet<GoalType>;
   shouldActivate(): boolean;
   shouldStayActive(): boolean;
   start(): void;
   stop(): void;
   tick(): void;
}
export class GoalKey<T extends Mob> extends JavaObject {
   equals (o: JavaObject): boolean;
   getEntityClass (): Class<T>;
   getNamespacedKey (): NamespacedKey;
   hashCode (): number;
   static of<A extends Mob> (entity_class: Class<A>, namespaced_key: NamespacedKey): GoalKey<A>;
   toString (): string;
}
export class GoalType {
   static JUMP: GoalType;
   static LOOK: GoalType;
   static MOVE: GoalType;
   static TARGET: GoalType;
   static UNKNOWN_BEHAVIOR: GoalType;
   static valueOf (name: string): GoalType;
   static values (): GoalType[];
}
export interface Golem extends Creature {}
export class GrassSpecies {
   static DEAD: GrassSpecies;
   static FERN_LIKE: GrassSpecies;
   static NORMAL: GrassSpecies;
   static getByData (data: number): GrassSpecies;
   getData (): number;
   static valueOf (name: string): GrassSpecies;
   static values (): GrassSpecies[];
}
export interface Grindstone extends Directional, FaceAttachable {}
export interface GrindstoneInventory extends Inventory {
   getLowerItem(): ItemStack;
   getResult(): ItemStack;
   getUpperItem(): ItemStack;
   setLowerItem(lower_item: ItemStack): void;
   setResult(result: ItemStack): void;
   setUpperItem(upper_item: ItemStack): void;
}
export class GS4QueryEvent extends Event {
   constructor (
      query_type: GS4QueryEvent$QueryType,
      querier_address: InetAddress,
      response: GS4QueryEvent$QueryResponse
   );
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getQuerierAddress (): InetAddress;
   getQueryType (): GS4QueryEvent$QueryType;
   getResponse (): GS4QueryEvent$QueryResponse;
   setResponse (response: GS4QueryEvent$QueryResponse): void;
   toString (): string;
}
export class GS4QueryEvent$QueryResponse extends JavaObject {
   static builder (): GS4QueryEvent$QueryResponse$Builder;
   getCurrentPlayers (): number;
   getGameVersion (): string;
   getHostname (): string;
   getMap (): string;
   getMaxPlayers (): number;
   getMotd (): string;
   getPlayers (): Collection<string>;
   getPlugins (): Collection<GS4QueryEvent$QueryResponse$PluginInformation>;
   getPort (): number;
   getServerVersion (): string;
   toBuilder (): GS4QueryEvent$QueryResponse$Builder;
}
export class GS4QueryEvent$QueryResponse$Builder extends JavaObject {
   build (): GS4QueryEvent$QueryResponse;
   clearPlayers (): GS4QueryEvent$QueryResponse$Builder;
   clearPlugins (): GS4QueryEvent$QueryResponse$Builder;
   currentPlayers (current_players: number): GS4QueryEvent$QueryResponse$Builder;
   gameVersion (game_version: string): GS4QueryEvent$QueryResponse$Builder;
   hostname (hostname: string): GS4QueryEvent$QueryResponse$Builder;
   map (map: string): GS4QueryEvent$QueryResponse$Builder;
   maxPlayers (max_players: number): GS4QueryEvent$QueryResponse$Builder;
   motd (motd: string): GS4QueryEvent$QueryResponse$Builder;
   players (...players: string): GS4QueryEvent$QueryResponse$Builder;
   players (players: Collection<string>): GS4QueryEvent$QueryResponse$Builder;
   plugins (...plugins: GS4QueryEvent$QueryResponse$PluginInformation): GS4QueryEvent$QueryResponse$Builder;
   plugins (plugins: Collection<GS4QueryEvent$QueryResponse$PluginInformation>): GS4QueryEvent$QueryResponse$Builder;
   port (port: number): GS4QueryEvent$QueryResponse$Builder;
   serverVersion (server_version: string): GS4QueryEvent$QueryResponse$Builder;
}
export class GS4QueryEvent$QueryResponse$PluginInformation extends JavaObject {
   constructor (name: string, version: string);
   getName (): string;
   getVersion (): string;
   static of (name: string, version: string): GS4QueryEvent$QueryResponse$PluginInformation;
   setName (name: string): void;
   setVersion (version: string): void;
}
export class GS4QueryEvent$QueryType {
   static BASIC: GS4QueryEvent$QueryType;
   static FULL: GS4QueryEvent$QueryType;
   static valueOf (name: string): GS4QueryEvent$QueryType;
   static values (): GS4QueryEvent$QueryType[];
}
export interface Guardian extends Monster {
   isElder(): boolean;
   setElder(should_be_elder: boolean): void;
}
export class HandlerList extends JavaObject {
   constructor ();
   bake (): void;
   static bakeAll (): void;
   static getHandlerLists (): ArrayList<HandlerList>;
   getRegisteredListeners (): RegisteredListener[];
   static getRegisteredListeners (plugin: Plugin): ArrayList<RegisteredListener>;
   register (listener: RegisteredListener): void;
   registerAll (listeners: Collection<RegisteredListener>): void;
   unregister (listener: Listener): void;
   unregister (plugin: Plugin): void;
   unregister (listener: RegisteredListener): void;
   static unregisterAll (): void;
   static unregisterAll (listener: Listener): void;
   static unregisterAll (plugin: Plugin): void;
}
export interface Hanging extends Entity, Attachable {
   setFacingDirection(face: BlockFace, force: boolean): boolean;
}
export class HangingBreakByEntityEvent extends HangingBreakEvent {
   constructor (hanging: Hanging, remover: Entity);
   constructor (hanging: Hanging, remover: Entity, cause: HangingBreakEvent$RemoveCause);
   getRemover (): Entity;
}
export class HangingBreakEvent extends HangingEvent implements Cancellable {
   constructor (hanging: Hanging, cause: HangingBreakEvent$RemoveCause);
   getCause (): HangingBreakEvent$RemoveCause;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class HangingBreakEvent$RemoveCause {
   static DEFAULT: HangingBreakEvent$RemoveCause;
   static ENTITY: HangingBreakEvent$RemoveCause;
   static EXPLOSION: HangingBreakEvent$RemoveCause;
   static OBSTRUCTION: HangingBreakEvent$RemoveCause;
   static PHYSICS: HangingBreakEvent$RemoveCause;
   static valueOf (name: string): HangingBreakEvent$RemoveCause;
   static values (): HangingBreakEvent$RemoveCause[];
}
export class HangingEvent extends Event {
   constructor (painting: Hanging);
   getEntity (): Hanging;
}
export class HangingPlaceEvent extends HangingEvent implements Cancellable {
   constructor (hanging: Hanging, player: Player, block: Block, block_face: BlockFace);
   getBlock (): Block;
   getBlockFace (): BlockFace;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getPlayer (): Player;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class HeightMap {
   static MOTION_BLOCKING: HeightMap;
   static MOTION_BLOCKING_NO_LEAVES: HeightMap;
   static OCEAN_FLOOR: HeightMap;
   static OCEAN_FLOOR_WG: HeightMap;
   static WORLD_SURFACE: HeightMap;
   static WORLD_SURFACE_WG: HeightMap;
   static valueOf (name: string): HeightMap;
   static values (): HeightMap[];
}
export class HeightmapType {
   static ANY: HeightmapType;
   static LIGHT_BLOCKING: HeightmapType;
   static SOLID: HeightmapType;
   static SOLID_OR_LIQUID: HeightmapType;
   static SOLID_OR_LIQUID_NO_LEAVES: HeightmapType;
   static valueOf (name: string): HeightmapType;
   static values (): HeightmapType[];
}
export class HelpCommand extends BukkitCommand {
   constructor ();
   static damerauLevenshteinDistance (s1: string, s2: string): number;
   execute (sender: CommandSender, current_alias: string, args: string[]): boolean;
   findPossibleMatches (search_string: string): HelpTopic;
   tabComplete (sender: CommandSender, alias: string, args: string[]): List<string>;
}
export interface HelpMap {
   addTopic(topic: HelpTopic): void;
   clear(): void;
   getHelpTopic(topic_name: string): HelpTopic;
   getHelpTopics(): Collection<HelpTopic>;
   getIgnoredPlugins(): List<string>;
   registerHelpTopicFactory(command_class: Class, factory: HelpTopicFactory): void;
}
export class HelpTopic extends JavaObject {
   constructor ();
   amendCanSee (amended_permission: string): void;
   amendTopic (amended_short_text: string, amended_full_text: string): void;
   applyAmendment (base_text: string, amendment: string): string;
   canSee (player: CommandSender): boolean;
   getFullText (for_who: CommandSender): string;
   getName (): string;
   getShortText (): string;
}
export class HelpTopicComparator extends JavaObject implements Comparator<HelpTopic> {
   compare (lhs: HelpTopic, rhs: HelpTopic): number;
   static helpTopicComparatorInstance (): HelpTopicComparator;
   static topicNameComparatorInstance (): HelpTopicComparator$TopicNameComparator;
}
export class HelpTopicComparator$TopicNameComparator extends JavaObject implements Comparator<string> {
   compare (lhs: string, rhs: string): number;
}
export interface HelpTopicFactory<TCommand extends Command> {
   createTopic(command: TCommand): HelpTopic;
}
export interface Hoglin extends Animals {
   getConversionTime(): number;
   isAbleToBeHunted(): boolean;
   isConverting(): boolean;
   isImmuneToZombification(): boolean;
   setConversionTime(time: number): void;
   setImmuneToZombification(flag: boolean): void;
   setIsAbleToBeHunted(flag: boolean): void;
}
export interface Hopper extends Directional {
   isEnabled(): boolean;
   setEnabled(enabled: boolean): void;
}
export interface Hopper extends Container, LootableBlockInventory {}
export class Hopper extends MaterialData {
   constructor ();
   constructor (facing_direction: BlockFace);
   constructor (facing_direction: BlockFace, is_active: boolean);
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Hopper;
   getFacing (): BlockFace;
   isActive (): boolean;
   isPowered (): boolean;
   setActive (is_active: boolean): void;
   setFacingDirection (face: BlockFace): void;
   toString (): string;
}
export interface HopperMinecart extends Minecart, InventoryHolder, LootableEntityInventory {
   isEnabled(): boolean;
   setEnabled(enabled: boolean): void;
}
export interface Horse extends AbstractHorse {
   getColor(): Horse$Color;
   getInventory(): HorseInventory;
   getStyle(): Horse$Style;
   isCarryingChest(): boolean;
   setCarryingChest(chest: boolean): void;
   setColor(color: Horse$Color): void;
   setStyle(style: Horse$Style): void;
}
export class Horse$Color {
   static BLACK: Horse$Color;
   static BROWN: Horse$Color;
   static CHESTNUT: Horse$Color;
   static CREAMY: Horse$Color;
   static DARK_BROWN: Horse$Color;
   static GRAY: Horse$Color;
   static WHITE: Horse$Color;
   static valueOf (name: string): Horse$Color;
   static values (): Horse$Color[];
}
export class Horse$Style {
   static BLACK_DOTS: Horse$Style;
   static NONE: Horse$Style;
   static WHITE: Horse$Style;
   static WHITE_DOTS: Horse$Style;
   static WHITEFIELD: Horse$Style;
   static valueOf (name: string): Horse$Style;
   static values (): Horse$Style[];
}
export class Horse$Variant {
   static DONKEY: Horse$Variant;
   static HORSE: Horse$Variant;
   static LLAMA: Horse$Variant;
   static MULE: Horse$Variant;
   static SKELETON_HORSE: Horse$Variant;
   static UNDEAD_HORSE: Horse$Variant;
   static valueOf (name: string): Horse$Variant;
   static values (): Horse$Variant[];
}
export interface HorseInventory extends AbstractHorseInventory, ArmoredHorseInventory {}
export class HorseJumpEvent extends EntityEvent implements Cancellable {
   constructor (horse: AbstractHorse, power: number);
   getEntity (): AbstractHorse;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getPower (): number;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setPower (power: number): void;
}
export interface HumanEntity extends LivingEntity, AnimalTamer, InventoryHolder {
   closeInventory(): void;
   closeInventory(reason: InventoryCloseEvent$Reason): void;
   discoverRecipe(recipe: NamespacedKey): boolean;
   discoverRecipes(recipes: Collection<NamespacedKey>): number;
   getAttackCooldown(): number;
   getBedLocation(): Location;
   getCooldown(material: Material): number;
   getDiscoveredRecipes(): Set<NamespacedKey>;
   getEnderChest(): Inventory;
   getExpToLevel(): number;
   getGameMode(): GameMode;
   getInventory(): PlayerInventory;
   getItemInHand(): ItemStack;
   getItemOnCursor(): ItemStack;
   getMainHand(): MainHand;
   getName(): string;
   getOpenInventory(): InventoryView;
   getPotentialBedLocation(): Location;
   getShoulderEntityLeft(): Entity;
   getShoulderEntityRight(): Entity;
   getSleepTicks(): number;
   hasCooldown(material: Material): boolean;
   hasDiscoveredRecipe(recipe: NamespacedKey): boolean;
   isBlocking(): boolean;
   isHandRaised(): boolean;
   openEnchanting(location: Location, force: boolean): InventoryView;
   openInventory(inventory: Inventory): InventoryView;
   openInventory(inventory: InventoryView): void;
   openMerchant(trader: Villager, force: boolean): InventoryView;
   openMerchant(merchant: Merchant, force: boolean): InventoryView;
   openSign(sign: Sign): void;
   openWorkbench(location: Location, force: boolean): InventoryView;
   releaseLeftShoulderEntity(): Entity;
   releaseRightShoulderEntity(): Entity;
   setCooldown(material: Material, ticks: number): void;
   setGameMode(mode: GameMode): void;
   setItemInHand(item: ItemStack): void;
   setItemOnCursor(item: ItemStack): void;
   setShoulderEntityLeft(entity: Entity): void;
   setShoulderEntityRight(entity: Entity): void;
   setWindowProperty(prop: InventoryView$Property, value: number): boolean;
   sleep(location: Location, force: boolean): boolean;
   undiscoverRecipe(recipe: NamespacedKey): boolean;
   undiscoverRecipes(recipes: Collection<NamespacedKey>): number;
   wakeup(set_spawn_location: boolean): void;
}
export interface Husk extends Zombie {
   getConversionTime(): number;
   isConverting(): boolean;
   setConversionTime(time: number): void;
}
export interface Illager extends Raider {}
export class IllegalPacketEvent extends PlayerEvent {
   constructor (player: Player, type: string, kick_message: string, e: Exception);
   getExceptionMessage (): string;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getKickMessage (): string;
   getType (): string;
   isShouldKick (): boolean;
   static process (player: Player, type: string, kick_message: string, exception: Exception): void;
   setKickMessage (kick_message: string): void;
   setShouldKick (should_kick: boolean): void;
}
export class IllegalPluginAccessException extends RuntimeException {
   constructor ();
   constructor (msg: string);
}
export interface Illusioner extends Spellcaster, RangedEntity {}
export class InactivityConversationCanceller extends JavaObject implements ConversationCanceller {
   constructor (plugin: Plugin, timeout_seconds: number);
   cancelBasedOnInput (context: ConversationContext, input: string): boolean;
   cancelling (conversation: Conversation): void;
   clone (): ConversationCanceller;
   setConversation (conversation: Conversation): void;
}
export class IndexHelpTopic extends HelpTopic {
   constructor (name: string, short_text: string, permission: string, topics: Collection<HelpTopic>);
   constructor (name: string, short_text: string, permission: string, topics: Collection<HelpTopic>, preamble: string);
   amendCanSee (amended_permission: string): void;
   buildIndexLine (sender: CommandSender, topic: HelpTopic): string;
   buildPreamble (sender: CommandSender): string;
   canSee (sender: CommandSender): boolean;
   getFullText (sender: CommandSender): string;
   setTopicsCollection (topics: Collection<HelpTopic>): void;
}
export class Instrument {
   static BANJO: Instrument;
   static BASS_DRUM: Instrument;
   static BASS_GUITAR: Instrument;
   static BELL: Instrument;
   static BIT: Instrument;
   static CHIME: Instrument;
   static COW_BELL: Instrument;
   static DIDGERIDOO: Instrument;
   static FLUTE: Instrument;
   static GUITAR: Instrument;
   static IRON_XYLOPHONE: Instrument;
   static PIANO: Instrument;
   static PLING: Instrument;
   static SNARE_DRUM: Instrument;
   static STICKS: Instrument;
   static XYLOPHONE: Instrument;
   static getByType (type: number): Instrument;
   getType (): number;
   static valueOf (name: string): Instrument;
   static values (): Instrument[];
}
export class InvalidConfigurationException extends Exception {
   constructor ();
   constructor (msg: string);
   constructor (msg: string, cause: Throwable);
   constructor (cause: Throwable);
}
export class InvalidDescriptionException extends Exception {
   constructor ();
   constructor (message: string);
   constructor (cause: Throwable);
   constructor (cause: Throwable, message: string);
}
export class InvalidPluginException extends Exception {
   constructor ();
   constructor (message: string);
   constructor (message: string, cause: Throwable);
   constructor (cause: Throwable);
}
export interface Inventory extends Iterable<ItemStack> {
   addItem(...items: ItemStack): HashMap<Integer, ItemStack>;
   all(item: ItemStack): HashMap<Integer, ItemStack>;
   all(material: Material): HashMap<Integer, ItemStack>;
   clear(): void;
   clear(index: number): void;
   contains(item: ItemStack): boolean;
   contains(item: ItemStack, amount: number): boolean;
   contains(material: Material): boolean;
   contains(material: Material, amount: number): boolean;
   containsAtLeast(item: ItemStack, amount: number): boolean;
   first(item: ItemStack): number;
   first(material: Material): number;
   firstEmpty(): number;
   getContents(): ItemStack[];
   getHolder(): InventoryHolder;
   getHolder(use_snapshot: boolean): InventoryHolder;
   getItem(index: number): ItemStack;
   getLocation(): Location;
   getMaxStackSize(): number;
   getSize(): number;
   getStorageContents(): ItemStack[];
   getType(): InventoryType;
   getViewers(): List<HumanEntity>;
   iterator(): ListIterator<ItemStack>;
   iterator(index: number): ListIterator<ItemStack>;
   remove(item: ItemStack): void;
   remove(material: Material): void;
   removeItem(...items: ItemStack): HashMap<Integer, ItemStack>;
   removeItemAnySlot(...items: ItemStack): HashMap<Integer, ItemStack>;
   setContents(items: ItemStack[]): void;
   setItem(index: number, item: ItemStack): void;
   setMaxStackSize(size: number): void;
   setStorageContents(items: ItemStack[]): void;
}
export class InventoryAction {
   static CLONE_STACK: InventoryAction;
   static COLLECT_TO_CURSOR: InventoryAction;
   static DROP_ALL_CURSOR: InventoryAction;
   static DROP_ALL_SLOT: InventoryAction;
   static DROP_ONE_CURSOR: InventoryAction;
   static DROP_ONE_SLOT: InventoryAction;
   static HOTBAR_MOVE_AND_READD: InventoryAction;
   static HOTBAR_SWAP: InventoryAction;
   static MOVE_TO_OTHER_INVENTORY: InventoryAction;
   static NOTHING: InventoryAction;
   static PICKUP_ALL: InventoryAction;
   static PICKUP_HALF: InventoryAction;
   static PICKUP_ONE: InventoryAction;
   static PICKUP_SOME: InventoryAction;
   static PLACE_ALL: InventoryAction;
   static PLACE_ONE: InventoryAction;
   static PLACE_SOME: InventoryAction;
   static SWAP_WITH_CURSOR: InventoryAction;
   static UNKNOWN: InventoryAction;
   static valueOf (name: string): InventoryAction;
   static values (): InventoryAction[];
}
export class InventoryClickEvent extends InventoryInteractEvent {
   constructor (
      view: InventoryView,
      type: InventoryType$SlotType,
      slot: number,
      click: ClickType,
      action: InventoryAction
   );
   constructor (
      view: InventoryView,
      type: InventoryType$SlotType,
      slot: number,
      click: ClickType,
      action: InventoryAction,
      key: number
   );
   getAction (): InventoryAction;
   getClick (): ClickType;
   getClickedInventory (): Inventory;
   getCurrentItem (): ItemStack;
   getCursor (): ItemStack;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getHotbarButton (): number;
   getRawSlot (): number;
   getSlot (): number;
   getSlotType (): InventoryType$SlotType;
   isLeftClick (): boolean;
   isRightClick (): boolean;
   isShiftClick (): boolean;
   setCurrentItem (stack: ItemStack): void;
   setCursor (stack: ItemStack): void;
}
export class InventoryCloseEvent extends InventoryEvent {
   constructor (transaction: InventoryView);
   constructor (transaction: InventoryView, reason: InventoryCloseEvent$Reason);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getPlayer (): HumanEntity;
   getReason (): InventoryCloseEvent$Reason;
}
export class InventoryCloseEvent$Reason {
   static CANT_USE: InventoryCloseEvent$Reason;
   static DEATH: InventoryCloseEvent$Reason;
   static DISCONNECT: InventoryCloseEvent$Reason;
   static OPEN_NEW: InventoryCloseEvent$Reason;
   static PLAYER: InventoryCloseEvent$Reason;
   static PLUGIN: InventoryCloseEvent$Reason;
   static TELEPORT: InventoryCloseEvent$Reason;
   static UNKNOWN: InventoryCloseEvent$Reason;
   static UNLOADED: InventoryCloseEvent$Reason;
   static valueOf (name: string): InventoryCloseEvent$Reason;
   static values (): InventoryCloseEvent$Reason[];
}
export class InventoryCreativeEvent extends InventoryClickEvent {
   constructor (what: InventoryView, type: InventoryType$SlotType, slot: number, new_item: ItemStack);
   getCursor (): ItemStack;
   setCursor (item: ItemStack): void;
}
export class InventoryDragEvent extends InventoryInteractEvent {
   constructor (
      what: InventoryView,
      new_cursor: ItemStack,
      old_cursor: ItemStack,
      right: boolean,
      slots: Map<Integer, ItemStack>
   );
   getCursor (): ItemStack;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getInventorySlots (): Set<Integer>;
   getNewItems (): Map<Integer, ItemStack>;
   getOldCursor (): ItemStack;
   getRawSlots (): Set<Integer>;
   getType (): DragType;
   setCursor (new_cursor: ItemStack): void;
}
export class InventoryEvent extends Event {
   constructor (transaction: InventoryView);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getInventory (): Inventory;
   getView (): InventoryView;
   getViewers (): List<HumanEntity>;
}
export interface InventoryHolder {
   getInventory(): Inventory;
}
export class InventoryInteractEvent extends InventoryEvent implements Cancellable {
   constructor (transaction: InventoryView);
   getResult (): Event$Result;
   getWhoClicked (): HumanEntity;
   isCancelled (): boolean;
   setCancelled (to_cancel: boolean): void;
   setResult (new_result: Event$Result): void;
}
export class InventoryMoveItemEvent extends Event implements Cancellable {
   constructor (
      source_inventory: Inventory,
      item_stack: ItemStack,
      destination_inventory: Inventory,
      did_source_initiate: boolean
   );
   getDestination (): Inventory;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getInitiator (): Inventory;
   getItem (): ItemStack;
   getSource (): Inventory;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setItem (item_stack: ItemStack): void;
}
export class InventoryOpenEvent extends InventoryEvent implements Cancellable {
   constructor (transaction: InventoryView);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getPlayer (): HumanEntity;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class InventoryPickupItemEvent extends Event implements Cancellable {
   constructor (inventory: Inventory, item: Item);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getInventory (): Inventory;
   getItem (): Item;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class InventoryType {
   static ANVIL: InventoryType;
   static BARREL: InventoryType;
   static BEACON: InventoryType;
   static BLAST_FURNACE: InventoryType;
   static BREWING: InventoryType;
   static CARTOGRAPHY: InventoryType;
   static CHEST: InventoryType;
   static CRAFTING: InventoryType;
   static CREATIVE: InventoryType;
   static DISPENSER: InventoryType;
   static DROPPER: InventoryType;
   static ENCHANTING: InventoryType;
   static ENDER_CHEST: InventoryType;
   static FURNACE: InventoryType;
   static GRINDSTONE: InventoryType;
   static HOPPER: InventoryType;
   static LECTERN: InventoryType;
   static LOOM: InventoryType;
   static MERCHANT: InventoryType;
   static PLAYER: InventoryType;
   static SHULKER_BOX: InventoryType;
   static SMITHING: InventoryType;
   static SMOKER: InventoryType;
   static STONECUTTER: InventoryType;
   static WORKBENCH: InventoryType;
   getDefaultSize (): number;
   getDefaultTitle (): string;
   isCreatable (): boolean;
   static valueOf (name: string): InventoryType;
   static values (): InventoryType[];
}
export class InventoryType$SlotType {
   static ARMOR: InventoryType$SlotType;
   static CONTAINER: InventoryType$SlotType;
   static CRAFTING: InventoryType$SlotType;
   static FUEL: InventoryType$SlotType;
   static OUTSIDE: InventoryType$SlotType;
   static QUICKBAR: InventoryType$SlotType;
   static RESULT: InventoryType$SlotType;
   static valueOf (name: string): InventoryType$SlotType;
   static values (): InventoryType$SlotType[];
}
export class InventoryView extends JavaObject {
   constructor ();
   close (): void;
   convertSlot (raw_slot: number): number;
   countSlots (): number;
   getBottomInventory (): Inventory;
   getCursor (): ItemStack;
   getInventory (raw_slot: number): Inventory;
   getItem (slot: number): ItemStack;
   getPlayer (): HumanEntity;
   getSlotType (slot: number): InventoryType$SlotType;
   getTitle (): string;
   getTopInventory (): Inventory;
   getType (): InventoryType;
   setCursor (item: ItemStack): void;
   setItem (slot: number, item: ItemStack): void;
   setProperty (prop: InventoryView$Property, value: number): boolean;
}
export class InventoryView$Property {
   static BOOK_PAGE: InventoryView$Property;
   static BREW_TIME: InventoryView$Property;
   static BURN_TIME: InventoryView$Property;
   static COOK_TIME: InventoryView$Property;
   static ENCHANT_BUTTON1: InventoryView$Property;
   static ENCHANT_BUTTON2: InventoryView$Property;
   static ENCHANT_BUTTON3: InventoryView$Property;
   static ENCHANT_ID1: InventoryView$Property;
   static ENCHANT_ID2: InventoryView$Property;
   static ENCHANT_ID3: InventoryView$Property;
   static ENCHANT_LEVEL1: InventoryView$Property;
   static ENCHANT_LEVEL2: InventoryView$Property;
   static ENCHANT_LEVEL3: InventoryView$Property;
   static ENCHANT_XP_SEED: InventoryView$Property;
   static FUEL_TIME: InventoryView$Property;
   static LEVELS: InventoryView$Property;
   static PRIMARY_EFFECT: InventoryView$Property;
   static REPAIR_COST: InventoryView$Property;
   static SECONDARY_EFFECT: InventoryView$Property;
   static TICKS_FOR_CURRENT_FUEL: InventoryView$Property;
   static TICKS_FOR_CURRENT_SMELTING: InventoryView$Property;
   getId (): number;
   getType (): InventoryType;
   static valueOf (name: string): InventoryView$Property;
   static values (): InventoryView$Property[];
}
export interface IronGolem extends Golem {
   isPlayerCreated(): boolean;
   setPlayerCreated(player_created: boolean): void;
}
export interface Item extends Entity {
   canMobPickup(): boolean;
   getItemStack(): ItemStack;
   getOwner(): UUID;
   getPickupDelay(): number;
   getThrower(): UUID;
   setCanMobPickup(can_mob_pickup: boolean): void;
   setItemStack(stack: ItemStack): void;
   setOwner(owner: UUID): void;
   setPickupDelay(delay: number): void;
   setThrower(thrower: UUID): void;
}
export class ItemDespawnEvent extends EntityEvent implements Cancellable {
   constructor (despawnee: Item, loc: Location);
   getEntity (): Item;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getLocation (): Location;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export interface ItemFactory {
   asMetaFor(meta: ItemMeta, stack: ItemStack): ItemMeta;
   asMetaFor(meta: ItemMeta, material: Material): ItemMeta;
   ensureServerConversions(item: ItemStack): ItemStack;
   equals(meta1: ItemMeta, meta2: ItemMeta): boolean;
   getDefaultLeatherColor(): Color;
   getI18NDisplayName(item: ItemStack): string;
   getItemMeta(material: Material): ItemMeta;
   isApplicable(meta: ItemMeta, stack: ItemStack): boolean;
   isApplicable(meta: ItemMeta, material: Material): boolean;
   updateMaterial(meta: ItemMeta, material: Material): Material;
}
export class ItemFlag {
   static HIDE_ATTRIBUTES: ItemFlag;
   static HIDE_DESTROYS: ItemFlag;
   static HIDE_ENCHANTS: ItemFlag;
   static HIDE_PLACED_ON: ItemFlag;
   static HIDE_POTION_EFFECTS: ItemFlag;
   static HIDE_UNBREAKABLE: ItemFlag;
   static valueOf (name: string): ItemFlag;
   static values (): ItemFlag[];
}
export interface ItemFrame extends Hanging {
   getItem(): ItemStack;
   getRotation(): Rotation;
   isFixed(): boolean;
   isVisible(): boolean;
   setFixed(visible: boolean): void;
   setItem(item: ItemStack): void;
   setItem(item: ItemStack, play_sound: boolean): void;
   setRotation(rotation: Rotation): void;
   setVisible(visible: boolean): void;
}
export class ItemMergeEvent extends EntityEvent implements Cancellable {
   constructor (item: Item, target: Item);
   getEntity (): Item;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getTarget (): Item;
   isCancelled (): boolean;
   setCancelled (cancelled: boolean): void;
}
export interface ItemMeta extends Cloneable, ConfigurationSerializable, PersistentDataHolder {
   addAttributeModifier(attribute: Attribute, modifier: AttributeModifier): boolean;
   addEnchant(ench: Enchantment, level: number, ignore_level_restriction: boolean): boolean;
   addItemFlags(...item_flags: ItemFlag): void;
   clone(): ItemMeta;
   getAttributeModifiers(): Multimap<Attribute, AttributeModifier>;
   getAttributeModifiers(attribute: Attribute): Collection<AttributeModifier>;
   getAttributeModifiers(slot: EquipmentSlot): Multimap<Attribute, AttributeModifier>;
   getCanDestroy(): Set<Material>;
   getCanPlaceOn(): Set<Material>;
   getCustomModelData(): number;
   getCustomTagContainer(): CustomItemTagContainer;
   getDestroyableKeys(): Set<Namespaced>;
   getDisplayName(): string;
   getDisplayNameComponent(): BaseComponent[];
   getEnchantLevel(ench: Enchantment): number;
   getEnchants(): Map<Enchantment, Integer>;
   getItemFlags(): Set<ItemFlag>;
   getLocalizedName(): string;
   getLore(): List<string>;
   getLoreComponents(): List<BaseComponent[]>;
   getPlaceableKeys(): Set<Namespaced>;
   hasAttributeModifiers(): boolean;
   hasConflictingEnchant(ench: Enchantment): boolean;
   hasCustomModelData(): boolean;
   hasDestroyableKeys(): boolean;
   hasDisplayName(): boolean;
   hasEnchant(ench: Enchantment): boolean;
   hasEnchants(): boolean;
   hasItemFlag(flag: ItemFlag): boolean;
   hasLocalizedName(): boolean;
   hasLore(): boolean;
   hasPlaceableKeys(): boolean;
   isUnbreakable(): boolean;
   removeAttributeModifier(attribute: Attribute): boolean;
   removeAttributeModifier(attribute: Attribute, modifier: AttributeModifier): boolean;
   removeAttributeModifier(slot: EquipmentSlot): boolean;
   removeEnchant(ench: Enchantment): boolean;
   removeItemFlags(...item_flags: ItemFlag): void;
   setAttributeModifiers(attribute_modifiers: Multimap<Attribute, AttributeModifier>): void;
   setCanDestroy(can_destroy: Set<Material>): void;
   setCanPlaceOn(can_place_on: Set<Material>): void;
   setCustomModelData(data: Integer): void;
   setDestroyableKeys(can_destroy: Collection<Namespaced>): void;
   setDisplayName(name: string): void;
   setDisplayNameComponent(component: BaseComponent[]): void;
   setLocalizedName(name: string): void;
   setLore(lore: List<string>): void;
   setLoreComponents(lore: List<BaseComponent[]>): void;
   setPlaceableKeys(can_place_on: Collection<Namespaced>): void;
   setUnbreakable(unbreakable: boolean): void;
   setVersion(version: number): void;
}
export class ItemSpawnEvent extends EntitySpawnEvent {
   constructor (spawnee: Item);
   constructor (spawnee: Item, loc: Location);
   getEntity (): Item;
}
export class ItemStack extends JavaObject implements Cloneable, ConfigurationSerializable {
   constructor ();
   constructor (stack: ItemStack);
   constructor (type: Material);
   constructor (type: Material, amount: number);
   constructor (type: Material, amount: number, damage: number);
   constructor (type: Material, amount: number, damage: number, data: Byte);
   add (): ItemStack;
   add (qty: number): ItemStack;
   addEnchantment (ench: Enchantment, level: number): void;
   addEnchantments (enchantments: Map<Enchantment, Integer>): void;
   addItemFlags (...item_flags: ItemFlag): void;
   addUnsafeEnchantment (ench: Enchantment, level: number): void;
   addUnsafeEnchantments (enchantments: Map<Enchantment, Integer>): void;
   asOne (): ItemStack;
   asQuantity (qty: number): ItemStack;
   clone (): ItemStack;
   containsEnchantment (ench: Enchantment): boolean;
   static deserialize (args: Map<string, JavaObject>): ItemStack;
   static deserializeBytes (bytes: byte[]): ItemStack;
   ensureServerConversions (): ItemStack;
   equals (obj: JavaObject): boolean;
   getAmount (): number;
   getData (): MaterialData;
   getDurability (): number;
   getEnchantmentLevel (ench: Enchantment): number;
   getEnchantments (): Map<Enchantment, Integer>;
   getI18NDisplayName (): string;
   getItemFlags (): Set<ItemFlag>;
   getItemMeta (): ItemMeta;
   getLore (): List<string>;
   getMaxItemUseDuration (): number;
   getMaxStackSize (): number;
   getType (): Material;
   hashCode (): number;
   hasItemFlag (flag: ItemFlag): boolean;
   hasItemMeta (): boolean;
   isSimilar (stack: ItemStack): boolean;
   removeEnchantment (ench: Enchantment): number;
   removeItemFlags (...item_flags: ItemFlag): void;
   serialize (): Map<string, JavaObject>;
   serializeAsBytes (): number[];
   setAmount (amount: number): void;
   setData (data: MaterialData): void;
   setDurability (durability: number): void;
   setItemMeta (item_meta: ItemMeta): boolean;
   setLore (lore: List<string>): void;
   setType (type: Material): void;
   subtract (): ItemStack;
   subtract (qty: number): ItemStack;
   toString (): string;
}
export class ItemStackRecipeChoice extends JavaObject {
   constructor (choices: List<ItemStack>);
   constructor (choices: ItemStack);
   clone (): RecipeChoice;
   getItemStack (): ItemStack;
   test (item_stack: ItemStack): boolean;
}
export interface ItemTagAdapterContext {
   newTagContainer(): CustomItemTagContainer;
}
export interface ItemTagType<T, Z> {
   fromPrimitive(primitive: T, context: ItemTagAdapterContext): Z;
   getComplexType(): Class<Z>;
   getPrimitiveType(): Class<T>;
   toPrimitive(complex: Z, context: ItemTagAdapterContext): T;
}
export class ItemTagType$PrimitiveTagType<T> extends JavaObject implements ItemTagType<T, T> {
   fromPrimitive (primitive: T, context: ItemTagAdapterContext): T;
   getComplexType (): Class<T>;
   getPrimitiveType (): Class<T>;
   toPrimitive (complex: T, context: ItemTagAdapterContext): T;
}
export class JavaPlugin extends PluginBase {
   constructor ();
   constructor (loader: JavaPluginLoader, description: PluginDescriptionFile, data_folder: File, file: File);
   getClassLoader (): ClassLoader;
   getCommand (name: string): PluginCommand;
   getConfig (): FileConfiguration;
   getDataFolder (): File;
   getDefaultWorldGenerator (world_name: string, id: string): ChunkGenerator;
   getDescription (): PluginDescriptionFile;
   getFile (): File;
   getLogger (): Logger;
   static getPlugin<T extends JavaPlugin> (clazz: Class<T>): T;
   getPluginLoader (): PluginLoader;
   static getProvidingPlugin (clazz: Class): JavaPlugin;
   getResource (filename: string): InputStream;
   getServer (): Server;
   getTextResource (file: string): Reader;
   isEnabled (): boolean;
   isNaggable (): boolean;
   onCommand (sender: CommandSender, command: Command, label: string, args: string[]): boolean;
   onDisable (): void;
   onEnable (): void;
   onLoad (): void;
   onTabComplete (sender: CommandSender, command: Command, alias: string, args: string[]): List<string>;
   reloadConfig (): void;
   saveConfig (): void;
   saveDefaultConfig (): void;
   saveResource (resource_path: string, replace: boolean): void;
   setEnabled (enabled: boolean): void;
   setNaggable (can_nag: boolean): void;
   toString (): string;
}
export class JavaPluginLoader extends JavaObject implements PluginLoader {
   constructor (instance: Server);
   createRegisteredListeners (listener: Listener, plugin: Plugin): Map<Class<Event>, Set<RegisteredListener>>;
   disablePlugin (plugin: Plugin): void;
   disablePlugin (plugin: Plugin, close_classloader: boolean): void;
   enablePlugin (plugin: Plugin): void;
   getPluginDescription (file: File): PluginDescriptionFile;
   getPluginFileFilters (): Pattern[];
   loadPlugin (file: File): Plugin;
}
export interface Jigsaw extends BlockData {
   getOrientation(): Jigsaw$Orientation;
   setOrientation(orientation: Jigsaw$Orientation): void;
}
export interface Jigsaw extends TileState {}
export class Jigsaw$Orientation {
   static DOWN_EAST: Jigsaw$Orientation;
   static DOWN_NORTH: Jigsaw$Orientation;
   static DOWN_SOUTH: Jigsaw$Orientation;
   static DOWN_WEST: Jigsaw$Orientation;
   static EAST_UP: Jigsaw$Orientation;
   static NORTH_UP: Jigsaw$Orientation;
   static SOUTH_UP: Jigsaw$Orientation;
   static UP_EAST: Jigsaw$Orientation;
   static UP_NORTH: Jigsaw$Orientation;
   static UP_SOUTH: Jigsaw$Orientation;
   static UP_WEST: Jigsaw$Orientation;
   static WEST_UP: Jigsaw$Orientation;
   static valueOf (name: string): Jigsaw$Orientation;
   static values (): Jigsaw$Orientation[];
}
export class JSONUtil extends JavaObject {
   static appendObjectData (parent: Map, ...data: JSONUtil$JSONPair): Map<string, JavaObject>;
   static createObject (...data: JSONUtil$JSONPair): Map<string, JavaObject>;
   static pair (key: number, obj: JavaObject): JSONUtil$JSONPair;
   static pair (key: string, obj: JavaObject): JSONUtil$JSONPair;
   static toArray (...data: JavaObject): List;
   static toArrayMapper<E> (collection: E[], mapper: Function<E, JavaObject>): List;
   static toArrayMapper<E> (collection: Iterable<E>, mapper: Function<E, JavaObject>): List;
   static toObjectMapper<E> (collection: E[], mapper: Function<E, JSONUtil$JSONPair>): Map;
   static toObjectMapper<E> (collection: Iterable<E>, mapper: Function<E, JSONUtil$JSONPair>): Map;
}
export class JSONUtil$JSONPair extends JavaObject {}
export interface Jukebox extends BlockData {
   hasRecord(): boolean;
}
export interface Jukebox extends TileState {
   eject(): boolean;
   getPlaying(): Material;
   getRecord(): ItemStack;
   isPlaying(): boolean;
   setPlaying(record: Material): void;
   setRecord(record: ItemStack): void;
   stopPlaying(): void;
}
export interface Keyed {
   getKey(): NamespacedKey;
}
export interface KeyedBossBar extends BossBar, Keyed {}
export interface KnowledgeBookMeta extends ItemMeta {
   addRecipe(...recipes: NamespacedKey): void;
   clone(): KnowledgeBookMeta;
   getRecipes(): List<NamespacedKey>;
   hasRecipes(): boolean;
   setRecipes(recipes: List<NamespacedKey>): void;
}
export interface Ladder extends Directional, Waterlogged {}
export class Ladder extends SimpleAttachableMaterialData {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Ladder;
   getAttachedFace (): BlockFace;
   setFacingDirection (face: BlockFace): void;
}
export interface Lantern extends BlockData {
   isHanging(): boolean;
   setHanging(hanging: boolean): void;
}
export interface LargeFireball extends SizedFireball {}
export class LazyMetadataValue extends MetadataValueAdapter {
   constructor (owning_plugin: Plugin);
   constructor (owning_plugin: Plugin, lazy_value: Callable<JavaObject>);
   constructor (
      owning_plugin: Plugin,
      cache_strategy: LazyMetadataValue$CacheStrategy,
      lazy_value: Callable<JavaObject>
   );
   invalidate (): void;
   value (): JavaObject;
}
export class LazyMetadataValue$CacheStrategy {
   static CACHE_AFTER_FIRST_EVAL: LazyMetadataValue$CacheStrategy;
   static CACHE_ETERNALLY: LazyMetadataValue$CacheStrategy;
   static NEVER_CACHE: LazyMetadataValue$CacheStrategy;
   static valueOf (name: string): LazyMetadataValue$CacheStrategy;
   static values (): LazyMetadataValue$CacheStrategy[];
}
export interface LeashHitch extends Hanging {}
export interface LeatherArmorMeta extends ItemMeta {
   clone(): LeatherArmorMeta;
   getColor(): Color;
   setColor(color: Color): void;
}
export interface Leaves extends BlockData {
   getDistance(): number;
   isPersistent(): boolean;
   setDistance(distance: number): void;
   setPersistent(persistent: boolean): void;
}
export class Leaves extends Wood {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   constructor (type: Material, species: TreeSpecies);
   constructor (type: Material, species: TreeSpecies, is_decayable: boolean);
   constructor (species: TreeSpecies);
   constructor (species: TreeSpecies, is_decayable: boolean);
   clone (): Leaves;
   isDecayable (): boolean;
   isDecaying (): boolean;
   setDecayable (is_decayable: boolean): void;
   setDecaying (is_decaying: boolean): void;
   toString (): string;
}
export class LeavesDecayEvent extends BlockEvent implements Cancellable {
   constructor (block: Block);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export interface Lectern extends Directional, Powerable {
   hasBook(): boolean;
}
export interface Lectern extends TileState, BlockInventoryHolder {
   getInventory(): Inventory;
   getPage(): number;
   getSnapshotInventory(): Inventory;
   setPage(page: number): void;
}
export interface LecternInventory extends Inventory {
   getBook(): ItemStack;
   getHolder(): Lectern;
   setBook(book: ItemStack): void;
}
export interface Levelled extends BlockData {
   getLevel(): number;
   getMaximumLevel(): number;
   setLevel(level: number): void;
}
export class Lever extends SimpleAttachableMaterialData {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Lever;
   getAttachedFace (): BlockFace;
   isPowered (): boolean;
   setFacingDirection (face: BlockFace): void;
   setPowered (is_powered: boolean): void;
   toString (): string;
}
export interface Lidded {
   close(): void;
   open(): void;
}
export interface Lightable extends BlockData {
   isLit(): boolean;
   setLit(lit: boolean): void;
}
export interface LightningStrike extends Entity {
   isEffect(): boolean;
   spigot(): LightningStrike$Spigot;
}
export class LightningStrike$Spigot extends Entity$Spigot {
   constructor ();
   isSilent (): boolean;
}
export class LightningStrikeEvent extends WeatherEvent implements Cancellable {
   constructor (world: World, bolt: LightningStrike);
   constructor (world: World, bolt: LightningStrike, cause: LightningStrikeEvent$Cause);
   getCause (): LightningStrikeEvent$Cause;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getLightning (): LightningStrike;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class LightningStrikeEvent$Cause {
   static COMMAND: LightningStrikeEvent$Cause;
   static TRAP: LightningStrikeEvent$Cause;
   static TRIDENT: LightningStrikeEvent$Cause;
   static UNKNOWN: LightningStrikeEvent$Cause;
   static WEATHER: LightningStrikeEvent$Cause;
   static valueOf (name: string): LightningStrikeEvent$Cause;
   static values (): LightningStrikeEvent$Cause[];
}
export interface LingeringPotion extends ThrownPotion {}
export class LingeringPotionSplashEvent extends ProjectileHitEvent implements Cancellable {
   constructor (potion: ThrownPotion, entity: AreaEffectCloud);
   getAreaEffectCloud (): AreaEffectCloud;
   getEntity (): ThrownPotion;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export interface Listener {}
export interface LivingEntity extends Attributable, Damageable, ProjectileSource {
   addPotionEffect(effect: PotionEffect): boolean;
   addPotionEffect(effect: PotionEffect, force: boolean): boolean;
   addPotionEffects(effects: Collection<PotionEffect>): boolean;
   attack(target: Entity): void;
   getActiveItem(): ItemStack;
   getActivePotionEffects(): Collection<PotionEffect>;
   getArrowsStuck(): number;
   getCanPickupItems(): boolean;
   getCollidableExemptions(): Set<UUID>;
   getEquipment(): EntityEquipment;
   getEyeHeight(): number;
   getEyeHeight(ignore_pose: boolean): number;
   getEyeLocation(): Location;
   getHandRaisedTime(): number;
   getItemUseRemainingTime(): number;
   getKiller(): Player;
   getLastDamage(): number;
   getLastTwoTargetBlocks(transparent: Set<Material>, max_distance: number): List<Block>;
   getLeashHolder(): Entity;
   getLineOfSight(transparent: Set<Material>, max_distance: number): List<Block>;
   getMaximumAir(): number;
   getMaximumNoDamageTicks(): number;
   getMemory<T>(memory_key: MemoryKey<T>): T;
   getNoDamageTicks(): number;
   getPotionEffect(type: PotionEffectType): PotionEffect;
   getRemainingAir(): number;
   getRemoveWhenFarAway(): boolean;
   getShieldBlockingDelay(): number;
   getTargetBlock(max_distance: number): Block;
   getTargetBlock(max_distance: number, fluid_mode: TargetBlockInfo$FluidMode): Block;
   getTargetBlock(transparent: Set<Material>, max_distance: number): Block;
   getTargetBlockExact(max_distance: number): Block;
   getTargetBlockExact(max_distance: number, fluid_collision_mode: FluidCollisionMode): Block;
   getTargetBlockFace(max_distance: number): BlockFace;
   getTargetBlockFace(max_distance: number, fluid_mode: TargetBlockInfo$FluidMode): BlockFace;
   getTargetBlockInfo(max_distance: number): TargetBlockInfo;
   getTargetBlockInfo(max_distance: number, fluid_mode: TargetBlockInfo$FluidMode): TargetBlockInfo;
   getTargetEntity(max_distance: number): Entity;
   getTargetEntity(max_distance: number, ignore_blocks: boolean): Entity;
   getTargetEntityInfo(max_distance: number): TargetEntityInfo;
   getTargetEntityInfo(max_distance: number, ignore_blocks: boolean): TargetEntityInfo;
   hasAI(): boolean;
   hasLineOfSight(other: Entity): boolean;
   hasPotionEffect(type: PotionEffectType): boolean;
   isCollidable(): boolean;
   isGliding(): boolean;
   isHandRaised(): boolean;
   isJumping(): boolean;
   isLeashed(): boolean;
   isRiptiding(): boolean;
   isSleeping(): boolean;
   isSwimming(): boolean;
   rayTraceBlocks(max_distance: number): RayTraceResult;
   rayTraceBlocks(max_distance: number, fluid_collision_mode: FluidCollisionMode): RayTraceResult;
   removePotionEffect(type: PotionEffectType): void;
   setAI(ai: boolean): void;
   setArrowsStuck(arrows: number): void;
   setCanPickupItems(pickup: boolean): void;
   setCollidable(collidable: boolean): void;
   setGliding(gliding: boolean): void;
   setJumping(jumping: boolean): void;
   setKiller(killer: Player): void;
   setLastDamage(damage: number): void;
   setLeashHolder(holder: Entity): boolean;
   setMaximumAir(ticks: number): void;
   setMaximumNoDamageTicks(ticks: number): void;
   setMemory<T>(memory_key: MemoryKey<T>, memory_value: T): void;
   setNoDamageTicks(ticks: number): void;
   setRemainingAir(ticks: number): void;
   setRemoveWhenFarAway(remove: boolean): void;
   setShieldBlockingDelay(delay: number): void;
   setSwimming(swimming: boolean): void;
   swingMainHand(): void;
   swingOffHand(): void;
}
export interface Llama extends ChestedHorse, RangedEntity {
   getColor(): Llama$Color;
   getInventory(): LlamaInventory;
   getStrength(): number;
   setColor(color: Llama$Color): void;
   setStrength(strength: number): void;
}
export class Llama$Color {
   static BROWN: Llama$Color;
   static CREAMY: Llama$Color;
   static GRAY: Llama$Color;
   static WHITE: Llama$Color;
   static valueOf (name: string): Llama$Color;
   static values (): Llama$Color[];
}
export interface LlamaInventory extends SaddledHorseInventory {
   getDecor(): ItemStack;
   setDecor(stack: ItemStack): void;
}
export interface LlamaSpit extends Projectile {}
export class LoadingIntMap<V> extends it$unimi$dsi$fastutil$ints$Int2ObjectOpenHashMap<V> {
   constructor (expectedSize: number, loadFactor: number, loader: Function<Integer, V>);
   constructor (expectedSize: number, loader: Function<Integer, V>);
   constructor (loader: Function<Integer, V>);
   get (key: number): V;
}
export class LoadingIntMap$Feeder<T> extends JavaObject implements Function<T, T> {
   constructor ();
   apply (): T;
   apply (input: JavaObject): T;
}
export class LoadingMap<K, V> extends AbstractMap<K, V> {
   constructor (backing_map: Map<K, V>, loader: Function<K, V>);
   clear (): void;
   clone (): LoadingMap<K, V>;
   containsKey (key: JavaObject): boolean;
   containsValue (value: JavaObject): boolean;
   entrySet (): Set<Map$Entry<K, V>>;
   equals (o: JavaObject): boolean;
   get (key: JavaObject): V;
   hashCode (): number;
   isEmpty (): boolean;
   keySet (): Set<K>;
   static newAutoMap<K, V> (backing_map: Map<K, V>, key_class: Class<K>, value_class: Class<V>): Map<K, V>;
   static newAutoMap<K, V> (backing_map: Map<K, V>, value_class: Class<V>): Map<K, V>;
   static newHashAutoMap<K, V> (key_class: Class<K>, value_class: Class<V>): Map<K, V>;
   static newHashAutoMap<K, V> (
      key_class: Class<K>,
      value_class: Class<V>,
      initial_capacity: number,
      load_factor: number
   ): Map<K, V>;
   static newHashAutoMap<K, V> (value_class: Class<V>): Map<K, V>;
   static newHashAutoMap<K, V> (value_class: Class<V>, initial_capacity: number, load_factor: number): Map<K, V>;
   static newHashMap<K, V> (loader: Function<K, V>): Map<K, V>;
   static newHashMap<K, V> (loader: Function<K, V>, initial_capacity: number): Map<K, V>;
   static newHashMap<K, V> (loader: Function<K, V>, initial_capacity: number, load_factor: number): Map<K, V>;
   static newIdentityHashMap<K, V> (loader: Function<K, V>): Map<K, V>;
   static newIdentityHashMap<K, V> (loader: Function<K, V>, initial_capacity: number): Map<K, V>;
   static of<K, V> (backing_map: Map<K, V>, loader: Function<K, V>): Map<K, V>;
   put (key: K, value: V): V;
   putAll (m: Map<K, V>): void;
   remove (key: JavaObject): V;
   size (): number;
   values (): Collection<V>;
}
export class LoadingMap$Feeder<T> extends JavaObject implements Function<T, T> {
   constructor ();
   apply (): T;
   apply (input: JavaObject): T;
}
export class Location extends JavaObject implements Cloneable, ConfigurationSerializable {
   constructor (world: World, x: number, y: number, z: number);
   constructor (world: World, x: number, y: number, z: number, yaw: number, pitch: number);
   add (x: number, y: number, z: number): Location;
   add (vec: Location): Location;
   add (base: Location, x: number, y: number, z: number): Location;
   add (vec: Vector): Location;
   checkFinite (): void;
   clone (): Location;
   createExplosion (power: number): boolean;
   createExplosion (power: number, set_fire: boolean): boolean;
   createExplosion (power: number, set_fire: boolean, break_blocks: boolean): boolean;
   createExplosion (source: Entity, power: number): boolean;
   createExplosion (source: Entity, power: number, set_fire: boolean): boolean;
   createExplosion (source: Entity, power: number, set_fire: boolean, break_blocks: boolean): boolean;
   static deserialize (args: Map<string, JavaObject>): Location;
   distance (o: Location): number;
   distanceSquared (o: Location): number;
   equals (obj: JavaObject): boolean;
   getBlock (): Block;
   getBlockX (): number;
   getBlockY (): number;
   getBlockZ (): number;
   getChunk (): Chunk;
   getDirection (): Vector;
   getNearbyEntities (x: number, y: number, z: number): Collection<Entity>;
   getNearbyEntitiesByType<T extends Entity> (
      clazz: Class<Entity>,
      x_radius: number,
      y_radius: number,
      z_radius: number,
      predicate: Predicate<T>
   ): Collection<T>;
   getNearbyEntitiesByType<T extends Entity> (clazz: Class<T>, radius: number): Collection<T>;
   getNearbyEntitiesByType<T extends Entity> (clazz: Class<T>, xz_radius: number, y_radius: number): Collection<T>;
   getNearbyEntitiesByType<T extends Entity> (
      clazz: Class<T>,
      x_radius: number,
      y_radius: number,
      z_radius: number
   ): Collection<T>;
   getNearbyEntitiesByType<T extends Entity> (
      clazz: Class<T>,
      xz_radius: number,
      y_radius: number,
      predicate: Predicate<T>
   ): Collection<T>;
   getNearbyEntitiesByType<T extends Entity> (clazz: Class<T>, radius: number, predicate: Predicate<T>): Collection<T>;
   getNearbyLivingEntities (radius: number): Collection<LivingEntity>;
   getNearbyLivingEntities (xz_radius: number, y_radius: number): Collection<LivingEntity>;
   getNearbyLivingEntities (x_radius: number, y_radius: number, z_radius: number): Collection<LivingEntity>;
   getNearbyLivingEntities (
      x_radius: number,
      y_radius: number,
      z_radius: number,
      predicate: Predicate<LivingEntity>
   ): Collection<LivingEntity>;
   getNearbyLivingEntities (
      xz_radius: number,
      y_radius: number,
      predicate: Predicate<LivingEntity>
   ): Collection<LivingEntity>;
   getNearbyLivingEntities (radius: number, predicate: Predicate<LivingEntity>): Collection<LivingEntity>;
   getNearbyPlayers (radius: number): Collection<Player>;
   getNearbyPlayers (xz_radius: number, y_radius: number): Collection<Player>;
   getNearbyPlayers (x_radius: number, y_radius: number, z_radius: number): Collection<Player>;
   getNearbyPlayers (
      x_radius: number,
      y_radius: number,
      z_radius: number,
      predicate: Predicate<Player>
   ): Collection<Player>;
   getNearbyPlayers (xz_radius: number, y_radius: number, predicate: Predicate<Player>): Collection<Player>;
   getNearbyPlayers (radius: number, predicate: Predicate<Player>): Collection<Player>;
   getPitch (): number;
   getWorld (): World;
   getX (): number;
   getY (): number;
   getYaw (): number;
   getZ (): number;
   hashCode (): number;
   isChunkLoaded (): boolean;
   isGenerated (): boolean;
   isWorldLoaded (): boolean;
   length (): number;
   lengthSquared (): number;
   static locToBlock (loc: number): number;
   multiply (m: number): Location;
   static normalizePitch (pitch: number): number;
   static normalizeYaw (yaw: number): number;
   serialize (): Map<string, JavaObject>;
   set (x: number, y: number, z: number): Location;
   setDirection (vector: Vector): Location;
   setPitch (pitch: number): void;
   setWorld (world: World): void;
   setX (x: number): void;
   setY (y: number): void;
   setYaw (yaw: number): void;
   setZ (z: number): void;
   subtract (x: number, y: number, z: number): Location;
   subtract (vec: Location): Location;
   subtract (base: Location, x: number, y: number, z: number): Location;
   subtract (vec: Vector): Location;
   toBlockKey (): number;
   toBlockLocation (): Location;
   toCenterLocation (): Location;
   toHighestLocation (): Location;
   toHighestLocation (heightmap: HeightmapType): Location;
   toString (): string;
   toVector (): Vector;
   zero (): Location;
}
export interface Lockable {
   getLock(): string;
   isLocked(): boolean;
   setLock(key: string): void;
}
export class LongGrass extends MaterialData {
   constructor ();
   constructor (species: GrassSpecies);
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): LongGrass;
   getSpecies (): GrassSpecies;
   setSpecies (species: GrassSpecies): void;
   toString (): string;
}
export class LookupProfileEvent extends Event {
   constructor (profile: PlayerProfile);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getPlayerProfile (): PlayerProfile;
}
export interface LoomInventory extends Inventory {}
export interface Lootable {
   clearLootTable(): void;
   getLootTable(): LootTable;
   getSeed(): number;
   hasLootTable(): boolean;
   setLootTable(table: LootTable): void;
   setLootTable(table: LootTable, seed: number): void;
   setSeed(seed: number): void;
}
export interface LootableBlockInventory extends LootableInventory {
   getBlock(): Block;
}
export interface LootableEntityInventory extends LootableInventory {
   getEntity(): Entity;
}
export interface LootableInventory extends Lootable {
   getLastFilled(): number;
   getLastLooted(player: UUID): Long;
   getLastLooted(player: Player): Long;
   getNextRefill(): number;
   hasBeenFilled(): boolean;
   hasPendingRefill(): boolean;
   hasPlayerLooted(player: UUID): boolean;
   hasPlayerLooted(player: Player): boolean;
   isRefillEnabled(): boolean;
   setHasPlayerLooted(player: UUID, looted: boolean): boolean;
   setHasPlayerLooted(player: Player, looted: boolean): boolean;
   setNextRefill(refill_at: number): number;
}
export class LootableInventoryReplenishEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, inventory: LootableInventory);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getInventory (): LootableInventory;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class LootContext extends JavaObject {
   getKiller (): HumanEntity;
   getLocation (): Location;
   getLootedEntity (): Entity;
   getLootingModifier (): number;
   getLuck (): number;
}
export class LootContext$Builder extends JavaObject {
   constructor (location: Location);
   build (): LootContext;
   killer (killer: HumanEntity): LootContext$Builder;
   lootedEntity (looted_entity: Entity): LootContext$Builder;
   lootingModifier (modifier: number): LootContext$Builder;
   luck (luck: number): LootContext$Builder;
}
export class LootGenerateEvent extends WorldEvent implements Cancellable {
   constructor (
      world: World,
      entity: Entity,
      inventory_holder: InventoryHolder,
      loot_table: LootTable,
      loot_context: LootContext,
      items: List<ItemStack>,
      plugin: boolean
   );
   getEntity (): Entity;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getInventoryHolder (): InventoryHolder;
   getLoot (): List<ItemStack>;
   getLootContext (): LootContext;
   getLootTable (): LootTable;
   isCancelled (): boolean;
   isPlugin (): boolean;
   setCancelled (cancel: boolean): void;
   setLoot (loot: Collection<ItemStack>): void;
}
export interface LootTable extends Keyed {
   fillInventory(inventory: Inventory, random: Random, context: LootContext): void;
   populateLoot(random: Random, context: LootContext): Collection<ItemStack>;
}
export class LootTables {
   static ABANDONED_MINESHAFT: LootTables;
   static ARMOR_STAND: LootTables;
   static ARMORER_GIFT: LootTables;
   static BASTION_BRIDGE: LootTables;
   static BASTION_HOGLIN_STABLE: LootTables;
   static BASTION_OTHER: LootTables;
   static BASTION_TREASURE: LootTables;
   static BAT: LootTables;
   static BLAZE: LootTables;
   static BURIED_TREASURE: LootTables;
   static BUTCHER_GIFT: LootTables;
   static CARTOGRAPHER_GIFT: LootTables;
   static CAT: LootTables;
   static CAT_MORNING_GIFT: LootTables;
   static CAVE_SPIDER: LootTables;
   static CHICKEN: LootTables;
   static CLERIC_GIFT: LootTables;
   static COD: LootTables;
   static COW: LootTables;
   static CREEPER: LootTables;
   static DESERT_PYRAMID: LootTables;
   static DOLPHIN: LootTables;
   static DONKEY: LootTables;
   static DROWNED: LootTables;
   static ELDER_GUARDIAN: LootTables;
   static EMPTY: LootTables;
   static END_CITY_TREASURE: LootTables;
   static ENDER_DRAGON: LootTables;
   static ENDERMAN: LootTables;
   static ENDERMITE: LootTables;
   static EVOKER: LootTables;
   static FARMER_GIFT: LootTables;
   static FISHERMAN_GIFT: LootTables;
   static FISHING: LootTables;
   static FISHING_FISH: LootTables;
   static FISHING_JUNK: LootTables;
   static FISHING_TREASURE: LootTables;
   static FLETCHER_GIFT: LootTables;
   static FOX: LootTables;
   static GHAST: LootTables;
   static GIANT: LootTables;
   static GUARDIAN: LootTables;
   static HORSE: LootTables;
   static HUSK: LootTables;
   static IGLOO_CHEST: LootTables;
   static ILLUSIONER: LootTables;
   static IRON_GOLEM: LootTables;
   static JUNGLE_TEMPLE: LootTables;
   static JUNGLE_TEMPLE_DISPENSER: LootTables;
   static LEATHERWORKER_GIFT: LootTables;
   static LIBRARIAN_GIFT: LootTables;
   static LLAMA: LootTables;
   static MAGMA_CUBE: LootTables;
   static MASON_GIFT: LootTables;
   static MOOSHROOM: LootTables;
   static MULE: LootTables;
   static NETHER_BRIDGE: LootTables;
   static OCELOT: LootTables;
   static PANDA: LootTables;
   static PARROT: LootTables;
   static PHANTOM: LootTables;
   static PIG: LootTables;
   static PIGLIN_BARTERING: LootTables;
   static PILLAGER: LootTables;
   static PILLAGER_OUTPOST: LootTables;
   static POLAR_BEAR: LootTables;
   static PUFFERFISH: LootTables;
   static RABBIT: LootTables;
   static RAVAGER: LootTables;
   static RUINED_PORTAL: LootTables;
   static SALMON: LootTables;
   static SHEEP: LootTables;
   static SHEEP_BLACK: LootTables;
   static SHEEP_BLUE: LootTables;
   static SHEEP_BROWN: LootTables;
   static SHEEP_CYAN: LootTables;
   static SHEEP_GRAY: LootTables;
   static SHEEP_GREEN: LootTables;
   static SHEEP_LIGHT_BLUE: LootTables;
   static SHEEP_LIGHT_GRAY: LootTables;
   static SHEEP_LIME: LootTables;
   static SHEEP_MAGENTA: LootTables;
   static SHEEP_ORANGE: LootTables;
   static SHEEP_PINK: LootTables;
   static SHEEP_PURPLE: LootTables;
   static SHEEP_RED: LootTables;
   static SHEEP_WHITE: LootTables;
   static SHEEP_YELLOW: LootTables;
   static SHEPHERD_GIFT: LootTables;
   static SHIPWRECK_MAP: LootTables;
   static SHIPWRECK_SUPPLY: LootTables;
   static SHIPWRECK_TREASURE: LootTables;
   static SHULKER: LootTables;
   static SILVERFISH: LootTables;
   static SIMPLE_DUNGEON: LootTables;
   static SKELETON: LootTables;
   static SKELETON_HORSE: LootTables;
   static SLIME: LootTables;
   static SNOW_GOLEM: LootTables;
   static SPAWN_BONUS_CHEST: LootTables;
   static SPIDER: LootTables;
   static SQUID: LootTables;
   static STRAY: LootTables;
   static STRONGHOLD_CORRIDOR: LootTables;
   static STRONGHOLD_CROSSING: LootTables;
   static STRONGHOLD_LIBRARY: LootTables;
   static TOOLSMITH_GIFT: LootTables;
   static TRADER_LLAMA: LootTables;
   static TROPICAL_FISH: LootTables;
   static TURTLE: LootTables;
   static UNDERWATER_RUIN_BIG: LootTables;
   static UNDERWATER_RUIN_SMALL: LootTables;
   static VEX: LootTables;
   static VILLAGE_ARMORER: LootTables;
   static VILLAGE_BUTCHER: LootTables;
   static VILLAGE_CARTOGRAPHER: LootTables;
   static VILLAGE_DESERT_HOUSE: LootTables;
   static VILLAGE_FISHER: LootTables;
   static VILLAGE_FLETCHER: LootTables;
   static VILLAGE_MASON: LootTables;
   static VILLAGE_PLAINS_HOUSE: LootTables;
   static VILLAGE_SAVANNA_HOUSE: LootTables;
   static VILLAGE_SHEPHERD: LootTables;
   static VILLAGE_SNOWY_HOUSE: LootTables;
   static VILLAGE_TAIGA_HOUSE: LootTables;
   static VILLAGE_TANNERY: LootTables;
   static VILLAGE_TEMPLE: LootTables;
   static VILLAGE_TOOLSMITH: LootTables;
   static VILLAGE_WEAPONSMITH: LootTables;
   static VILLAGER: LootTables;
   static VINDICATOR: LootTables;
   static WANDERING_TRADER: LootTables;
   static WEAPONSMITH_GIFT: LootTables;
   static WITCH: LootTables;
   static WITHER: LootTables;
   static WITHER_SKELETON: LootTables;
   static WOLF: LootTables;
   static WOODLAND_MANSION: LootTables;
   static ZOMBIE: LootTables;
   static ZOMBIE_HORSE: LootTables;
   static ZOMBIE_PIGMAN: LootTables;
   static ZOMBIE_VILLAGER: LootTables;
   getKey (): NamespacedKey;
   getLootTable (): LootTable;
   static valueOf (name: string): LootTables;
   static values (): LootTables[];
}
export interface MagmaCube extends Slime {}
export class MainHand {
   static LEFT: MainHand;
   static RIGHT: MainHand;
   static valueOf (name: string): MainHand;
   static values (): MainHand[];
}
export class ManuallyAbandonedConversationCanceller extends JavaObject implements ConversationCanceller {
   constructor ();
   cancelBasedOnInput (context: ConversationContext, input: string): boolean;
   clone (): ConversationCanceller;
   setConversation (conversation: Conversation): void;
}
export interface MapCanvas {
   drawImage(x: number, y: number, image: Image): void;
   drawText(x: number, y: number, font: MapFont, text: string): void;
   getBasePixel(x: number, y: number): number;
   getCursors(): MapCursorCollection;
   getMapView(): MapView;
   getPixel(x: number, y: number): number;
   setCursors(cursors: MapCursorCollection): void;
   setPixel(x: number, y: number, color: number): void;
}
export class MapCursor extends JavaObject {
   constructor (x: number, y: number, direction: number, type: number, visible: boolean);
   constructor (x: number, y: number, direction: number, type: number, visible: boolean, caption: string);
   constructor (x: number, y: number, direction: number, type: MapCursor$Type, visible: boolean);
   constructor (x: number, y: number, direction: number, type: MapCursor$Type, visible: boolean, caption: string);
   getCaption (): string;
   getDirection (): number;
   getRawType (): number;
   getType (): MapCursor$Type;
   getX (): number;
   getY (): number;
   isVisible (): boolean;
   setCaption (caption: string): void;
   setDirection (direction: number): void;
   setRawType (type: number): void;
   setType (type: MapCursor$Type): void;
   setVisible (visible: boolean): void;
   setX (x: number): void;
   setY (y: number): void;
}
export class MapCursor$Type {
   static BANNER_BLACK: MapCursor$Type;
   static BANNER_BLUE: MapCursor$Type;
   static BANNER_BROWN: MapCursor$Type;
   static BANNER_CYAN: MapCursor$Type;
   static BANNER_GRAY: MapCursor$Type;
   static BANNER_GREEN: MapCursor$Type;
   static BANNER_LIGHT_BLUE: MapCursor$Type;
   static BANNER_LIGHT_GRAY: MapCursor$Type;
   static BANNER_LIME: MapCursor$Type;
   static BANNER_MAGENTA: MapCursor$Type;
   static BANNER_ORANGE: MapCursor$Type;
   static BANNER_PINK: MapCursor$Type;
   static BANNER_PURPLE: MapCursor$Type;
   static BANNER_RED: MapCursor$Type;
   static BANNER_WHITE: MapCursor$Type;
   static BANNER_YELLOW: MapCursor$Type;
   static BLUE_POINTER: MapCursor$Type;
   static GREEN_POINTER: MapCursor$Type;
   static MANSION: MapCursor$Type;
   static RED_MARKER: MapCursor$Type;
   static RED_POINTER: MapCursor$Type;
   static RED_X: MapCursor$Type;
   static SMALL_WHITE_CIRCLE: MapCursor$Type;
   static TEMPLE: MapCursor$Type;
   static WHITE_CIRCLE: MapCursor$Type;
   static WHITE_CROSS: MapCursor$Type;
   static WHITE_POINTER: MapCursor$Type;
   static byValue (value: number): MapCursor$Type;
   getValue (): number;
   static valueOf (name: string): MapCursor$Type;
   static values (): MapCursor$Type[];
}
export class MapCursorCollection extends JavaObject {
   constructor ();
   addCursor (x: number, y: number, direction: number): MapCursor;
   addCursor (x: number, y: number, direction: number, type: number): MapCursor;
   addCursor (x: number, y: number, direction: number, type: number, visible: boolean): MapCursor;
   addCursor (x: number, y: number, direction: number, type: number, visible: boolean, caption: string): MapCursor;
   addCursor (cursor: MapCursor): MapCursor;
   getCursor (index: number): MapCursor;
   removeCursor (cursor: MapCursor): boolean;
   size (): number;
}
export class MapFont extends JavaObject {
   constructor ();
   getChar (ch: char): MapFont$CharacterSprite;
   getHeight (): number;
   getWidth (text: string): number;
   isValid (text: string): boolean;
   setChar (ch: char, sprite: MapFont$CharacterSprite): void;
}
export class MapFont$CharacterSprite extends JavaObject {
   constructor (width: number, height: number, data: boolean[]);
   get (row: number, col: number): boolean;
   getHeight (): number;
   getWidth (): number;
}
export class MapInitializeEvent extends ServerEvent {
   constructor (map_view: MapView);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getMap (): MapView;
}
export interface MapMeta extends ItemMeta {
   clone(): MapMeta;
   getColor(): Color;
   getLocationName(): string;
   getMapId(): number;
   getMapView(): MapView;
   hasColor(): boolean;
   hasLocationName(): boolean;
   hasMapId(): boolean;
   hasMapView(): boolean;
   isScaling(): boolean;
   setColor(color: Color): void;
   setLocationName(name: string): void;
   setMapId(id: number): void;
   setMapView(map: MapView): void;
   setScaling(value: boolean): void;
}
export class MapPalette extends JavaObject {
   static getColor (index: number): Color;
   static imageToBytes (image: Image): number[];
   static matchColor (r: number, g: number, b: number): number;
   static matchColor (color: Color): number;
   static resizeImage (image: Image): BufferedImage;
}
export class MapRenderer extends JavaObject {
   constructor ();
   constructor (contextual: boolean);
   initialize (map: MapView): void;
   isContextual (): boolean;
   render (map: MapView, canvas: MapCanvas, player: Player): void;
}
export interface MapView {
   addRenderer(renderer: MapRenderer): void;
   getCenterX(): number;
   getCenterZ(): number;
   getId(): number;
   getRenderers(): List<MapRenderer>;
   getScale(): MapView$Scale;
   getWorld(): World;
   isLocked(): boolean;
   isTrackingPosition(): boolean;
   isUnlimitedTracking(): boolean;
   isVirtual(): boolean;
   removeRenderer(renderer: MapRenderer): boolean;
   setCenterX(x: number): void;
   setCenterZ(z: number): void;
   setLocked(locked: boolean): void;
   setScale(scale: MapView$Scale): void;
   setTrackingPosition(tracking_position: boolean): void;
   setUnlimitedTracking(unlimited: boolean): void;
   setWorld(world: World): void;
}
export class MapView$Scale {
   static CLOSE: MapView$Scale;
   static CLOSEST: MapView$Scale;
   static FAR: MapView$Scale;
   static FARTHEST: MapView$Scale;
   static NORMAL: MapView$Scale;
   getValue (): number;
   static valueOf (value: number): MapView$Scale;
   static valueOf (name: string): MapView$Scale;
   static values (): MapView$Scale[];
}
export class Material {
   static ACACIA_BOAT: Material;
   static ACACIA_BUTTON: Material;
   static ACACIA_DOOR: Material;
   static ACACIA_FENCE: Material;
   static ACACIA_FENCE_GATE: Material;
   static ACACIA_LEAVES: Material;
   static ACACIA_LOG: Material;
   static ACACIA_PLANKS: Material;
   static ACACIA_PRESSURE_PLATE: Material;
   static ACACIA_SAPLING: Material;
   static ACACIA_SIGN: Material;
   static ACACIA_SLAB: Material;
   static ACACIA_STAIRS: Material;
   static ACACIA_TRAPDOOR: Material;
   static ACACIA_WALL_SIGN: Material;
   static ACACIA_WOOD: Material;
   static ACTIVATOR_RAIL: Material;
   static AIR: Material;
   static ALLIUM: Material;
   static ANCIENT_DEBRIS: Material;
   static ANDESITE: Material;
   static ANDESITE_SLAB: Material;
   static ANDESITE_STAIRS: Material;
   static ANDESITE_WALL: Material;
   static ANVIL: Material;
   static APPLE: Material;
   static ARMOR_STAND: Material;
   static ARROW: Material;
   static ATTACHED_MELON_STEM: Material;
   static ATTACHED_PUMPKIN_STEM: Material;
   static AZURE_BLUET: Material;
   static BAKED_POTATO: Material;
   static BAMBOO: Material;
   static BAMBOO_SAPLING: Material;
   static BARREL: Material;
   static BARRIER: Material;
   static BASALT: Material;
   static BAT_SPAWN_EGG: Material;
   static BEACON: Material;
   static BEDROCK: Material;
   static BEE_NEST: Material;
   static BEE_SPAWN_EGG: Material;
   static BEEF: Material;
   static BEEHIVE: Material;
   static BEETROOT: Material;
   static BEETROOT_SEEDS: Material;
   static BEETROOT_SOUP: Material;
   static BEETROOTS: Material;
   static BELL: Material;
   static BIRCH_BOAT: Material;
   static BIRCH_BUTTON: Material;
   static BIRCH_DOOR: Material;
   static BIRCH_FENCE: Material;
   static BIRCH_FENCE_GATE: Material;
   static BIRCH_LEAVES: Material;
   static BIRCH_LOG: Material;
   static BIRCH_PLANKS: Material;
   static BIRCH_PRESSURE_PLATE: Material;
   static BIRCH_SAPLING: Material;
   static BIRCH_SIGN: Material;
   static BIRCH_SLAB: Material;
   static BIRCH_STAIRS: Material;
   static BIRCH_TRAPDOOR: Material;
   static BIRCH_WALL_SIGN: Material;
   static BIRCH_WOOD: Material;
   static BLACK_BANNER: Material;
   static BLACK_BED: Material;
   static BLACK_CARPET: Material;
   static BLACK_CONCRETE: Material;
   static BLACK_CONCRETE_POWDER: Material;
   static BLACK_DYE: Material;
   static BLACK_GLAZED_TERRACOTTA: Material;
   static BLACK_SHULKER_BOX: Material;
   static BLACK_STAINED_GLASS: Material;
   static BLACK_STAINED_GLASS_PANE: Material;
   static BLACK_TERRACOTTA: Material;
   static BLACK_WALL_BANNER: Material;
   static BLACK_WOOL: Material;
   static BLACKSTONE: Material;
   static BLACKSTONE_SLAB: Material;
   static BLACKSTONE_STAIRS: Material;
   static BLACKSTONE_WALL: Material;
   static BLAST_FURNACE: Material;
   static BLAZE_POWDER: Material;
   static BLAZE_ROD: Material;
   static BLAZE_SPAWN_EGG: Material;
   static BLUE_BANNER: Material;
   static BLUE_BED: Material;
   static BLUE_CARPET: Material;
   static BLUE_CONCRETE: Material;
   static BLUE_CONCRETE_POWDER: Material;
   static BLUE_DYE: Material;
   static BLUE_GLAZED_TERRACOTTA: Material;
   static BLUE_ICE: Material;
   static BLUE_ORCHID: Material;
   static BLUE_SHULKER_BOX: Material;
   static BLUE_STAINED_GLASS: Material;
   static BLUE_STAINED_GLASS_PANE: Material;
   static BLUE_TERRACOTTA: Material;
   static BLUE_WALL_BANNER: Material;
   static BLUE_WOOL: Material;
   static BONE: Material;
   static BONE_BLOCK: Material;
   static BONE_MEAL: Material;
   static BOOK: Material;
   static BOOKSHELF: Material;
   static BOW: Material;
   static BOWL: Material;
   static BRAIN_CORAL: Material;
   static BRAIN_CORAL_BLOCK: Material;
   static BRAIN_CORAL_FAN: Material;
   static BRAIN_CORAL_WALL_FAN: Material;
   static BREAD: Material;
   static BREWING_STAND: Material;
   static BRICK: Material;
   static BRICK_SLAB: Material;
   static BRICK_STAIRS: Material;
   static BRICK_WALL: Material;
   static BRICKS: Material;
   static BROWN_BANNER: Material;
   static BROWN_BED: Material;
   static BROWN_CARPET: Material;
   static BROWN_CONCRETE: Material;
   static BROWN_CONCRETE_POWDER: Material;
   static BROWN_DYE: Material;
   static BROWN_GLAZED_TERRACOTTA: Material;
   static BROWN_MUSHROOM: Material;
   static BROWN_MUSHROOM_BLOCK: Material;
   static BROWN_SHULKER_BOX: Material;
   static BROWN_STAINED_GLASS: Material;
   static BROWN_STAINED_GLASS_PANE: Material;
   static BROWN_TERRACOTTA: Material;
   static BROWN_WALL_BANNER: Material;
   static BROWN_WOOL: Material;
   static BUBBLE_COLUMN: Material;
   static BUBBLE_CORAL: Material;
   static BUBBLE_CORAL_BLOCK: Material;
   static BUBBLE_CORAL_FAN: Material;
   static BUBBLE_CORAL_WALL_FAN: Material;
   static BUCKET: Material;
   static CACTUS: Material;
   static CAKE: Material;
   static CAMPFIRE: Material;
   static CARROT: Material;
   static CARROT_ON_A_STICK: Material;
   static CARROTS: Material;
   static CARTOGRAPHY_TABLE: Material;
   static CARVED_PUMPKIN: Material;
   static CAT_SPAWN_EGG: Material;
   static CAULDRON: Material;
   static CAVE_AIR: Material;
   static CAVE_SPIDER_SPAWN_EGG: Material;
   static CHAIN: Material;
   static CHAIN_COMMAND_BLOCK: Material;
   static CHAINMAIL_BOOTS: Material;
   static CHAINMAIL_CHESTPLATE: Material;
   static CHAINMAIL_HELMET: Material;
   static CHAINMAIL_LEGGINGS: Material;
   static CHARCOAL: Material;
   static CHEST: Material;
   static CHEST_MINECART: Material;
   static CHICKEN: Material;
   static CHICKEN_SPAWN_EGG: Material;
   static CHIPPED_ANVIL: Material;
   static CHISELED_NETHER_BRICKS: Material;
   static CHISELED_POLISHED_BLACKSTONE: Material;
   static CHISELED_QUARTZ_BLOCK: Material;
   static CHISELED_RED_SANDSTONE: Material;
   static CHISELED_SANDSTONE: Material;
   static CHISELED_STONE_BRICKS: Material;
   static CHORUS_FLOWER: Material;
   static CHORUS_FRUIT: Material;
   static CHORUS_PLANT: Material;
   static CLAY: Material;
   static CLAY_BALL: Material;
   static CLOCK: Material;
   static COAL: Material;
   static COAL_BLOCK: Material;
   static COAL_ORE: Material;
   static COARSE_DIRT: Material;
   static COBBLESTONE: Material;
   static COBBLESTONE_SLAB: Material;
   static COBBLESTONE_STAIRS: Material;
   static COBBLESTONE_WALL: Material;
   static COBWEB: Material;
   static COCOA: Material;
   static COCOA_BEANS: Material;
   static COD: Material;
   static COD_BUCKET: Material;
   static COD_SPAWN_EGG: Material;
   static COMMAND_BLOCK: Material;
   static COMMAND_BLOCK_MINECART: Material;
   static COMPARATOR: Material;
   static COMPASS: Material;
   static COMPOSTER: Material;
   static CONDUIT: Material;
   static COOKED_BEEF: Material;
   static COOKED_CHICKEN: Material;
   static COOKED_COD: Material;
   static COOKED_MUTTON: Material;
   static COOKED_PORKCHOP: Material;
   static COOKED_RABBIT: Material;
   static COOKED_SALMON: Material;
   static COOKIE: Material;
   static CORNFLOWER: Material;
   static COW_SPAWN_EGG: Material;
   static CRACKED_NETHER_BRICKS: Material;
   static CRACKED_POLISHED_BLACKSTONE_BRICKS: Material;
   static CRACKED_STONE_BRICKS: Material;
   static CRAFTING_TABLE: Material;
   static CREEPER_BANNER_PATTERN: Material;
   static CREEPER_HEAD: Material;
   static CREEPER_SPAWN_EGG: Material;
   static CREEPER_WALL_HEAD: Material;
   static CRIMSON_BUTTON: Material;
   static CRIMSON_DOOR: Material;
   static CRIMSON_FENCE: Material;
   static CRIMSON_FENCE_GATE: Material;
   static CRIMSON_FUNGUS: Material;
   static CRIMSON_HYPHAE: Material;
   static CRIMSON_NYLIUM: Material;
   static CRIMSON_PLANKS: Material;
   static CRIMSON_PRESSURE_PLATE: Material;
   static CRIMSON_ROOTS: Material;
   static CRIMSON_SIGN: Material;
   static CRIMSON_SLAB: Material;
   static CRIMSON_STAIRS: Material;
   static CRIMSON_STEM: Material;
   static CRIMSON_TRAPDOOR: Material;
   static CRIMSON_WALL_SIGN: Material;
   static CROSSBOW: Material;
   static CRYING_OBSIDIAN: Material;
   static CUT_RED_SANDSTONE: Material;
   static CUT_RED_SANDSTONE_SLAB: Material;
   static CUT_SANDSTONE: Material;
   static CUT_SANDSTONE_SLAB: Material;
   static CYAN_BANNER: Material;
   static CYAN_BED: Material;
   static CYAN_CARPET: Material;
   static CYAN_CONCRETE: Material;
   static CYAN_CONCRETE_POWDER: Material;
   static CYAN_DYE: Material;
   static CYAN_GLAZED_TERRACOTTA: Material;
   static CYAN_SHULKER_BOX: Material;
   static CYAN_STAINED_GLASS: Material;
   static CYAN_STAINED_GLASS_PANE: Material;
   static CYAN_TERRACOTTA: Material;
   static CYAN_WALL_BANNER: Material;
   static CYAN_WOOL: Material;
   static DAMAGED_ANVIL: Material;
   static DANDELION: Material;
   static DARK_OAK_BOAT: Material;
   static DARK_OAK_BUTTON: Material;
   static DARK_OAK_DOOR: Material;
   static DARK_OAK_FENCE: Material;
   static DARK_OAK_FENCE_GATE: Material;
   static DARK_OAK_LEAVES: Material;
   static DARK_OAK_LOG: Material;
   static DARK_OAK_PLANKS: Material;
   static DARK_OAK_PRESSURE_PLATE: Material;
   static DARK_OAK_SAPLING: Material;
   static DARK_OAK_SIGN: Material;
   static DARK_OAK_SLAB: Material;
   static DARK_OAK_STAIRS: Material;
   static DARK_OAK_TRAPDOOR: Material;
   static DARK_OAK_WALL_SIGN: Material;
   static DARK_OAK_WOOD: Material;
   static DARK_PRISMARINE: Material;
   static DARK_PRISMARINE_SLAB: Material;
   static DARK_PRISMARINE_STAIRS: Material;
   static DAYLIGHT_DETECTOR: Material;
   static DEAD_BRAIN_CORAL: Material;
   static DEAD_BRAIN_CORAL_BLOCK: Material;
   static DEAD_BRAIN_CORAL_FAN: Material;
   static DEAD_BRAIN_CORAL_WALL_FAN: Material;
   static DEAD_BUBBLE_CORAL: Material;
   static DEAD_BUBBLE_CORAL_BLOCK: Material;
   static DEAD_BUBBLE_CORAL_FAN: Material;
   static DEAD_BUBBLE_CORAL_WALL_FAN: Material;
   static DEAD_BUSH: Material;
   static DEAD_FIRE_CORAL: Material;
   static DEAD_FIRE_CORAL_BLOCK: Material;
   static DEAD_FIRE_CORAL_FAN: Material;
   static DEAD_FIRE_CORAL_WALL_FAN: Material;
   static DEAD_HORN_CORAL: Material;
   static DEAD_HORN_CORAL_BLOCK: Material;
   static DEAD_HORN_CORAL_FAN: Material;
   static DEAD_HORN_CORAL_WALL_FAN: Material;
   static DEAD_TUBE_CORAL: Material;
   static DEAD_TUBE_CORAL_BLOCK: Material;
   static DEAD_TUBE_CORAL_FAN: Material;
   static DEAD_TUBE_CORAL_WALL_FAN: Material;
   static DEBUG_STICK: Material;
   static DETECTOR_RAIL: Material;
   static DIAMOND: Material;
   static DIAMOND_AXE: Material;
   static DIAMOND_BLOCK: Material;
   static DIAMOND_BOOTS: Material;
   static DIAMOND_CHESTPLATE: Material;
   static DIAMOND_HELMET: Material;
   static DIAMOND_HOE: Material;
   static DIAMOND_HORSE_ARMOR: Material;
   static DIAMOND_LEGGINGS: Material;
   static DIAMOND_ORE: Material;
   static DIAMOND_PICKAXE: Material;
   static DIAMOND_SHOVEL: Material;
   static DIAMOND_SWORD: Material;
   static DIORITE: Material;
   static DIORITE_SLAB: Material;
   static DIORITE_STAIRS: Material;
   static DIORITE_WALL: Material;
   static DIRT: Material;
   static DISPENSER: Material;
   static DOLPHIN_SPAWN_EGG: Material;
   static DONKEY_SPAWN_EGG: Material;
   static DRAGON_BREATH: Material;
   static DRAGON_EGG: Material;
   static DRAGON_HEAD: Material;
   static DRAGON_WALL_HEAD: Material;
   static DRIED_KELP: Material;
   static DRIED_KELP_BLOCK: Material;
   static DROPPER: Material;
   static DROWNED_SPAWN_EGG: Material;
   static EGG: Material;
   static ELDER_GUARDIAN_SPAWN_EGG: Material;
   static ELYTRA: Material;
   static EMERALD: Material;
   static EMERALD_BLOCK: Material;
   static EMERALD_ORE: Material;
   static ENCHANTED_BOOK: Material;
   static ENCHANTED_GOLDEN_APPLE: Material;
   static ENCHANTING_TABLE: Material;
   static END_CRYSTAL: Material;
   static END_GATEWAY: Material;
   static END_PORTAL: Material;
   static END_PORTAL_FRAME: Material;
   static END_ROD: Material;
   static END_STONE: Material;
   static END_STONE_BRICK_SLAB: Material;
   static END_STONE_BRICK_STAIRS: Material;
   static END_STONE_BRICK_WALL: Material;
   static END_STONE_BRICKS: Material;
   static ENDER_CHEST: Material;
   static ENDER_EYE: Material;
   static ENDER_PEARL: Material;
   static ENDERMAN_SPAWN_EGG: Material;
   static ENDERMITE_SPAWN_EGG: Material;
   static EVOKER_SPAWN_EGG: Material;
   static EXPERIENCE_BOTTLE: Material;
   static FARMLAND: Material;
   static FEATHER: Material;
   static FERMENTED_SPIDER_EYE: Material;
   static FERN: Material;
   static FILLED_MAP: Material;
   static FIRE: Material;
   static FIRE_CHARGE: Material;
   static FIRE_CORAL: Material;
   static FIRE_CORAL_BLOCK: Material;
   static FIRE_CORAL_FAN: Material;
   static FIRE_CORAL_WALL_FAN: Material;
   static FIREWORK_ROCKET: Material;
   static FIREWORK_STAR: Material;
   static FISHING_ROD: Material;
   static FLETCHING_TABLE: Material;
   static FLINT: Material;
   static FLINT_AND_STEEL: Material;
   static FLOWER_BANNER_PATTERN: Material;
   static FLOWER_POT: Material;
   static FOX_SPAWN_EGG: Material;
   static FROSTED_ICE: Material;
   static FURNACE: Material;
   static FURNACE_MINECART: Material;
   static GHAST_SPAWN_EGG: Material;
   static GHAST_TEAR: Material;
   static GILDED_BLACKSTONE: Material;
   static GLASS: Material;
   static GLASS_BOTTLE: Material;
   static GLASS_PANE: Material;
   static GLISTERING_MELON_SLICE: Material;
   static GLOBE_BANNER_PATTERN: Material;
   static GLOWSTONE: Material;
   static GLOWSTONE_DUST: Material;
   static GOLD_BLOCK: Material;
   static GOLD_INGOT: Material;
   static GOLD_NUGGET: Material;
   static GOLD_ORE: Material;
   static GOLDEN_APPLE: Material;
   static GOLDEN_AXE: Material;
   static GOLDEN_BOOTS: Material;
   static GOLDEN_CARROT: Material;
   static GOLDEN_CHESTPLATE: Material;
   static GOLDEN_HELMET: Material;
   static GOLDEN_HOE: Material;
   static GOLDEN_HORSE_ARMOR: Material;
   static GOLDEN_LEGGINGS: Material;
   static GOLDEN_PICKAXE: Material;
   static GOLDEN_SHOVEL: Material;
   static GOLDEN_SWORD: Material;
   static GRANITE: Material;
   static GRANITE_SLAB: Material;
   static GRANITE_STAIRS: Material;
   static GRANITE_WALL: Material;
   static GRASS: Material;
   static GRASS_BLOCK: Material;
   static GRASS_PATH: Material;
   static GRAVEL: Material;
   static GRAY_BANNER: Material;
   static GRAY_BED: Material;
   static GRAY_CARPET: Material;
   static GRAY_CONCRETE: Material;
   static GRAY_CONCRETE_POWDER: Material;
   static GRAY_DYE: Material;
   static GRAY_GLAZED_TERRACOTTA: Material;
   static GRAY_SHULKER_BOX: Material;
   static GRAY_STAINED_GLASS: Material;
   static GRAY_STAINED_GLASS_PANE: Material;
   static GRAY_TERRACOTTA: Material;
   static GRAY_WALL_BANNER: Material;
   static GRAY_WOOL: Material;
   static GREEN_BANNER: Material;
   static GREEN_BED: Material;
   static GREEN_CARPET: Material;
   static GREEN_CONCRETE: Material;
   static GREEN_CONCRETE_POWDER: Material;
   static GREEN_DYE: Material;
   static GREEN_GLAZED_TERRACOTTA: Material;
   static GREEN_SHULKER_BOX: Material;
   static GREEN_STAINED_GLASS: Material;
   static GREEN_STAINED_GLASS_PANE: Material;
   static GREEN_TERRACOTTA: Material;
   static GREEN_WALL_BANNER: Material;
   static GREEN_WOOL: Material;
   static GRINDSTONE: Material;
   static GUARDIAN_SPAWN_EGG: Material;
   static GUNPOWDER: Material;
   static HAY_BLOCK: Material;
   static HEART_OF_THE_SEA: Material;
   static HEAVY_WEIGHTED_PRESSURE_PLATE: Material;
   static HOGLIN_SPAWN_EGG: Material;
   static HONEY_BLOCK: Material;
   static HONEY_BOTTLE: Material;
   static HONEYCOMB: Material;
   static HONEYCOMB_BLOCK: Material;
   static HOPPER: Material;
   static HOPPER_MINECART: Material;
   static HORN_CORAL: Material;
   static HORN_CORAL_BLOCK: Material;
   static HORN_CORAL_FAN: Material;
   static HORN_CORAL_WALL_FAN: Material;
   static HORSE_SPAWN_EGG: Material;
   static HUSK_SPAWN_EGG: Material;
   static ICE: Material;
   static INFESTED_CHISELED_STONE_BRICKS: Material;
   static INFESTED_COBBLESTONE: Material;
   static INFESTED_CRACKED_STONE_BRICKS: Material;
   static INFESTED_MOSSY_STONE_BRICKS: Material;
   static INFESTED_STONE: Material;
   static INFESTED_STONE_BRICKS: Material;
   static INK_SAC: Material;
   static IRON_AXE: Material;
   static IRON_BARS: Material;
   static IRON_BLOCK: Material;
   static IRON_BOOTS: Material;
   static IRON_CHESTPLATE: Material;
   static IRON_DOOR: Material;
   static IRON_HELMET: Material;
   static IRON_HOE: Material;
   static IRON_HORSE_ARMOR: Material;
   static IRON_INGOT: Material;
   static IRON_LEGGINGS: Material;
   static IRON_NUGGET: Material;
   static IRON_ORE: Material;
   static IRON_PICKAXE: Material;
   static IRON_SHOVEL: Material;
   static IRON_SWORD: Material;
   static IRON_TRAPDOOR: Material;
   static ITEM_FRAME: Material;
   static JACK_O_LANTERN: Material;
   static JIGSAW: Material;
   static JUKEBOX: Material;
   static JUNGLE_BOAT: Material;
   static JUNGLE_BUTTON: Material;
   static JUNGLE_DOOR: Material;
   static JUNGLE_FENCE: Material;
   static JUNGLE_FENCE_GATE: Material;
   static JUNGLE_LEAVES: Material;
   static JUNGLE_LOG: Material;
   static JUNGLE_PLANKS: Material;
   static JUNGLE_PRESSURE_PLATE: Material;
   static JUNGLE_SAPLING: Material;
   static JUNGLE_SIGN: Material;
   static JUNGLE_SLAB: Material;
   static JUNGLE_STAIRS: Material;
   static JUNGLE_TRAPDOOR: Material;
   static JUNGLE_WALL_SIGN: Material;
   static JUNGLE_WOOD: Material;
   static KELP: Material;
   static KELP_PLANT: Material;
   static KNOWLEDGE_BOOK: Material;
   static LADDER: Material;
   static LANTERN: Material;
   static LAPIS_BLOCK: Material;
   static LAPIS_LAZULI: Material;
   static LAPIS_ORE: Material;
   static LARGE_FERN: Material;
   static LAVA: Material;
   static LAVA_BUCKET: Material;
   static LEAD: Material;
   static LEATHER: Material;
   static LEATHER_BOOTS: Material;
   static LEATHER_CHESTPLATE: Material;
   static LEATHER_HELMET: Material;
   static LEATHER_HORSE_ARMOR: Material;
   static LEATHER_LEGGINGS: Material;
   static LECTERN: Material;
   static LEGACY_ACACIA_DOOR: Material;
   static LEGACY_ACACIA_DOOR_ITEM: Material;
   static LEGACY_ACACIA_FENCE: Material;
   static LEGACY_ACACIA_FENCE_GATE: Material;
   static LEGACY_ACACIA_STAIRS: Material;
   static LEGACY_ACTIVATOR_RAIL: Material;
   static LEGACY_AIR: Material;
   static LEGACY_ANVIL: Material;
   static LEGACY_APPLE: Material;
   static LEGACY_ARMOR_STAND: Material;
   static LEGACY_ARROW: Material;
   static LEGACY_BAKED_POTATO: Material;
   static LEGACY_BANNER: Material;
   static LEGACY_BARRIER: Material;
   static LEGACY_BEACON: Material;
   static LEGACY_BED: Material;
   static LEGACY_BED_BLOCK: Material;
   static LEGACY_BEDROCK: Material;
   static LEGACY_BEETROOT: Material;
   static LEGACY_BEETROOT_BLOCK: Material;
   static LEGACY_BEETROOT_SEEDS: Material;
   static LEGACY_BEETROOT_SOUP: Material;
   static LEGACY_BIRCH_DOOR: Material;
   static LEGACY_BIRCH_DOOR_ITEM: Material;
   static LEGACY_BIRCH_FENCE: Material;
   static LEGACY_BIRCH_FENCE_GATE: Material;
   static LEGACY_BIRCH_WOOD_STAIRS: Material;
   static LEGACY_BLACK_GLAZED_TERRACOTTA: Material;
   static LEGACY_BLACK_SHULKER_BOX: Material;
   static LEGACY_BLAZE_POWDER: Material;
   static LEGACY_BLAZE_ROD: Material;
   static LEGACY_BLUE_GLAZED_TERRACOTTA: Material;
   static LEGACY_BLUE_SHULKER_BOX: Material;
   static LEGACY_BOAT: Material;
   static LEGACY_BOAT_ACACIA: Material;
   static LEGACY_BOAT_BIRCH: Material;
   static LEGACY_BOAT_DARK_OAK: Material;
   static LEGACY_BOAT_JUNGLE: Material;
   static LEGACY_BOAT_SPRUCE: Material;
   static LEGACY_BONE: Material;
   static LEGACY_BONE_BLOCK: Material;
   static LEGACY_BOOK: Material;
   static LEGACY_BOOK_AND_QUILL: Material;
   static LEGACY_BOOKSHELF: Material;
   static LEGACY_BOW: Material;
   static LEGACY_BOWL: Material;
   static LEGACY_BREAD: Material;
   static LEGACY_BREWING_STAND: Material;
   static LEGACY_BREWING_STAND_ITEM: Material;
   static LEGACY_BRICK: Material;
   static LEGACY_BRICK_STAIRS: Material;
   static LEGACY_BROWN_GLAZED_TERRACOTTA: Material;
   static LEGACY_BROWN_MUSHROOM: Material;
   static LEGACY_BROWN_SHULKER_BOX: Material;
   static LEGACY_BUCKET: Material;
   static LEGACY_BURNING_FURNACE: Material;
   static LEGACY_CACTUS: Material;
   static LEGACY_CAKE: Material;
   static LEGACY_CAKE_BLOCK: Material;
   static LEGACY_CARPET: Material;
   static LEGACY_CARROT: Material;
   static LEGACY_CARROT_ITEM: Material;
   static LEGACY_CARROT_STICK: Material;
   static LEGACY_CAULDRON: Material;
   static LEGACY_CAULDRON_ITEM: Material;
   static LEGACY_CHAINMAIL_BOOTS: Material;
   static LEGACY_CHAINMAIL_CHESTPLATE: Material;
   static LEGACY_CHAINMAIL_HELMET: Material;
   static LEGACY_CHAINMAIL_LEGGINGS: Material;
   static LEGACY_CHEST: Material;
   static LEGACY_CHORUS_FLOWER: Material;
   static LEGACY_CHORUS_FRUIT: Material;
   static LEGACY_CHORUS_FRUIT_POPPED: Material;
   static LEGACY_CHORUS_PLANT: Material;
   static LEGACY_CLAY: Material;
   static LEGACY_CLAY_BALL: Material;
   static LEGACY_CLAY_BRICK: Material;
   static LEGACY_COAL: Material;
   static LEGACY_COAL_BLOCK: Material;
   static LEGACY_COAL_ORE: Material;
   static LEGACY_COBBLE_WALL: Material;
   static LEGACY_COBBLESTONE: Material;
   static LEGACY_COBBLESTONE_STAIRS: Material;
   static LEGACY_COCOA: Material;
   static LEGACY_COMMAND: Material;
   static LEGACY_COMMAND_CHAIN: Material;
   static LEGACY_COMMAND_MINECART: Material;
   static LEGACY_COMMAND_REPEATING: Material;
   static LEGACY_COMPASS: Material;
   static LEGACY_CONCRETE: Material;
   static LEGACY_CONCRETE_POWDER: Material;
   static LEGACY_COOKED_BEEF: Material;
   static LEGACY_COOKED_CHICKEN: Material;
   static LEGACY_COOKED_FISH: Material;
   static LEGACY_COOKED_MUTTON: Material;
   static LEGACY_COOKED_RABBIT: Material;
   static LEGACY_COOKIE: Material;
   static LEGACY_CROPS: Material;
   static LEGACY_CYAN_GLAZED_TERRACOTTA: Material;
   static LEGACY_CYAN_SHULKER_BOX: Material;
   static LEGACY_DARK_OAK_DOOR: Material;
   static LEGACY_DARK_OAK_DOOR_ITEM: Material;
   static LEGACY_DARK_OAK_FENCE: Material;
   static LEGACY_DARK_OAK_FENCE_GATE: Material;
   static LEGACY_DARK_OAK_STAIRS: Material;
   static LEGACY_DAYLIGHT_DETECTOR: Material;
   static LEGACY_DAYLIGHT_DETECTOR_INVERTED: Material;
   static LEGACY_DEAD_BUSH: Material;
   static LEGACY_DETECTOR_RAIL: Material;
   static LEGACY_DIAMOND: Material;
   static LEGACY_DIAMOND_AXE: Material;
   static LEGACY_DIAMOND_BARDING: Material;
   static LEGACY_DIAMOND_BLOCK: Material;
   static LEGACY_DIAMOND_BOOTS: Material;
   static LEGACY_DIAMOND_CHESTPLATE: Material;
   static LEGACY_DIAMOND_HELMET: Material;
   static LEGACY_DIAMOND_HOE: Material;
   static LEGACY_DIAMOND_LEGGINGS: Material;
   static LEGACY_DIAMOND_ORE: Material;
   static LEGACY_DIAMOND_PICKAXE: Material;
   static LEGACY_DIAMOND_SPADE: Material;
   static LEGACY_DIAMOND_SWORD: Material;
   static LEGACY_DIODE: Material;
   static LEGACY_DIODE_BLOCK_OFF: Material;
   static LEGACY_DIODE_BLOCK_ON: Material;
   static LEGACY_DIRT: Material;
   static LEGACY_DISPENSER: Material;
   static LEGACY_DOUBLE_PLANT: Material;
   static LEGACY_DOUBLE_STEP: Material;
   static LEGACY_DOUBLE_STONE_SLAB2: Material;
   static LEGACY_DRAGON_EGG: Material;
   static LEGACY_DRAGONS_BREATH: Material;
   static LEGACY_DROPPER: Material;
   static LEGACY_EGG: Material;
   static LEGACY_ELYTRA: Material;
   static LEGACY_EMERALD: Material;
   static LEGACY_EMERALD_BLOCK: Material;
   static LEGACY_EMERALD_ORE: Material;
   static LEGACY_EMPTY_MAP: Material;
   static LEGACY_ENCHANTED_BOOK: Material;
   static LEGACY_ENCHANTMENT_TABLE: Material;
   static LEGACY_END_BRICKS: Material;
   static LEGACY_END_CRYSTAL: Material;
   static LEGACY_END_GATEWAY: Material;
   static LEGACY_END_ROD: Material;
   static LEGACY_ENDER_CHEST: Material;
   static LEGACY_ENDER_PEARL: Material;
   static LEGACY_ENDER_PORTAL: Material;
   static LEGACY_ENDER_PORTAL_FRAME: Material;
   static LEGACY_ENDER_STONE: Material;
   static LEGACY_EXP_BOTTLE: Material;
   static LEGACY_EXPLOSIVE_MINECART: Material;
   static LEGACY_EYE_OF_ENDER: Material;
   static LEGACY_FEATHER: Material;
   static LEGACY_FENCE: Material;
   static LEGACY_FENCE_GATE: Material;
   static LEGACY_FERMENTED_SPIDER_EYE: Material;
   static LEGACY_FIRE: Material;
   static LEGACY_FIREBALL: Material;
   static LEGACY_FIREWORK: Material;
   static LEGACY_FIREWORK_CHARGE: Material;
   static LEGACY_FISHING_ROD: Material;
   static LEGACY_FLINT: Material;
   static LEGACY_FLINT_AND_STEEL: Material;
   static LEGACY_FLOWER_POT: Material;
   static LEGACY_FLOWER_POT_ITEM: Material;
   static LEGACY_FROSTED_ICE: Material;
   static LEGACY_FURNACE: Material;
   static LEGACY_GHAST_TEAR: Material;
   static LEGACY_GLASS: Material;
   static LEGACY_GLASS_BOTTLE: Material;
   static LEGACY_GLOWING_REDSTONE_ORE: Material;
   static LEGACY_GLOWSTONE: Material;
   static LEGACY_GLOWSTONE_DUST: Material;
   static LEGACY_GOLD_AXE: Material;
   static LEGACY_GOLD_BARDING: Material;
   static LEGACY_GOLD_BLOCK: Material;
   static LEGACY_GOLD_BOOTS: Material;
   static LEGACY_GOLD_CHESTPLATE: Material;
   static LEGACY_GOLD_HELMET: Material;
   static LEGACY_GOLD_HOE: Material;
   static LEGACY_GOLD_INGOT: Material;
   static LEGACY_GOLD_LEGGINGS: Material;
   static LEGACY_GOLD_NUGGET: Material;
   static LEGACY_GOLD_ORE: Material;
   static LEGACY_GOLD_PICKAXE: Material;
   static LEGACY_GOLD_PLATE: Material;
   static LEGACY_GOLD_RECORD: Material;
   static LEGACY_GOLD_SPADE: Material;
   static LEGACY_GOLD_SWORD: Material;
   static LEGACY_GOLDEN_APPLE: Material;
   static LEGACY_GOLDEN_CARROT: Material;
   static LEGACY_GRASS: Material;
   static LEGACY_GRASS_PATH: Material;
   static LEGACY_GRAVEL: Material;
   static LEGACY_GRAY_GLAZED_TERRACOTTA: Material;
   static LEGACY_GRAY_SHULKER_BOX: Material;
   static LEGACY_GREEN_GLAZED_TERRACOTTA: Material;
   static LEGACY_GREEN_RECORD: Material;
   static LEGACY_GREEN_SHULKER_BOX: Material;
   static LEGACY_GRILLED_PORK: Material;
   static LEGACY_HARD_CLAY: Material;
   static LEGACY_HAY_BLOCK: Material;
   static LEGACY_HOPPER: Material;
   static LEGACY_HOPPER_MINECART: Material;
   static LEGACY_HUGE_MUSHROOM_1: Material;
   static LEGACY_HUGE_MUSHROOM_2: Material;
   static LEGACY_ICE: Material;
   static LEGACY_INK_SACK: Material;
   static LEGACY_IRON_AXE: Material;
   static LEGACY_IRON_BARDING: Material;
   static LEGACY_IRON_BLOCK: Material;
   static LEGACY_IRON_BOOTS: Material;
   static LEGACY_IRON_CHESTPLATE: Material;
   static LEGACY_IRON_DOOR: Material;
   static LEGACY_IRON_DOOR_BLOCK: Material;
   static LEGACY_IRON_FENCE: Material;
   static LEGACY_IRON_HELMET: Material;
   static LEGACY_IRON_HOE: Material;
   static LEGACY_IRON_INGOT: Material;
   static LEGACY_IRON_LEGGINGS: Material;
   static LEGACY_IRON_NUGGET: Material;
   static LEGACY_IRON_ORE: Material;
   static LEGACY_IRON_PICKAXE: Material;
   static LEGACY_IRON_PLATE: Material;
   static LEGACY_IRON_SPADE: Material;
   static LEGACY_IRON_SWORD: Material;
   static LEGACY_IRON_TRAPDOOR: Material;
   static LEGACY_ITEM_FRAME: Material;
   static LEGACY_JACK_O_LANTERN: Material;
   static LEGACY_JUKEBOX: Material;
   static LEGACY_JUNGLE_DOOR: Material;
   static LEGACY_JUNGLE_DOOR_ITEM: Material;
   static LEGACY_JUNGLE_FENCE: Material;
   static LEGACY_JUNGLE_FENCE_GATE: Material;
   static LEGACY_JUNGLE_WOOD_STAIRS: Material;
   static LEGACY_KNOWLEDGE_BOOK: Material;
   static LEGACY_LADDER: Material;
   static LEGACY_LAPIS_BLOCK: Material;
   static LEGACY_LAPIS_ORE: Material;
   static LEGACY_LAVA: Material;
   static LEGACY_LAVA_BUCKET: Material;
   static LEGACY_LEASH: Material;
   static LEGACY_LEATHER: Material;
   static LEGACY_LEATHER_BOOTS: Material;
   static LEGACY_LEATHER_CHESTPLATE: Material;
   static LEGACY_LEATHER_HELMET: Material;
   static LEGACY_LEATHER_LEGGINGS: Material;
   static LEGACY_LEAVES: Material;
   static LEGACY_LEAVES_2: Material;
   static LEGACY_LEVER: Material;
   static LEGACY_LIGHT_BLUE_GLAZED_TERRACOTTA: Material;
   static LEGACY_LIGHT_BLUE_SHULKER_BOX: Material;
   static LEGACY_LIME_GLAZED_TERRACOTTA: Material;
   static LEGACY_LIME_SHULKER_BOX: Material;
   static LEGACY_LINGERING_POTION: Material;
   static LEGACY_LOG: Material;
   static LEGACY_LOG_2: Material;
   static LEGACY_LONG_GRASS: Material;
   static LEGACY_MAGENTA_GLAZED_TERRACOTTA: Material;
   static LEGACY_MAGENTA_SHULKER_BOX: Material;
   static LEGACY_MAGMA: Material;
   static LEGACY_MAGMA_CREAM: Material;
   static LEGACY_MAP: Material;
   static LEGACY_MELON: Material;
   static LEGACY_MELON_BLOCK: Material;
   static LEGACY_MELON_SEEDS: Material;
   static LEGACY_MELON_STEM: Material;
   static LEGACY_MILK_BUCKET: Material;
   static LEGACY_MINECART: Material;
   static LEGACY_MOB_SPAWNER: Material;
   static LEGACY_MONSTER_EGG: Material;
   static LEGACY_MONSTER_EGGS: Material;
   static LEGACY_MOSSY_COBBLESTONE: Material;
   static LEGACY_MUSHROOM_SOUP: Material;
   static LEGACY_MUTTON: Material;
   static LEGACY_MYCEL: Material;
   static LEGACY_NAME_TAG: Material;
   static LEGACY_NETHER_BRICK: Material;
   static LEGACY_NETHER_BRICK_ITEM: Material;
   static LEGACY_NETHER_BRICK_STAIRS: Material;
   static LEGACY_NETHER_FENCE: Material;
   static LEGACY_NETHER_STALK: Material;
   static LEGACY_NETHER_STAR: Material;
   static LEGACY_NETHER_WART_BLOCK: Material;
   static LEGACY_NETHER_WARTS: Material;
   static LEGACY_NETHERRACK: Material;
   static LEGACY_NOTE_BLOCK: Material;
   static LEGACY_OBSERVER: Material;
   static LEGACY_OBSIDIAN: Material;
   static LEGACY_ORANGE_GLAZED_TERRACOTTA: Material;
   static LEGACY_ORANGE_SHULKER_BOX: Material;
   static LEGACY_PACKED_ICE: Material;
   static LEGACY_PAINTING: Material;
   static LEGACY_PAPER: Material;
   static LEGACY_PINK_GLAZED_TERRACOTTA: Material;
   static LEGACY_PINK_SHULKER_BOX: Material;
   static LEGACY_PISTON_BASE: Material;
   static LEGACY_PISTON_EXTENSION: Material;
   static LEGACY_PISTON_MOVING_PIECE: Material;
   static LEGACY_PISTON_STICKY_BASE: Material;
   static LEGACY_POISONOUS_POTATO: Material;
   static LEGACY_PORK: Material;
   static LEGACY_PORTAL: Material;
   static LEGACY_POTATO: Material;
   static LEGACY_POTATO_ITEM: Material;
   static LEGACY_POTION: Material;
   static LEGACY_POWERED_MINECART: Material;
   static LEGACY_POWERED_RAIL: Material;
   static LEGACY_PRISMARINE: Material;
   static LEGACY_PRISMARINE_CRYSTALS: Material;
   static LEGACY_PRISMARINE_SHARD: Material;
   static LEGACY_PUMPKIN: Material;
   static LEGACY_PUMPKIN_PIE: Material;
   static LEGACY_PUMPKIN_SEEDS: Material;
   static LEGACY_PUMPKIN_STEM: Material;
   static LEGACY_PURPLE_GLAZED_TERRACOTTA: Material;
   static LEGACY_PURPLE_SHULKER_BOX: Material;
   static LEGACY_PURPUR_BLOCK: Material;
   static LEGACY_PURPUR_DOUBLE_SLAB: Material;
   static LEGACY_PURPUR_PILLAR: Material;
   static LEGACY_PURPUR_SLAB: Material;
   static LEGACY_PURPUR_STAIRS: Material;
   static LEGACY_QUARTZ: Material;
   static LEGACY_QUARTZ_BLOCK: Material;
   static LEGACY_QUARTZ_ORE: Material;
   static LEGACY_QUARTZ_STAIRS: Material;
   static LEGACY_RABBIT: Material;
   static LEGACY_RABBIT_FOOT: Material;
   static LEGACY_RABBIT_HIDE: Material;
   static LEGACY_RABBIT_STEW: Material;
   static LEGACY_RAILS: Material;
   static LEGACY_RAW_BEEF: Material;
   static LEGACY_RAW_CHICKEN: Material;
   static LEGACY_RAW_FISH: Material;
   static LEGACY_RECORD_10: Material;
   static LEGACY_RECORD_11: Material;
   static LEGACY_RECORD_12: Material;
   static LEGACY_RECORD_3: Material;
   static LEGACY_RECORD_4: Material;
   static LEGACY_RECORD_5: Material;
   static LEGACY_RECORD_6: Material;
   static LEGACY_RECORD_7: Material;
   static LEGACY_RECORD_8: Material;
   static LEGACY_RECORD_9: Material;
   static LEGACY_RED_GLAZED_TERRACOTTA: Material;
   static LEGACY_RED_MUSHROOM: Material;
   static LEGACY_RED_NETHER_BRICK: Material;
   static LEGACY_RED_ROSE: Material;
   static LEGACY_RED_SANDSTONE: Material;
   static LEGACY_RED_SANDSTONE_STAIRS: Material;
   static LEGACY_RED_SHULKER_BOX: Material;
   static LEGACY_REDSTONE: Material;
   static LEGACY_REDSTONE_BLOCK: Material;
   static LEGACY_REDSTONE_COMPARATOR: Material;
   static LEGACY_REDSTONE_COMPARATOR_OFF: Material;
   static LEGACY_REDSTONE_COMPARATOR_ON: Material;
   static LEGACY_REDSTONE_LAMP_OFF: Material;
   static LEGACY_REDSTONE_LAMP_ON: Material;
   static LEGACY_REDSTONE_ORE: Material;
   static LEGACY_REDSTONE_TORCH_OFF: Material;
   static LEGACY_REDSTONE_TORCH_ON: Material;
   static LEGACY_REDSTONE_WIRE: Material;
   static LEGACY_ROTTEN_FLESH: Material;
   static LEGACY_SADDLE: Material;
   static LEGACY_SAND: Material;
   static LEGACY_SANDSTONE: Material;
   static LEGACY_SANDSTONE_STAIRS: Material;
   static LEGACY_SAPLING: Material;
   static LEGACY_SEA_LANTERN: Material;
   static LEGACY_SEEDS: Material;
   static LEGACY_SHEARS: Material;
   static LEGACY_SHIELD: Material;
   static LEGACY_SHULKER_SHELL: Material;
   static LEGACY_SIGN: Material;
   static LEGACY_SIGN_POST: Material;
   static LEGACY_SILVER_GLAZED_TERRACOTTA: Material;
   static LEGACY_SILVER_SHULKER_BOX: Material;
   static LEGACY_SKULL: Material;
   static LEGACY_SKULL_ITEM: Material;
   static LEGACY_SLIME_BALL: Material;
   static LEGACY_SLIME_BLOCK: Material;
   static LEGACY_SMOOTH_BRICK: Material;
   static LEGACY_SMOOTH_STAIRS: Material;
   static LEGACY_SNOW: Material;
   static LEGACY_SNOW_BALL: Material;
   static LEGACY_SNOW_BLOCK: Material;
   static LEGACY_SOIL: Material;
   static LEGACY_SOUL_SAND: Material;
   static LEGACY_SPECKLED_MELON: Material;
   static LEGACY_SPECTRAL_ARROW: Material;
   static LEGACY_SPIDER_EYE: Material;
   static LEGACY_SPLASH_POTION: Material;
   static LEGACY_SPONGE: Material;
   static LEGACY_SPRUCE_DOOR: Material;
   static LEGACY_SPRUCE_DOOR_ITEM: Material;
   static LEGACY_SPRUCE_FENCE: Material;
   static LEGACY_SPRUCE_FENCE_GATE: Material;
   static LEGACY_SPRUCE_WOOD_STAIRS: Material;
   static LEGACY_STAINED_CLAY: Material;
   static LEGACY_STAINED_GLASS: Material;
   static LEGACY_STAINED_GLASS_PANE: Material;
   static LEGACY_STANDING_BANNER: Material;
   static LEGACY_STATIONARY_LAVA: Material;
   static LEGACY_STATIONARY_WATER: Material;
   static LEGACY_STEP: Material;
   static LEGACY_STICK: Material;
   static LEGACY_STONE: Material;
   static LEGACY_STONE_AXE: Material;
   static LEGACY_STONE_BUTTON: Material;
   static LEGACY_STONE_HOE: Material;
   static LEGACY_STONE_PICKAXE: Material;
   static LEGACY_STONE_PLATE: Material;
   static LEGACY_STONE_SLAB2: Material;
   static LEGACY_STONE_SPADE: Material;
   static LEGACY_STONE_SWORD: Material;
   static LEGACY_STORAGE_MINECART: Material;
   static LEGACY_STRING: Material;
   static LEGACY_STRUCTURE_BLOCK: Material;
   static LEGACY_STRUCTURE_VOID: Material;
   static LEGACY_SUGAR: Material;
   static LEGACY_SUGAR_CANE: Material;
   static LEGACY_SUGAR_CANE_BLOCK: Material;
   static LEGACY_SULPHUR: Material;
   static LEGACY_THIN_GLASS: Material;
   static LEGACY_TIPPED_ARROW: Material;
   static LEGACY_TNT: Material;
   static LEGACY_TORCH: Material;
   static LEGACY_TOTEM: Material;
   static LEGACY_TRAP_DOOR: Material;
   static LEGACY_TRAPPED_CHEST: Material;
   static LEGACY_TRIPWIRE: Material;
   static LEGACY_TRIPWIRE_HOOK: Material;
   static LEGACY_VINE: Material;
   static LEGACY_WALL_BANNER: Material;
   static LEGACY_WALL_SIGN: Material;
   static LEGACY_WATCH: Material;
   static LEGACY_WATER: Material;
   static LEGACY_WATER_BUCKET: Material;
   static LEGACY_WATER_LILY: Material;
   static LEGACY_WEB: Material;
   static LEGACY_WHEAT: Material;
   static LEGACY_WHITE_GLAZED_TERRACOTTA: Material;
   static LEGACY_WHITE_SHULKER_BOX: Material;
   static LEGACY_WOOD: Material;
   static LEGACY_WOOD_AXE: Material;
   static LEGACY_WOOD_BUTTON: Material;
   static LEGACY_WOOD_DOOR: Material;
   static LEGACY_WOOD_DOUBLE_STEP: Material;
   static LEGACY_WOOD_HOE: Material;
   static LEGACY_WOOD_PICKAXE: Material;
   static LEGACY_WOOD_PLATE: Material;
   static LEGACY_WOOD_SPADE: Material;
   static LEGACY_WOOD_STAIRS: Material;
   static LEGACY_WOOD_STEP: Material;
   static LEGACY_WOOD_SWORD: Material;
   static LEGACY_WOODEN_DOOR: Material;
   static LEGACY_WOOL: Material;
   static LEGACY_WORKBENCH: Material;
   static LEGACY_WRITTEN_BOOK: Material;
   static LEGACY_YELLOW_FLOWER: Material;
   static LEGACY_YELLOW_GLAZED_TERRACOTTA: Material;
   static LEGACY_YELLOW_SHULKER_BOX: Material;
   static LEVER: Material;
   static LIGHT_BLUE_BANNER: Material;
   static LIGHT_BLUE_BED: Material;
   static LIGHT_BLUE_CARPET: Material;
   static LIGHT_BLUE_CONCRETE: Material;
   static LIGHT_BLUE_CONCRETE_POWDER: Material;
   static LIGHT_BLUE_DYE: Material;
   static LIGHT_BLUE_GLAZED_TERRACOTTA: Material;
   static LIGHT_BLUE_SHULKER_BOX: Material;
   static LIGHT_BLUE_STAINED_GLASS: Material;
   static LIGHT_BLUE_STAINED_GLASS_PANE: Material;
   static LIGHT_BLUE_TERRACOTTA: Material;
   static LIGHT_BLUE_WALL_BANNER: Material;
   static LIGHT_BLUE_WOOL: Material;
   static LIGHT_GRAY_BANNER: Material;
   static LIGHT_GRAY_BED: Material;
   static LIGHT_GRAY_CARPET: Material;
   static LIGHT_GRAY_CONCRETE: Material;
   static LIGHT_GRAY_CONCRETE_POWDER: Material;
   static LIGHT_GRAY_DYE: Material;
   static LIGHT_GRAY_GLAZED_TERRACOTTA: Material;
   static LIGHT_GRAY_SHULKER_BOX: Material;
   static LIGHT_GRAY_STAINED_GLASS: Material;
   static LIGHT_GRAY_STAINED_GLASS_PANE: Material;
   static LIGHT_GRAY_TERRACOTTA: Material;
   static LIGHT_GRAY_WALL_BANNER: Material;
   static LIGHT_GRAY_WOOL: Material;
   static LIGHT_WEIGHTED_PRESSURE_PLATE: Material;
   static LILAC: Material;
   static LILY_OF_THE_VALLEY: Material;
   static LILY_PAD: Material;
   static LIME_BANNER: Material;
   static LIME_BED: Material;
   static LIME_CARPET: Material;
   static LIME_CONCRETE: Material;
   static LIME_CONCRETE_POWDER: Material;
   static LIME_DYE: Material;
   static LIME_GLAZED_TERRACOTTA: Material;
   static LIME_SHULKER_BOX: Material;
   static LIME_STAINED_GLASS: Material;
   static LIME_STAINED_GLASS_PANE: Material;
   static LIME_TERRACOTTA: Material;
   static LIME_WALL_BANNER: Material;
   static LIME_WOOL: Material;
   static LINGERING_POTION: Material;
   static LLAMA_SPAWN_EGG: Material;
   static LODESTONE: Material;
   static LOOM: Material;
   static MAGENTA_BANNER: Material;
   static MAGENTA_BED: Material;
   static MAGENTA_CARPET: Material;
   static MAGENTA_CONCRETE: Material;
   static MAGENTA_CONCRETE_POWDER: Material;
   static MAGENTA_DYE: Material;
   static MAGENTA_GLAZED_TERRACOTTA: Material;
   static MAGENTA_SHULKER_BOX: Material;
   static MAGENTA_STAINED_GLASS: Material;
   static MAGENTA_STAINED_GLASS_PANE: Material;
   static MAGENTA_TERRACOTTA: Material;
   static MAGENTA_WALL_BANNER: Material;
   static MAGENTA_WOOL: Material;
   static MAGMA_BLOCK: Material;
   static MAGMA_CREAM: Material;
   static MAGMA_CUBE_SPAWN_EGG: Material;
   static MAP: Material;
   static MELON: Material;
   static MELON_SEEDS: Material;
   static MELON_SLICE: Material;
   static MELON_STEM: Material;
   static MILK_BUCKET: Material;
   static MINECART: Material;
   static MOJANG_BANNER_PATTERN: Material;
   static MOOSHROOM_SPAWN_EGG: Material;
   static MOSSY_COBBLESTONE: Material;
   static MOSSY_COBBLESTONE_SLAB: Material;
   static MOSSY_COBBLESTONE_STAIRS: Material;
   static MOSSY_COBBLESTONE_WALL: Material;
   static MOSSY_STONE_BRICK_SLAB: Material;
   static MOSSY_STONE_BRICK_STAIRS: Material;
   static MOSSY_STONE_BRICK_WALL: Material;
   static MOSSY_STONE_BRICKS: Material;
   static MOVING_PISTON: Material;
   static MULE_SPAWN_EGG: Material;
   static MUSHROOM_STEM: Material;
   static MUSHROOM_STEW: Material;
   static MUSIC_DISC_11: Material;
   static MUSIC_DISC_13: Material;
   static MUSIC_DISC_BLOCKS: Material;
   static MUSIC_DISC_CAT: Material;
   static MUSIC_DISC_CHIRP: Material;
   static MUSIC_DISC_FAR: Material;
   static MUSIC_DISC_MALL: Material;
   static MUSIC_DISC_MELLOHI: Material;
   static MUSIC_DISC_PIGSTEP: Material;
   static MUSIC_DISC_STAL: Material;
   static MUSIC_DISC_STRAD: Material;
   static MUSIC_DISC_WAIT: Material;
   static MUSIC_DISC_WARD: Material;
   static MUTTON: Material;
   static MYCELIUM: Material;
   static NAME_TAG: Material;
   static NAUTILUS_SHELL: Material;
   static NETHER_BRICK: Material;
   static NETHER_BRICK_FENCE: Material;
   static NETHER_BRICK_SLAB: Material;
   static NETHER_BRICK_STAIRS: Material;
   static NETHER_BRICK_WALL: Material;
   static NETHER_BRICKS: Material;
   static NETHER_GOLD_ORE: Material;
   static NETHER_PORTAL: Material;
   static NETHER_QUARTZ_ORE: Material;
   static NETHER_SPROUTS: Material;
   static NETHER_STAR: Material;
   static NETHER_WART: Material;
   static NETHER_WART_BLOCK: Material;
   static NETHERITE_AXE: Material;
   static NETHERITE_BLOCK: Material;
   static NETHERITE_BOOTS: Material;
   static NETHERITE_CHESTPLATE: Material;
   static NETHERITE_HELMET: Material;
   static NETHERITE_HOE: Material;
   static NETHERITE_INGOT: Material;
   static NETHERITE_LEGGINGS: Material;
   static NETHERITE_PICKAXE: Material;
   static NETHERITE_SCRAP: Material;
   static NETHERITE_SHOVEL: Material;
   static NETHERITE_SWORD: Material;
   static NETHERRACK: Material;
   static NOTE_BLOCK: Material;
   static OAK_BOAT: Material;
   static OAK_BUTTON: Material;
   static OAK_DOOR: Material;
   static OAK_FENCE: Material;
   static OAK_FENCE_GATE: Material;
   static OAK_LEAVES: Material;
   static OAK_LOG: Material;
   static OAK_PLANKS: Material;
   static OAK_PRESSURE_PLATE: Material;
   static OAK_SAPLING: Material;
   static OAK_SIGN: Material;
   static OAK_SLAB: Material;
   static OAK_STAIRS: Material;
   static OAK_TRAPDOOR: Material;
   static OAK_WALL_SIGN: Material;
   static OAK_WOOD: Material;
   static OBSERVER: Material;
   static OBSIDIAN: Material;
   static OCELOT_SPAWN_EGG: Material;
   static ORANGE_BANNER: Material;
   static ORANGE_BED: Material;
   static ORANGE_CARPET: Material;
   static ORANGE_CONCRETE: Material;
   static ORANGE_CONCRETE_POWDER: Material;
   static ORANGE_DYE: Material;
   static ORANGE_GLAZED_TERRACOTTA: Material;
   static ORANGE_SHULKER_BOX: Material;
   static ORANGE_STAINED_GLASS: Material;
   static ORANGE_STAINED_GLASS_PANE: Material;
   static ORANGE_TERRACOTTA: Material;
   static ORANGE_TULIP: Material;
   static ORANGE_WALL_BANNER: Material;
   static ORANGE_WOOL: Material;
   static OXEYE_DAISY: Material;
   static PACKED_ICE: Material;
   static PAINTING: Material;
   static PANDA_SPAWN_EGG: Material;
   static PAPER: Material;
   static PARROT_SPAWN_EGG: Material;
   static PEONY: Material;
   static PETRIFIED_OAK_SLAB: Material;
   static PHANTOM_MEMBRANE: Material;
   static PHANTOM_SPAWN_EGG: Material;
   static PIG_SPAWN_EGG: Material;
   static PIGLIN_BANNER_PATTERN: Material;
   static PIGLIN_SPAWN_EGG: Material;
   static PILLAGER_SPAWN_EGG: Material;
   static PINK_BANNER: Material;
   static PINK_BED: Material;
   static PINK_CARPET: Material;
   static PINK_CONCRETE: Material;
   static PINK_CONCRETE_POWDER: Material;
   static PINK_DYE: Material;
   static PINK_GLAZED_TERRACOTTA: Material;
   static PINK_SHULKER_BOX: Material;
   static PINK_STAINED_GLASS: Material;
   static PINK_STAINED_GLASS_PANE: Material;
   static PINK_TERRACOTTA: Material;
   static PINK_TULIP: Material;
   static PINK_WALL_BANNER: Material;
   static PINK_WOOL: Material;
   static PISTON: Material;
   static PISTON_HEAD: Material;
   static PLAYER_HEAD: Material;
   static PLAYER_WALL_HEAD: Material;
   static PODZOL: Material;
   static POISONOUS_POTATO: Material;
   static POLAR_BEAR_SPAWN_EGG: Material;
   static POLISHED_ANDESITE: Material;
   static POLISHED_ANDESITE_SLAB: Material;
   static POLISHED_ANDESITE_STAIRS: Material;
   static POLISHED_BASALT: Material;
   static POLISHED_BLACKSTONE: Material;
   static POLISHED_BLACKSTONE_BRICK_SLAB: Material;
   static POLISHED_BLACKSTONE_BRICK_STAIRS: Material;
   static POLISHED_BLACKSTONE_BRICK_WALL: Material;
   static POLISHED_BLACKSTONE_BRICKS: Material;
   static POLISHED_BLACKSTONE_BUTTON: Material;
   static POLISHED_BLACKSTONE_PRESSURE_PLATE: Material;
   static POLISHED_BLACKSTONE_SLAB: Material;
   static POLISHED_BLACKSTONE_STAIRS: Material;
   static POLISHED_BLACKSTONE_WALL: Material;
   static POLISHED_DIORITE: Material;
   static POLISHED_DIORITE_SLAB: Material;
   static POLISHED_DIORITE_STAIRS: Material;
   static POLISHED_GRANITE: Material;
   static POLISHED_GRANITE_SLAB: Material;
   static POLISHED_GRANITE_STAIRS: Material;
   static POPPED_CHORUS_FRUIT: Material;
   static POPPY: Material;
   static PORKCHOP: Material;
   static POTATO: Material;
   static POTATOES: Material;
   static POTION: Material;
   static POTTED_ACACIA_SAPLING: Material;
   static POTTED_ALLIUM: Material;
   static POTTED_AZURE_BLUET: Material;
   static POTTED_BAMBOO: Material;
   static POTTED_BIRCH_SAPLING: Material;
   static POTTED_BLUE_ORCHID: Material;
   static POTTED_BROWN_MUSHROOM: Material;
   static POTTED_CACTUS: Material;
   static POTTED_CORNFLOWER: Material;
   static POTTED_CRIMSON_FUNGUS: Material;
   static POTTED_CRIMSON_ROOTS: Material;
   static POTTED_DANDELION: Material;
   static POTTED_DARK_OAK_SAPLING: Material;
   static POTTED_DEAD_BUSH: Material;
   static POTTED_FERN: Material;
   static POTTED_JUNGLE_SAPLING: Material;
   static POTTED_LILY_OF_THE_VALLEY: Material;
   static POTTED_OAK_SAPLING: Material;
   static POTTED_ORANGE_TULIP: Material;
   static POTTED_OXEYE_DAISY: Material;
   static POTTED_PINK_TULIP: Material;
   static POTTED_POPPY: Material;
   static POTTED_RED_MUSHROOM: Material;
   static POTTED_RED_TULIP: Material;
   static POTTED_SPRUCE_SAPLING: Material;
   static POTTED_WARPED_FUNGUS: Material;
   static POTTED_WARPED_ROOTS: Material;
   static POTTED_WHITE_TULIP: Material;
   static POTTED_WITHER_ROSE: Material;
   static POWERED_RAIL: Material;
   static PRISMARINE: Material;
   static PRISMARINE_BRICK_SLAB: Material;
   static PRISMARINE_BRICK_STAIRS: Material;
   static PRISMARINE_BRICKS: Material;
   static PRISMARINE_CRYSTALS: Material;
   static PRISMARINE_SHARD: Material;
   static PRISMARINE_SLAB: Material;
   static PRISMARINE_STAIRS: Material;
   static PRISMARINE_WALL: Material;
   static PUFFERFISH: Material;
   static PUFFERFISH_BUCKET: Material;
   static PUFFERFISH_SPAWN_EGG: Material;
   static PUMPKIN: Material;
   static PUMPKIN_PIE: Material;
   static PUMPKIN_SEEDS: Material;
   static PUMPKIN_STEM: Material;
   static PURPLE_BANNER: Material;
   static PURPLE_BED: Material;
   static PURPLE_CARPET: Material;
   static PURPLE_CONCRETE: Material;
   static PURPLE_CONCRETE_POWDER: Material;
   static PURPLE_DYE: Material;
   static PURPLE_GLAZED_TERRACOTTA: Material;
   static PURPLE_SHULKER_BOX: Material;
   static PURPLE_STAINED_GLASS: Material;
   static PURPLE_STAINED_GLASS_PANE: Material;
   static PURPLE_TERRACOTTA: Material;
   static PURPLE_WALL_BANNER: Material;
   static PURPLE_WOOL: Material;
   static PURPUR_BLOCK: Material;
   static PURPUR_PILLAR: Material;
   static PURPUR_SLAB: Material;
   static PURPUR_STAIRS: Material;
   static QUARTZ: Material;
   static QUARTZ_BLOCK: Material;
   static QUARTZ_BRICKS: Material;
   static QUARTZ_PILLAR: Material;
   static QUARTZ_SLAB: Material;
   static QUARTZ_STAIRS: Material;
   static RABBIT: Material;
   static RABBIT_FOOT: Material;
   static RABBIT_HIDE: Material;
   static RABBIT_SPAWN_EGG: Material;
   static RABBIT_STEW: Material;
   static RAIL: Material;
   static RAVAGER_SPAWN_EGG: Material;
   static RED_BANNER: Material;
   static RED_BED: Material;
   static RED_CARPET: Material;
   static RED_CONCRETE: Material;
   static RED_CONCRETE_POWDER: Material;
   static RED_DYE: Material;
   static RED_GLAZED_TERRACOTTA: Material;
   static RED_MUSHROOM: Material;
   static RED_MUSHROOM_BLOCK: Material;
   static RED_NETHER_BRICK_SLAB: Material;
   static RED_NETHER_BRICK_STAIRS: Material;
   static RED_NETHER_BRICK_WALL: Material;
   static RED_NETHER_BRICKS: Material;
   static RED_SAND: Material;
   static RED_SANDSTONE: Material;
   static RED_SANDSTONE_SLAB: Material;
   static RED_SANDSTONE_STAIRS: Material;
   static RED_SANDSTONE_WALL: Material;
   static RED_SHULKER_BOX: Material;
   static RED_STAINED_GLASS: Material;
   static RED_STAINED_GLASS_PANE: Material;
   static RED_TERRACOTTA: Material;
   static RED_TULIP: Material;
   static RED_WALL_BANNER: Material;
   static RED_WOOL: Material;
   static REDSTONE: Material;
   static REDSTONE_BLOCK: Material;
   static REDSTONE_LAMP: Material;
   static REDSTONE_ORE: Material;
   static REDSTONE_TORCH: Material;
   static REDSTONE_WALL_TORCH: Material;
   static REDSTONE_WIRE: Material;
   static REPEATER: Material;
   static REPEATING_COMMAND_BLOCK: Material;
   static RESPAWN_ANCHOR: Material;
   static ROSE_BUSH: Material;
   static ROTTEN_FLESH: Material;
   static SADDLE: Material;
   static SALMON: Material;
   static SALMON_BUCKET: Material;
   static SALMON_SPAWN_EGG: Material;
   static SAND: Material;
   static SANDSTONE: Material;
   static SANDSTONE_SLAB: Material;
   static SANDSTONE_STAIRS: Material;
   static SANDSTONE_WALL: Material;
   static SCAFFOLDING: Material;
   static SCUTE: Material;
   static SEA_LANTERN: Material;
   static SEA_PICKLE: Material;
   static SEAGRASS: Material;
   static SHEARS: Material;
   static SHEEP_SPAWN_EGG: Material;
   static SHIELD: Material;
   static SHROOMLIGHT: Material;
   static SHULKER_BOX: Material;
   static SHULKER_SHELL: Material;
   static SHULKER_SPAWN_EGG: Material;
   static SILVERFISH_SPAWN_EGG: Material;
   static SKELETON_HORSE_SPAWN_EGG: Material;
   static SKELETON_SKULL: Material;
   static SKELETON_SPAWN_EGG: Material;
   static SKELETON_WALL_SKULL: Material;
   static SKULL_BANNER_PATTERN: Material;
   static SLIME_BALL: Material;
   static SLIME_BLOCK: Material;
   static SLIME_SPAWN_EGG: Material;
   static SMITHING_TABLE: Material;
   static SMOKER: Material;
   static SMOOTH_QUARTZ: Material;
   static SMOOTH_QUARTZ_SLAB: Material;
   static SMOOTH_QUARTZ_STAIRS: Material;
   static SMOOTH_RED_SANDSTONE: Material;
   static SMOOTH_RED_SANDSTONE_SLAB: Material;
   static SMOOTH_RED_SANDSTONE_STAIRS: Material;
   static SMOOTH_SANDSTONE: Material;
   static SMOOTH_SANDSTONE_SLAB: Material;
   static SMOOTH_SANDSTONE_STAIRS: Material;
   static SMOOTH_STONE: Material;
   static SMOOTH_STONE_SLAB: Material;
   static SNOW: Material;
   static SNOW_BLOCK: Material;
   static SNOWBALL: Material;
   static SOUL_CAMPFIRE: Material;
   static SOUL_FIRE: Material;
   static SOUL_LANTERN: Material;
   static SOUL_SAND: Material;
   static SOUL_SOIL: Material;
   static SOUL_TORCH: Material;
   static SOUL_WALL_TORCH: Material;
   static SPAWNER: Material;
   static SPECTRAL_ARROW: Material;
   static SPIDER_EYE: Material;
   static SPIDER_SPAWN_EGG: Material;
   static SPLASH_POTION: Material;
   static SPONGE: Material;
   static SPRUCE_BOAT: Material;
   static SPRUCE_BUTTON: Material;
   static SPRUCE_DOOR: Material;
   static SPRUCE_FENCE: Material;
   static SPRUCE_FENCE_GATE: Material;
   static SPRUCE_LEAVES: Material;
   static SPRUCE_LOG: Material;
   static SPRUCE_PLANKS: Material;
   static SPRUCE_PRESSURE_PLATE: Material;
   static SPRUCE_SAPLING: Material;
   static SPRUCE_SIGN: Material;
   static SPRUCE_SLAB: Material;
   static SPRUCE_STAIRS: Material;
   static SPRUCE_TRAPDOOR: Material;
   static SPRUCE_WALL_SIGN: Material;
   static SPRUCE_WOOD: Material;
   static SQUID_SPAWN_EGG: Material;
   static STICK: Material;
   static STICKY_PISTON: Material;
   static STONE: Material;
   static STONE_AXE: Material;
   static STONE_BRICK_SLAB: Material;
   static STONE_BRICK_STAIRS: Material;
   static STONE_BRICK_WALL: Material;
   static STONE_BRICKS: Material;
   static STONE_BUTTON: Material;
   static STONE_HOE: Material;
   static STONE_PICKAXE: Material;
   static STONE_PRESSURE_PLATE: Material;
   static STONE_SHOVEL: Material;
   static STONE_SLAB: Material;
   static STONE_STAIRS: Material;
   static STONE_SWORD: Material;
   static STONECUTTER: Material;
   static STRAY_SPAWN_EGG: Material;
   static STRIDER_SPAWN_EGG: Material;
   static STRING: Material;
   static STRIPPED_ACACIA_LOG: Material;
   static STRIPPED_ACACIA_WOOD: Material;
   static STRIPPED_BIRCH_LOG: Material;
   static STRIPPED_BIRCH_WOOD: Material;
   static STRIPPED_CRIMSON_HYPHAE: Material;
   static STRIPPED_CRIMSON_STEM: Material;
   static STRIPPED_DARK_OAK_LOG: Material;
   static STRIPPED_DARK_OAK_WOOD: Material;
   static STRIPPED_JUNGLE_LOG: Material;
   static STRIPPED_JUNGLE_WOOD: Material;
   static STRIPPED_OAK_LOG: Material;
   static STRIPPED_OAK_WOOD: Material;
   static STRIPPED_SPRUCE_LOG: Material;
   static STRIPPED_SPRUCE_WOOD: Material;
   static STRIPPED_WARPED_HYPHAE: Material;
   static STRIPPED_WARPED_STEM: Material;
   static STRUCTURE_BLOCK: Material;
   static STRUCTURE_VOID: Material;
   static SUGAR: Material;
   static SUGAR_CANE: Material;
   static SUNFLOWER: Material;
   static SUSPICIOUS_STEW: Material;
   static SWEET_BERRIES: Material;
   static SWEET_BERRY_BUSH: Material;
   static TALL_GRASS: Material;
   static TALL_SEAGRASS: Material;
   static TARGET: Material;
   static TERRACOTTA: Material;
   static TIPPED_ARROW: Material;
   static TNT: Material;
   static TNT_MINECART: Material;
   static TORCH: Material;
   static TOTEM_OF_UNDYING: Material;
   static TRADER_LLAMA_SPAWN_EGG: Material;
   static TRAPPED_CHEST: Material;
   static TRIDENT: Material;
   static TRIPWIRE: Material;
   static TRIPWIRE_HOOK: Material;
   static TROPICAL_FISH: Material;
   static TROPICAL_FISH_BUCKET: Material;
   static TROPICAL_FISH_SPAWN_EGG: Material;
   static TUBE_CORAL: Material;
   static TUBE_CORAL_BLOCK: Material;
   static TUBE_CORAL_FAN: Material;
   static TUBE_CORAL_WALL_FAN: Material;
   static TURTLE_EGG: Material;
   static TURTLE_HELMET: Material;
   static TURTLE_SPAWN_EGG: Material;
   static TWISTING_VINES: Material;
   static TWISTING_VINES_PLANT: Material;
   static VEX_SPAWN_EGG: Material;
   static VILLAGER_SPAWN_EGG: Material;
   static VINDICATOR_SPAWN_EGG: Material;
   static VINE: Material;
   static VOID_AIR: Material;
   static WALL_TORCH: Material;
   static WANDERING_TRADER_SPAWN_EGG: Material;
   static WARPED_BUTTON: Material;
   static WARPED_DOOR: Material;
   static WARPED_FENCE: Material;
   static WARPED_FENCE_GATE: Material;
   static WARPED_FUNGUS: Material;
   static WARPED_FUNGUS_ON_A_STICK: Material;
   static WARPED_HYPHAE: Material;
   static WARPED_NYLIUM: Material;
   static WARPED_PLANKS: Material;
   static WARPED_PRESSURE_PLATE: Material;
   static WARPED_ROOTS: Material;
   static WARPED_SIGN: Material;
   static WARPED_SLAB: Material;
   static WARPED_STAIRS: Material;
   static WARPED_STEM: Material;
   static WARPED_TRAPDOOR: Material;
   static WARPED_WALL_SIGN: Material;
   static WARPED_WART_BLOCK: Material;
   static WATER: Material;
   static WATER_BUCKET: Material;
   static WEEPING_VINES: Material;
   static WEEPING_VINES_PLANT: Material;
   static WET_SPONGE: Material;
   static WHEAT: Material;
   static WHEAT_SEEDS: Material;
   static WHITE_BANNER: Material;
   static WHITE_BED: Material;
   static WHITE_CARPET: Material;
   static WHITE_CONCRETE: Material;
   static WHITE_CONCRETE_POWDER: Material;
   static WHITE_DYE: Material;
   static WHITE_GLAZED_TERRACOTTA: Material;
   static WHITE_SHULKER_BOX: Material;
   static WHITE_STAINED_GLASS: Material;
   static WHITE_STAINED_GLASS_PANE: Material;
   static WHITE_TERRACOTTA: Material;
   static WHITE_TULIP: Material;
   static WHITE_WALL_BANNER: Material;
   static WHITE_WOOL: Material;
   static WITCH_SPAWN_EGG: Material;
   static WITHER_ROSE: Material;
   static WITHER_SKELETON_SKULL: Material;
   static WITHER_SKELETON_SPAWN_EGG: Material;
   static WITHER_SKELETON_WALL_SKULL: Material;
   static WOLF_SPAWN_EGG: Material;
   static WOODEN_AXE: Material;
   static WOODEN_HOE: Material;
   static WOODEN_PICKAXE: Material;
   static WOODEN_SHOVEL: Material;
   static WOODEN_SWORD: Material;
   static WRITABLE_BOOK: Material;
   static WRITTEN_BOOK: Material;
   static YELLOW_BANNER: Material;
   static YELLOW_BED: Material;
   static YELLOW_CARPET: Material;
   static YELLOW_CONCRETE: Material;
   static YELLOW_CONCRETE_POWDER: Material;
   static YELLOW_DYE: Material;
   static YELLOW_GLAZED_TERRACOTTA: Material;
   static YELLOW_SHULKER_BOX: Material;
   static YELLOW_STAINED_GLASS: Material;
   static YELLOW_STAINED_GLASS_PANE: Material;
   static YELLOW_TERRACOTTA: Material;
   static YELLOW_WALL_BANNER: Material;
   static YELLOW_WOOL: Material;
   static ZOGLIN_SPAWN_EGG: Material;
   static ZOMBIE_HEAD: Material;
   static ZOMBIE_HORSE_SPAWN_EGG: Material;
   static ZOMBIE_SPAWN_EGG: Material;
   static ZOMBIE_VILLAGER_SPAWN_EGG: Material;
   static ZOMBIE_WALL_HEAD: Material;
   static ZOMBIFIED_PIGLIN_SPAWN_EGG: Material;
   createBlockData (): BlockData;
   createBlockData (data: string): BlockData;
   createBlockData (consumer: Consumer<BlockData>): BlockData;
   getBlastResistance (): number;
   getCraftingRemainingItem (): Material;
   getData (): Class<MaterialData>;
   getHardness (): number;
   getId (): number;
   getKey (): NamespacedKey;
   static getMaterial (name: string): Material;
   static getMaterial (name: string, legacy_name: boolean): Material;
   getMaxDurability (): number;
   getMaxStackSize (): number;
   getNewData (raw: number): MaterialData;
   hasGravity (): boolean;
   isAir (): boolean;
   isBlock (): boolean;
   isBurnable (): boolean;
   isEdible (): boolean;
   isEmpty (): boolean;
   isFlammable (): boolean;
   isFuel (): boolean;
   isInteractable (): boolean;
   isItem (): boolean;
   isLegacy (): boolean;
   isOccluding (): boolean;
   isRecord (): boolean;
   isSolid (): boolean;
   isTransparent (): boolean;
   static matchMaterial (name: string): Material;
   static matchMaterial (name: string, legacy_name: boolean): Material;
   static valueOf (name: string): Material;
   static values (): Material[];
}
export class MaterialData extends JavaObject {
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): MaterialData;
   equals (obj: JavaObject): boolean;
   getData (): number;
   getItemType (): Material;
   hashCode (): number;
   setData (data: number): void;
   toItemStack (): ItemStack;
   toItemStack (amount: number): ItemStack;
   toString (): string;
}
export class MaterialSetTag extends JavaObject implements Tag<Material> {
   constructor (materials: Collection<Material>);
   constructor (filter: Predicate<Material>);
   constructor (...materials: Material);
   constructor (key: NamespacedKey, materials: Collection<Material>);
   constructor (key: NamespacedKey, filter: Predicate<Material>);
   constructor (key: NamespacedKey, ...materials: Material);
   add (...tags: MaterialSetTag): MaterialSetTag;
   add (materials: Collection<Material>): MaterialSetTag;
   add (filter: Predicate<Material>): MaterialSetTag;
   add (...material: Material): MaterialSetTag;
   add (...tags: Tag<Material>): MaterialSetTag;
   contains (_with: string): MaterialSetTag;
   endsWith (_with: string): MaterialSetTag;
   ensureSize (label: string, size: number): MaterialSetTag;
   getKey (): NamespacedKey;
   getValues (): Set<Material>;
   isTagged (block: Block): boolean;
   isTagged (block: BlockState): boolean;
   isTagged (block: BlockData): boolean;
   isTagged (item: ItemStack): boolean;
   isTagged (material: Material): boolean;
   not (tags: MaterialSetTag): MaterialSetTag;
   not (materials: Collection<Material>): MaterialSetTag;
   not (filter: Predicate<Material>): MaterialSetTag;
   not (...material: Material): MaterialSetTag;
   notEndsWith (_with: string): MaterialSetTag;
   notStartsWith (_with: string): MaterialSetTag;
   startsWith (_with: string): MaterialSetTag;
}
export class MaterialTags extends JavaObject {
   constructor ();
   static ARROW (undefined): MaterialSetTag;
   static ARROW (undefined): MaterialSetTag;
   static ARROW (undefined): MaterialSetTag;
}
export class MemoryConfiguration extends MemorySection implements Configuration {
   constructor ();
   constructor (defaults: Configuration);
   addDefault (path: string, value: JavaObject): void;
   addDefaults (defaults: Map<string, JavaObject>): void;
   addDefaults (defaults: Configuration): void;
   getDefaults (): Configuration;
   getParent (): ConfigurationSection;
   options (): MemoryConfigurationOptions;
   setDefaults (defaults: Configuration): void;
}
export class MemoryConfigurationOptions extends ConfigurationOptions {
   constructor (configuration: MemoryConfiguration);
   configuration (): MemoryConfiguration;
   copyDefaults (value: boolean): MemoryConfigurationOptions;
   pathSeparator (value: char): MemoryConfigurationOptions;
}
export class MemoryKey<T> extends JavaObject implements Keyed {
   static getByKey (namespaced_key: NamespacedKey): MemoryKey;
   getKey (): NamespacedKey;
   getMemoryClass (): Class<T>;
   static values (): Set<MemoryKey>;
}
export class MemorySection extends JavaObject implements ConfigurationSection {
   constructor ();
   constructor (parent: ConfigurationSection, path: string);
   addDefault (path: string, value: JavaObject): void;
   contains (path: string): boolean;
   contains (path: string, ignore_default: boolean): boolean;
   static createPath (section: ConfigurationSection, key: string): string;
   static createPath (section: ConfigurationSection, key: string, relative_to: ConfigurationSection): string;
   createSection (path: string): ConfigurationSection;
   createSection (path: string, map: Map<X, X>): ConfigurationSection;
   get (path: string): JavaObject;
   get (path: string, def: JavaObject): JavaObject;
   getBoolean (path: string): boolean;
   getBoolean (path: string, def: boolean): boolean;
   getBooleanList (path: string): List<Boolean>;
   getByteList (path: string): List<Byte>;
   getCharacterList (path: string): List<Character>;
   getColor (path: string): Color;
   getColor (path: string, def: Color): Color;
   getConfigurationSection (path: string): ConfigurationSection;
   getCurrentPath (): string;
   getDefault (path: string): JavaObject;
   getDefaultSection (): ConfigurationSection;
   getDouble (path: string): number;
   getDouble (path: string, def: number): number;
   getDoubleList (path: string): List<Double>;
   getFloatList (path: string): List<Float>;
   getInt (path: string): number;
   getInt (path: string, def: number): number;
   getIntegerList (path: string): List<Integer>;
   getItemStack (path: string): ItemStack;
   getItemStack (path: string, def: ItemStack): ItemStack;
   getKeys (deep: boolean): Set<string>;
   getList (path: string): List;
   getList (path: string, def: List): List;
   getLocation (path: string): Location;
   getLocation (path: string, def: Location): Location;
   getLong (path: string): number;
   getLong (path: string, def: number): number;
   getLongList (path: string): List<Long>;
   getMapList (path: string): List<Map<X, X>>;
   getName (): string;
   getObject<T> (path: string, clazz: Class<T>): T;
   getObject<T> (path: string, clazz: Class<T>, def: T): T;
   getOfflinePlayer (path: string): OfflinePlayer;
   getOfflinePlayer (path: string, def: OfflinePlayer): OfflinePlayer;
   getParent (): ConfigurationSection;
   getRoot (): Configuration;
   getSerializable<T extends ConfigurationSerializable> (path: string, clazz: Class<T>): T;
   getSerializable<T extends ConfigurationSerializable> (path: string, clazz: Class<T>, def: T): T;
   getShortList (path: string): List<Short>;
   getString (path: string): string;
   getString (path: string, def: string): string;
   getStringList (path: string): List<string>;
   getValues (deep: boolean): Map<string, JavaObject>;
   getVector (path: string): Vector;
   getVector (path: string, def: Vector): Vector;
   isBoolean (path: string): boolean;
   isColor (path: string): boolean;
   isConfigurationSection (path: string): boolean;
   isDouble (path: string): boolean;
   isInt (path: string): boolean;
   isItemStack (path: string): boolean;
   isList (path: string): boolean;
   isLocation (path: string): boolean;
   isLong (path: string): boolean;
   isOfflinePlayer (path: string): boolean;
   isPrimitiveWrapper (input: JavaObject): boolean;
   isSet (path: string): boolean;
   isString (path: string): boolean;
   isVector (path: string): boolean;
   mapChildrenKeys (output: Set<string>, section: ConfigurationSection, deep: boolean): void;
   mapChildrenValues (output: Map<string, JavaObject>, section: ConfigurationSection, deep: boolean): void;
   set (path: string, value: JavaObject): void;
   toString (): string;
}
export interface Merchant {
   getRecipe(i: number): MerchantRecipe;
   getRecipeCount(): number;
   getRecipes(): List<MerchantRecipe>;
   getTrader(): HumanEntity;
   isTrading(): boolean;
   setRecipe(i: number, recipe: MerchantRecipe): void;
   setRecipes(recipes: List<MerchantRecipe>): void;
}
export interface MerchantInventory extends Inventory {
   getMerchant(): Merchant;
   getSelectedRecipe(): MerchantRecipe;
   getSelectedRecipeIndex(): number;
}
export class MerchantRecipe extends JavaObject implements Recipe {
   constructor (result: ItemStack, max_uses: number);
   constructor (result: ItemStack, uses: number, max_uses: number, experience_reward: boolean);
   constructor (
      result: ItemStack,
      uses: number,
      max_uses: number,
      experience_reward: boolean,
      villager_experience: number,
      price_multiplier: number
   );
   addIngredient (item: ItemStack): void;
   getIngredients (): List<ItemStack>;
   getMaxUses (): number;
   getPriceMultiplier (): number;
   getResult (): ItemStack;
   getUses (): number;
   getVillagerExperience (): number;
   hasExperienceReward (): boolean;
   removeIngredient (index: number): void;
   setExperienceReward (flag: boolean): void;
   setIngredients (ingredients: List<ItemStack>): void;
   setMaxUses (max_uses: number): void;
   setPriceMultiplier (price_multiplier: number): void;
   setUses (uses: number): void;
   setVillagerExperience (villager_experience: number): void;
}
export interface MessageCommandSender extends CommandSender {
   addAttachment(plugin: Plugin): PermissionAttachment;
   addAttachment(plugin: Plugin, ticks: number): PermissionAttachment;
   addAttachment(plugin: Plugin, name: string, value: boolean): PermissionAttachment;
   addAttachment(plugin: Plugin, name: string, value: boolean, ticks: number): PermissionAttachment;
   getEffectivePermissions(): Set<PermissionAttachmentInfo>;
   getName(): string;
   getServer(): Server;
   hasPermission(name: string): boolean;
   hasPermission(perm: Permission): boolean;
   isOp(): boolean;
   isPermissionSet(name: string): boolean;
   isPermissionSet(perm: Permission): boolean;
   recalculatePermissions(): void;
   removeAttachment(attachment: PermissionAttachment): void;
   sendMessage(messages: string[]): void;
   setOp(value: boolean): void;
   spigot(): CommandSender$Spigot;
}
export class MessagePrompt extends JavaObject implements Prompt {
   constructor ();
   acceptInput (context: ConversationContext, input: string): Prompt;
   blocksForInput (context: ConversationContext): boolean;
   getNextPrompt (context: ConversationContext): Prompt;
}
export class MessageTooLargeException extends RuntimeException {
   constructor ();
   constructor (message: byte[]);
   constructor (length: number);
   constructor (msg: string);
}
export interface Messenger {
   dispatchIncomingMessage(source: Player, channel: string, message: byte[]): void;
   getIncomingChannelRegistrations(channel: string): Set<PluginMessageListenerRegistration>;
   getIncomingChannelRegistrations(plugin: Plugin): Set<PluginMessageListenerRegistration>;
   getIncomingChannelRegistrations(plugin: Plugin, channel: string): Set<PluginMessageListenerRegistration>;
   getIncomingChannels(): Set<string>;
   getIncomingChannels(plugin: Plugin): Set<string>;
   getOutgoingChannels(): Set<string>;
   getOutgoingChannels(plugin: Plugin): Set<string>;
   isIncomingChannelRegistered(plugin: Plugin, channel: string): boolean;
   isOutgoingChannelRegistered(plugin: Plugin, channel: string): boolean;
   isRegistrationValid(registration: PluginMessageListenerRegistration): boolean;
   isReservedChannel(channel: string): boolean;
   registerIncomingPluginChannel(
      plugin: Plugin,
      channel: string,
      listener: PluginMessageListener
   ): PluginMessageListenerRegistration;
   registerOutgoingPluginChannel(plugin: Plugin, channel: string): void;
   unregisterIncomingPluginChannel(plugin: Plugin): void;
   unregisterIncomingPluginChannel(plugin: Plugin, channel: string): void;
   unregisterIncomingPluginChannel(plugin: Plugin, channel: string, listener: PluginMessageListener): void;
   unregisterOutgoingPluginChannel(plugin: Plugin): void;
   unregisterOutgoingPluginChannel(plugin: Plugin, channel: string): void;
}
export interface Metadatable {
   getMetadata(metadata_key: string): List<MetadataValue>;
   hasMetadata(metadata_key: string): boolean;
   removeMetadata(metadata_key: string, owning_plugin: Plugin): void;
   setMetadata(metadata_key: string, new_metadata_value: MetadataValue): void;
}
export class MetadataConversionException extends RuntimeException {}
export class MetadataEvaluationException extends RuntimeException {}
export interface MetadataStore<T> {
   getMetadata(subject: T, metadata_key: string): List<MetadataValue>;
   hasMetadata(subject: T, metadata_key: string): boolean;
   invalidateAll(owning_plugin: Plugin): void;
   removeMetadata(subject: T, metadata_key: string, owning_plugin: Plugin): void;
   setMetadata(subject: T, metadata_key: string, new_metadata_value: MetadataValue): void;
}
export class MetadataStoreBase<T> extends JavaObject {
   constructor ();
   disambiguate (subject: T, metadata_key: string): string;
   getMetadata (subject: T, metadata_key: string): List<MetadataValue>;
   hasMetadata (subject: T, metadata_key: string): boolean;
   invalidateAll (owning_plugin: Plugin): void;
   removeAll (owning_plugin: Plugin): void;
   removeMetadata (subject: T, metadata_key: string, owning_plugin: Plugin): void;
   setMetadata (subject: T, metadata_key: string, new_metadata_value: MetadataValue): void;
}
export interface MetadataValue {
   asBoolean(): boolean;
   asByte(): number;
   asDouble(): number;
   asFloat(): number;
   asInt(): number;
   asLong(): number;
   asShort(): number;
   asString(): string;
   getOwningPlugin(): Plugin;
   invalidate(): void;
   value(): JavaObject;
}
export class MetadataValueAdapter extends JavaObject implements MetadataValue {
   constructor (owning_plugin: Plugin);
   asBoolean (): boolean;
   asByte (): number;
   asDouble (): number;
   asFloat (): number;
   asInt (): number;
   asLong (): number;
   asShort (): number;
   asString (): string;
   getOwningPlugin (): Plugin;
}
export class MethodHandleEventExecutor extends JavaObject implements EventExecutor {
   constructor (event_class: Class<Event>, handle: MethodHandle);
   constructor (event_class: Class<Event>, m: Method);
   execute (listener: Listener, event: Event): void;
}
export interface Minecart extends Vehicle {
   getDamage(): number;
   getDerailedVelocityMod(): Vector;
   getDisplayBlock(): MaterialData;
   getDisplayBlockData(): BlockData;
   getDisplayBlockOffset(): number;
   getFlyingVelocityMod(): Vector;
   getMaxSpeed(): number;
   isSlowWhenEmpty(): boolean;
   setDamage(damage: number): void;
   setDerailedVelocityMod(derailed: Vector): void;
   setDisplayBlock(material: MaterialData): void;
   setDisplayBlockData(block_data: BlockData): void;
   setDisplayBlockOffset(offset: number): void;
   setFlyingVelocityMod(flying: Vector): void;
   setMaxSpeed(speed: number): void;
   setSlowWhenEmpty(slow: boolean): void;
}
export class MinecraftFont extends MapFont {
   constructor ();
   static Fon (undefined): MinecraftFont;
   static Fon (undefined): MinecraftFont;
   static Fon (undefined): MinecraftFont;
}
export class Mirror {
   static FRONT_BACK: Mirror;
   static LEFT_RIGHT: Mirror;
   static NONE: Mirror;
   static valueOf (name: string): Mirror;
   static values (): Mirror[];
}
export interface Mob extends LivingEntity, Lootable {
   getPathfinder(): Pathfinder;
   getTarget(): LivingEntity;
   isAware(): boolean;
   isInDaylight(): boolean;
   setAware(aware: boolean): void;
   setTarget(target: LivingEntity): void;
}
export interface MobGoals {
   addGoal<T extends Mob>(mob: T, priority: number, goal: Goal<T>): void;
   getAllGoals<T extends Mob>(mob: T): Collection<Goal<T>>;
   getAllGoals<T extends Mob>(mob: T, type: GoalType): Collection<Goal<T>>;
   getAllGoalsWithout<T extends Mob>(mob: T, type: GoalType): Collection<Goal<T>>;
   getGoal<T extends Mob>(mob: T, key: GoalKey<T>): Goal<T>;
   getGoals<T extends Mob>(mob: T, key: GoalKey<T>): Collection<Goal<T>>;
   getRunningGoals<T extends Mob>(mob: T): Collection<Goal<T>>;
   getRunningGoals<T extends Mob>(mob: T, type: GoalType): Collection<Goal<T>>;
   getRunningGoalsWithout<T extends Mob>(mob: T, type: GoalType): Collection<Goal<T>>;
   hasGoal<T extends Mob>(mob: T, key: GoalKey<T>): boolean;
   removeAllGoals<T extends Mob>(mob: T): void;
   removeAllGoals<T extends Mob>(mob: T, type: GoalType): void;
   removeGoal<T extends Mob>(mob: T, goal: Goal<T>): void;
   removeGoal<T extends Mob>(mob: T, key: GoalKey<T>): void;
}
export class MoistureChangeEvent extends BlockEvent implements Cancellable {
   constructor (block: Block, new_state: BlockState);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getNewState (): BlockState;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export interface Monster extends Creature {}
export class MonsterEggs extends TexturedMaterial {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): MonsterEggs;
   getTextures (): List<Material>;
}
export class MRUMapCache<K, V> extends AbstractMap<K, V> {
   constructor (backing_map: Map<K, V>);
   clear (): void;
   containsKey (key: JavaObject): boolean;
   containsValue (value: JavaObject): boolean;
   entrySet (): Set<Map$Entry<K, V>>;
   get (key: JavaObject): V;
   isEmpty (): boolean;
   keySet (): Set<K>;
   static of<K, V> (map: Map<K, V>): Map<K, V>;
   put (key: K, value: V): V;
   putAll (m: Map<K, V>): void;
   remove (key: JavaObject): V;
   size (): number;
   values (): Collection<V>;
}
export interface Mule extends ChestedHorse {}
export class MultipleCommandAlias extends Command {
   constructor (name: string, commands: Command[]);
   execute (sender: CommandSender, command_label: string, args: string[]): boolean;
   getCommands (): Command[];
}
export interface MultipleFacing extends BlockData {
   getAllowedFaces(): Set<BlockFace>;
   getFaces(): Set<BlockFace>;
   hasFace(face: BlockFace): boolean;
   setFace(face: BlockFace, has: boolean): void;
}
export class Mushroom extends MaterialData {
   constructor (shroom: Material);
   constructor (shroom: Material, data: number);
   constructor (shroom: Material, cap_face: BlockFace);
   constructor (shroom: Material, texture: MushroomBlockTexture);
   clone (): Mushroom;
   getBlockTexture (): MushroomBlockTexture;
   getPaintedFaces (): Set<BlockFace>;
   isFacePainted (face: BlockFace): boolean;
   isStem (): boolean;
   setBlockTexture (texture: MushroomBlockTexture): void;
   setFacePainted (face: BlockFace, painted: boolean): void;
   setStem (): void;
   toString (): string;
}
export class MushroomBlockTexture {
   static ALL_CAP: MushroomBlockTexture;
   static ALL_PORES: MushroomBlockTexture;
   static ALL_STEM: MushroomBlockTexture;
   static CAP_EAST: MushroomBlockTexture;
   static CAP_NORTH: MushroomBlockTexture;
   static CAP_NORTH_EAST: MushroomBlockTexture;
   static CAP_NORTH_WEST: MushroomBlockTexture;
   static CAP_SOUTH: MushroomBlockTexture;
   static CAP_SOUTH_EAST: MushroomBlockTexture;
   static CAP_SOUTH_WEST: MushroomBlockTexture;
   static CAP_TOP: MushroomBlockTexture;
   static CAP_WEST: MushroomBlockTexture;
   static STEM_SIDES: MushroomBlockTexture;
   static getByData (data: number): MushroomBlockTexture;
   static getCapByFace (face: BlockFace): MushroomBlockTexture;
   getCapFace (): BlockFace;
   getData (): number;
   static valueOf (name: string): MushroomBlockTexture;
   static values (): MushroomBlockTexture[];
}
export interface MushroomCow extends Cow {
   getVariant(): MushroomCow$Variant;
   setVariant(variant: MushroomCow$Variant): void;
}
export class MushroomCow$Variant {
   static BROWN: MushroomCow$Variant;
   static RED: MushroomCow$Variant;
   static valueOf (name: string): MushroomCow$Variant;
   static values (): MushroomCow$Variant[];
}
export interface Nameable {
   getCustomName(): string;
   setCustomName(name: string): void;
}
export interface Namespaced {
   getKey(): string;
   getNamespace(): string;
}
export class NamespacedKey extends JavaObject implements Namespaced {
   constructor (namespace: string, key: string);
   constructor (plugin: Plugin, key: string);
   equals (obj: JavaObject): boolean;
   getKey (): string;
   getNamespace (): string;
   hashCode (): number;
   static minecraft (key: string): NamespacedKey;
   static randomKey (): NamespacedKey;
   toString (): string;
}
export class NamespacedTag extends JavaObject implements Namespaced {
   constructor (namespace: string, key: string);
   constructor (plugin: Plugin, key: string);
   equals (obj: JavaObject): boolean;
   getKey (): string;
   getNamespace (): string;
   hashCode (): number;
   static minecraft (key: string): NamespacedTag;
   static randomKey (): NamespacedTag;
   toString (): string;
}
export class NameTagVisibility {
   static ALWAYS: NameTagVisibility;
   static HIDE_FOR_OTHER_TEAMS: NameTagVisibility;
   static HIDE_FOR_OWN_TEAM: NameTagVisibility;
   static NEVER: NameTagVisibility;
   static valueOf (name: string): NameTagVisibility;
   static values (): NameTagVisibility[];
}
export class NetherWarts extends MaterialData {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   constructor (state: NetherWartsState);
   clone (): NetherWarts;
   getState (): NetherWartsState;
   setState (state: NetherWartsState): void;
   toString (): string;
}
export class NetherWartsState {
   static RIPE: NetherWartsState;
   static SEEDED: NetherWartsState;
   static STAGE_ONE: NetherWartsState;
   static STAGE_TWO: NetherWartsState;
   static valueOf (name: string): NetherWartsState;
   static values (): NetherWartsState[];
}
export interface NetworkClient {
   getAddress(): InetSocketAddress;
   getProtocolVersion(): number;
   getVirtualHost(): InetSocketAddress;
}
export class NoiseGenerator extends JavaObject {
   constructor ();
   static fade (x: number): number;
   static floor (x: number): number;
   static grad (hash: number, x: number, y: number, z: number): number;
   static lerp (x: number, y: number, z: number): number;
   noise (x: number): number;
   noise (x: number, y: number): number;
   noise (x: number, y: number, z: number): number;
   noise (x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number): number;
   noise (
      x: number,
      y: number,
      z: number,
      octaves: number,
      frequency: number,
      amplitude: number,
      normalized: boolean
   ): number;
   noise (x: number, y: number, octaves: number, frequency: number, amplitude: number): number;
   noise (x: number, y: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
   noise (x: number, octaves: number, frequency: number, amplitude: number): number;
   noise (x: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
}
export class Note extends JavaObject {
   constructor (note: number);
   constructor (octave: number, tone: Note$Tone, sharped: boolean);
   equals (obj: JavaObject): boolean;
   static flat (octave: number, tone: Note$Tone): Note;
   flattened (): Note;
   getId (): number;
   getOctave (): number;
   getTone (): Note$Tone;
   hashCode (): number;
   isSharped (): boolean;
   static natural (octave: number, tone: Note$Tone): Note;
   static sharp (octave: number, tone: Note$Tone): Note;
   sharped (): Note;
   toString (): string;
}
export class Note$Tone {
   static A: Note$Tone;
   static B: Note$Tone;
   static C: Note$Tone;
   static D: Note$Tone;
   static E: Note$Tone;
   static F: Note$Tone;
   static G: Note$Tone;
   static getById (id: number): Note$Tone;
   getId (): number;
   getId (sharped: boolean): number;
   isSharpable (): boolean;
   isSharped (id: number): boolean;
   static valueOf (name: string): Note$Tone;
   static values (): Note$Tone[];
}
export interface NoteBlock extends Powerable {
   getInstrument(): Instrument;
   getNote(): Note;
   setInstrument(instrument: Instrument): void;
   setNote(note: Note): void;
}
export class NotePlayEvent extends BlockEvent implements Cancellable {
   constructor (block: Block, instrument: Instrument, note: Note);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getInstrument (): Instrument;
   getNote (): Note;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setInstrument (instrument: Instrument): void;
   setNote (note: Note): void;
}
export interface NPC extends Creature {}
export class NullConversationPrefix extends JavaObject implements ConversationPrefix {
   constructor ();
   getPrefix (context: ConversationContext): string;
}
export class NullTimingHandler extends JavaObject implements Timing {
   constructor ();
   abort (): void;
   close (): void;
   getTimingHandler (): co$aikar$timings$TimingHandler;
   startTiming (): Timing;
   startTimingIfSync (): Timing;
   stopTiming (): void;
   stopTimingIfSync (): void;
}
export class NumberConversions extends JavaObject {
   static ceil (num: number): number;
   static checkFinite (d: number, message: string): void;
   static checkFinite (d: number, message: string): void;
   static floor (num: number): number;
   static isFinite (d: number): boolean;
   static isFinite (f: number): boolean;
   static round (num: number): number;
   static square (num: number): number;
   static toByte (object: JavaObject): number;
   static toDouble (object: JavaObject): number;
   static toFloat (object: JavaObject): number;
   static toInt (object: JavaObject): number;
   static toLong (object: JavaObject): number;
   static toShort (object: JavaObject): number;
}
export class NumericPrompt extends ValidatingPrompt {
   constructor ();
   acceptValidatedInput (context: ConversationContext, input: Number): Prompt;
   acceptValidatedInput (context: ConversationContext, input: string): Prompt;
   getFailedValidationText (context: ConversationContext, invalid_input: Number): string;
   getFailedValidationText (context: ConversationContext, invalid_input: string): string;
   getInputNotNumericText (context: ConversationContext, invalid_input: string): string;
   isInputValid (context: ConversationContext, input: string): boolean;
   isNumberValid (context: ConversationContext, input: Number): boolean;
}
export interface Objective {
   getCriteria(): string;
   getDisplayName(): string;
   getDisplaySlot(): DisplaySlot;
   getName(): string;
   getRenderType(): RenderType;
   getScore(entry: string): Score;
   getScore(player: OfflinePlayer): Score;
   getScoreboard(): Scoreboard;
   isModifiable(): boolean;
   setDisplayName(display_name: string): void;
   setDisplaySlot(slot: DisplaySlot): void;
   setRenderType(render_type: RenderType): void;
   unregister(): void;
}
export interface Observer extends Directional, Powerable {}
export class Observer extends MaterialData {
   constructor ();
   constructor (direction: BlockFace);
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Observer;
   getFacing (): BlockFace;
   isPowered (): boolean;
   setFacingDirection (face: BlockFace): void;
   toString (): string;
}
export interface Ocelot extends Animals {
   getCatType(): Ocelot$Type;
   setCatType(type: Ocelot$Type): void;
}
export class Ocelot$Type {
   static BLACK_CAT: Ocelot$Type;
   static RED_CAT: Ocelot$Type;
   static SIAMESE_CAT: Ocelot$Type;
   static WILD_OCELOT: Ocelot$Type;
   getId (): number;
   static getType (id: number): Ocelot$Type;
   static valueOf (name: string): Ocelot$Type;
   static values (): Ocelot$Type[];
}
export class OctaveGenerator extends JavaObject {
   constructor (octaves: NoiseGenerator[]);
   getOctaves (): NoiseGenerator[];
   getXScale (): number;
   getYScale (): number;
   getZScale (): number;
   noise (x: number, frequency: number, amplitude: number): number;
   noise (x: number, frequency: number, amplitude: number, normalized: boolean): number;
   noise (x: number, y: number, frequency: number, amplitude: number): number;
   noise (x: number, y: number, frequency: number, amplitude: number, normalized: boolean): number;
   noise (x: number, y: number, z: number, frequency: number, amplitude: number): number;
   noise (x: number, y: number, z: number, frequency: number, amplitude: number, normalized: boolean): number;
   setScale (scale: number): void;
   setXScale (scale: number): void;
   setYScale (scale: number): void;
   setZScale (scale: number): void;
}
export interface OfflinePlayer extends ServerOperator, AnimalTamer, ConfigurationSerializable {
   banPlayer(reason: string): BanEntry;
   banPlayer(reason: string, source: string): BanEntry;
   banPlayer(reason: string, expires: Date): BanEntry;
   banPlayer(reason: string, expires: Date, source: string): BanEntry;
   banPlayer(reason: string, expires: Date, source: string, kick_if_online: boolean): BanEntry;
   decrementStatistic(statistic: Statistic): void;
   decrementStatistic(statistic: Statistic, amount: number): void;
   decrementStatistic(statistic: Statistic, entity_type: EntityType): void;
   decrementStatistic(statistic: Statistic, entity_type: EntityType, amount: number): void;
   decrementStatistic(statistic: Statistic, material: Material): void;
   decrementStatistic(statistic: Statistic, material: Material, amount: number): void;
   getBedSpawnLocation(): Location;
   getFirstPlayed(): number;
   getLastLogin(): number;
   getLastPlayed(): number;
   getLastSeen(): number;
   getName(): string;
   getPlayer(): Player;
   getStatistic(statistic: Statistic): number;
   getStatistic(statistic: Statistic, entity_type: EntityType): number;
   getStatistic(statistic: Statistic, material: Material): number;
   getUniqueId(): UUID;
   hasPlayedBefore(): boolean;
   incrementStatistic(statistic: Statistic): void;
   incrementStatistic(statistic: Statistic, amount: number): void;
   incrementStatistic(statistic: Statistic, entity_type: EntityType): void;
   incrementStatistic(statistic: Statistic, entity_type: EntityType, amount: number): void;
   incrementStatistic(statistic: Statistic, material: Material): void;
   incrementStatistic(statistic: Statistic, material: Material, amount: number): void;
   isBanned(): boolean;
   isOnline(): boolean;
   isWhitelisted(): boolean;
   setStatistic(statistic: Statistic, new_value: number): void;
   setStatistic(statistic: Statistic, entity_type: EntityType, new_value: number): void;
   setStatistic(statistic: Statistic, material: Material, new_value: number): void;
   setWhitelisted(value: boolean): void;
}
export interface Openable extends BlockData {
   isOpen(): boolean;
   setOpen(open: boolean): void;
}
export interface Openable {
   isOpen(): boolean;
   setOpen(is_open: boolean): void;
}
export interface Orientable extends BlockData {
   getAxes(): Set<Axis>;
   getAxis(): Axis;
   setAxis(axis: Axis): void;
}
export interface Painting extends Hanging {
   getArt(): Art;
   setArt(art: Art): boolean;
   setArt(art: Art, force: boolean): boolean;
}
export interface Panda extends Animals {
   getHiddenGene(): Panda$Gene;
   getMainGene(): Panda$Gene;
   setHiddenGene(gene: Panda$Gene): void;
   setMainGene(gene: Panda$Gene): void;
}
export class Panda$Gene {
   static AGGRESSIVE: Panda$Gene;
   static BROWN: Panda$Gene;
   static LAZY: Panda$Gene;
   static NORMAL: Panda$Gene;
   static PLAYFUL: Panda$Gene;
   static WEAK: Panda$Gene;
   static WORRIED: Panda$Gene;
   isRecessive (): boolean;
   static valueOf (name: string): Panda$Gene;
   static values (): Panda$Gene[];
}
export class PaperPluginLogger extends Logger {
   static getLogger (description: PluginDescriptionFile): Logger;
   setParent (parent: Logger): void;
}
export class PaperServerListPingEvent extends ServerListPingEvent implements Cancellable {
   constructor (
      client: StatusClient,
      motd: string,
      num_players: number,
      max_players: number,
      version: string,
      protocol_version: number,
      favicon: CachedServerIcon
   );
   getBukkitPlayer (player: JavaObject): Player;
   getClient (): StatusClient;
   getMaxPlayers (): number;
   getNumPlayers (): number;
   getOnlinePlayers (): JavaObject[];
   getPlayerSample (): List<PlayerProfile>;
   getProtocolVersion (): number;
   getServerIcon (): CachedServerIcon;
   getVersion (): string;
   isCancelled (): boolean;
   iterator (): Iterator<Player>;
   setCancelled (cancel: boolean): void;
   setHidePlayers (hide_players: boolean): void;
   setNumPlayers (num_players: number): void;
   setProtocolVersion (protocol_version: number): void;
   setServerIcon (icon: CachedServerIcon): void;
   setVersion (version: string): void;
   shouldHidePlayers (): boolean;
}
export interface Parrot extends Tameable, Sittable {
   getVariant(): Parrot$Variant;
   setVariant(variant: Parrot$Variant): void;
}
export class Parrot$Variant {
   static BLUE: Parrot$Variant;
   static CYAN: Parrot$Variant;
   static GRAY: Parrot$Variant;
   static GREEN: Parrot$Variant;
   static RED: Parrot$Variant;
   static valueOf (name: string): Parrot$Variant;
   static values (): Parrot$Variant[];
}
export class Particle {
   static ASH: Particle;
   static BARRIER: Particle;
   static BLOCK_CRACK: Particle;
   static BLOCK_DUST: Particle;
   static BUBBLE_COLUMN_UP: Particle;
   static BUBBLE_POP: Particle;
   static CAMPFIRE_COSY_SMOKE: Particle;
   static CAMPFIRE_SIGNAL_SMOKE: Particle;
   static CLOUD: Particle;
   static COMPOSTER: Particle;
   static CRIMSON_SPORE: Particle;
   static CRIT: Particle;
   static CRIT_MAGIC: Particle;
   static CURRENT_DOWN: Particle;
   static DAMAGE_INDICATOR: Particle;
   static DOLPHIN: Particle;
   static DRAGON_BREATH: Particle;
   static DRIP_LAVA: Particle;
   static DRIP_WATER: Particle;
   static DRIPPING_HONEY: Particle;
   static DRIPPING_OBSIDIAN_TEAR: Particle;
   static ENCHANTMENT_TABLE: Particle;
   static END_ROD: Particle;
   static EXPLOSION_HUGE: Particle;
   static EXPLOSION_LARGE: Particle;
   static EXPLOSION_NORMAL: Particle;
   static FALLING_DUST: Particle;
   static FALLING_HONEY: Particle;
   static FALLING_LAVA: Particle;
   static FALLING_NECTAR: Particle;
   static FALLING_OBSIDIAN_TEAR: Particle;
   static FALLING_WATER: Particle;
   static FIREWORKS_SPARK: Particle;
   static FLAME: Particle;
   static FLASH: Particle;
   static HEART: Particle;
   static ITEM_CRACK: Particle;
   static LANDING_HONEY: Particle;
   static LANDING_LAVA: Particle;
   static LANDING_OBSIDIAN_TEAR: Particle;
   static LAVA: Particle;
   static LEGACY_BLOCK_CRACK: Particle;
   static LEGACY_BLOCK_DUST: Particle;
   static LEGACY_FALLING_DUST: Particle;
   static MOB_APPEARANCE: Particle;
   static NAUTILUS: Particle;
   static NOTE: Particle;
   static PORTAL: Particle;
   static REDSTONE: Particle;
   static REVERSE_PORTAL: Particle;
   static SLIME: Particle;
   static SMOKE_LARGE: Particle;
   static SMOKE_NORMAL: Particle;
   static SNEEZE: Particle;
   static SNOW_SHOVEL: Particle;
   static SNOWBALL: Particle;
   static SOUL: Particle;
   static SOUL_FIRE_FLAME: Particle;
   static SPELL: Particle;
   static SPELL_INSTANT: Particle;
   static SPELL_MOB: Particle;
   static SPELL_MOB_AMBIENT: Particle;
   static SPELL_WITCH: Particle;
   static SPIT: Particle;
   static SQUID_INK: Particle;
   static SUSPENDED: Particle;
   static SUSPENDED_DEPTH: Particle;
   static SWEEP_ATTACK: Particle;
   static TOTEM: Particle;
   static TOWN_AURA: Particle;
   static VILLAGER_ANGRY: Particle;
   static VILLAGER_HAPPY: Particle;
   static WARPED_SPORE: Particle;
   static WATER_BUBBLE: Particle;
   static WATER_DROP: Particle;
   static WATER_SPLASH: Particle;
   static WATER_WAKE: Particle;
   static WHITE_ASH: Particle;
   builder (): ParticleBuilder;
   getDataType (): Class;
   static valueOf (name: string): Particle;
   static values (): Particle[];
}
export class Particle$DustOptions extends JavaObject {
   constructor (color: Color, size: number);
   getColor (): Color;
   getSize (): number;
}
export class ParticleBuilder extends JavaObject {
   constructor (particle: Particle);
   allPlayers (): ParticleBuilder;
   color (r: number, g: number, b: number): ParticleBuilder;
   color (color: Color): ParticleBuilder;
   color (color: Color, size: number): ParticleBuilder;
   count (): number;
   count (count: number): ParticleBuilder;
   data<T> (): T;
   data<T> (data: T): ParticleBuilder;
   extra (): number;
   extra (extra: number): ParticleBuilder;
   force (force: boolean): ParticleBuilder;
   hasReceivers (): boolean;
   location (): Location;
   location (location: Location): ParticleBuilder;
   location (world: World, x: number, y: number, z: number): ParticleBuilder;
   offset (offset_x: number, offset_y: number, offset_z: number): ParticleBuilder;
   offsetX (): number;
   offsetY (): number;
   offsetZ (): number;
   particle (): Particle;
   particle (particle: Particle): ParticleBuilder;
   receivers (): List<Player>;
   receivers (radius: number): ParticleBuilder;
   receivers (radius: number, by_distance: boolean): ParticleBuilder;
   receivers (xz_radius: number, y_radius: number): ParticleBuilder;
   receivers (xz_radius: number, y_radius: number, by_distance: boolean): ParticleBuilder;
   receivers (x_radius: number, y_radius: number, z_radius: number): ParticleBuilder;
   receivers (receivers: Collection<Player>): ParticleBuilder;
   receivers (receivers: List<Player>): ParticleBuilder;
   receivers (...receivers: Player): ParticleBuilder;
   source (): Player;
   source (source: Player): ParticleBuilder;
   spawn (): ParticleBuilder;
}
export interface Pathfinder {
   canFloat(): boolean;
   canOpenDoors(): boolean;
   canPassDoors(): boolean;
   findPath(target: LivingEntity): Pathfinder$PathResult;
   findPath(loc: Location): Pathfinder$PathResult;
   getCurrentPath(): Pathfinder$PathResult;
   getEntity(): Mob;
   hasPath(): boolean;
   moveTo(path: Pathfinder$PathResult): boolean;
   moveTo(path: Pathfinder$PathResult, speed: number): boolean;
   moveTo(target: LivingEntity): boolean;
   moveTo(target: LivingEntity, speed: number): boolean;
   moveTo(loc: Location): boolean;
   moveTo(loc: Location, speed: number): boolean;
   setCanFloat(can_float: boolean): void;
   setCanOpenDoors(can_open_doors: boolean): void;
   setCanPassDoors(can_pass_doors: boolean): void;
   stopPathfinding(): void;
}
export interface Pathfinder$PathResult {
   getFinalPoint(): Location;
   getNextPoint(): Location;
   getNextPointIndex(): number;
   getPoints(): List<Location>;
}
export class Pattern extends JavaObject implements ConfigurationSerializable {
   constructor (map: Map<string, JavaObject>);
   constructor (color: DyeColor, pattern: PatternType);
   equals (obj: JavaObject): boolean;
   getColor (): DyeColor;
   getPattern (): PatternType;
   hashCode (): number;
   serialize (): Map<string, JavaObject>;
}
export class PatternType {
   static BASE: PatternType;
   static BORDER: PatternType;
   static BRICKS: PatternType;
   static CIRCLE_MIDDLE: PatternType;
   static CREEPER: PatternType;
   static CROSS: PatternType;
   static CURLY_BORDER: PatternType;
   static DIAGONAL_LEFT: PatternType;
   static DIAGONAL_LEFT_MIRROR: PatternType;
   static DIAGONAL_RIGHT: PatternType;
   static DIAGONAL_RIGHT_MIRROR: PatternType;
   static FLOWER: PatternType;
   static GLOBE: PatternType;
   static GRADIENT: PatternType;
   static GRADIENT_UP: PatternType;
   static HALF_HORIZONTAL: PatternType;
   static HALF_HORIZONTAL_MIRROR: PatternType;
   static HALF_VERTICAL: PatternType;
   static HALF_VERTICAL_MIRROR: PatternType;
   static MOJANG: PatternType;
   static PIGLIN: PatternType;
   static RHOMBUS_MIDDLE: PatternType;
   static SKULL: PatternType;
   static SQUARE_BOTTOM_LEFT: PatternType;
   static SQUARE_BOTTOM_RIGHT: PatternType;
   static SQUARE_TOP_LEFT: PatternType;
   static SQUARE_TOP_RIGHT: PatternType;
   static STRAIGHT_CROSS: PatternType;
   static STRIPE_BOTTOM: PatternType;
   static STRIPE_CENTER: PatternType;
   static STRIPE_DOWNLEFT: PatternType;
   static STRIPE_DOWNRIGHT: PatternType;
   static STRIPE_LEFT: PatternType;
   static STRIPE_MIDDLE: PatternType;
   static STRIPE_RIGHT: PatternType;
   static STRIPE_SMALL: PatternType;
   static STRIPE_TOP: PatternType;
   static TRIANGLE_BOTTOM: PatternType;
   static TRIANGLE_TOP: PatternType;
   static TRIANGLES_BOTTOM: PatternType;
   static TRIANGLES_TOP: PatternType;
   static getByIdentifier (identifier: string): PatternType;
   getIdentifier (): string;
   static valueOf (name: string): PatternType;
   static values (): PatternType[];
}
export class PerlinNoiseGenerator extends NoiseGenerator {
   constructor ();
   constructor (seed: number);
   constructor (rand: Random);
   constructor (world: World);
   static getInstance (): PerlinNoiseGenerator;
   static getNoise (x: number): number;
   static getNoise (x: number, y: number): number;
   static getNoise (x: number, y: number, z: number): number;
   static getNoise (x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number): number;
   static getNoise (x: number, y: number, octaves: number, frequency: number, amplitude: number): number;
   static getNoise (x: number, octaves: number, frequency: number, amplitude: number): number;
   noise (x: number, y: number, z: number): number;
}
export class PerlinOctaveGenerator extends OctaveGenerator {
   constructor (seed: number, octaves: number);
   constructor (rand: Random, octaves: number);
   constructor (world: World, octaves: number);
}
export interface Permissible extends ServerOperator {
   addAttachment(plugin: Plugin): PermissionAttachment;
   addAttachment(plugin: Plugin, ticks: number): PermissionAttachment;
   addAttachment(plugin: Plugin, name: string, value: boolean): PermissionAttachment;
   addAttachment(plugin: Plugin, name: string, value: boolean, ticks: number): PermissionAttachment;
   getEffectivePermissions(): Set<PermissionAttachmentInfo>;
   hasPermission(name: string): boolean;
   hasPermission(perm: Permission): boolean;
   isPermissionSet(name: string): boolean;
   isPermissionSet(perm: Permission): boolean;
   recalculatePermissions(): void;
   removeAttachment(attachment: PermissionAttachment): void;
}
export class PermissibleBase extends JavaObject implements Permissible {
   constructor (opable: ServerOperator);
   addAttachment (plugin: Plugin): PermissionAttachment;
   addAttachment (plugin: Plugin, ticks: number): PermissionAttachment;
   addAttachment (plugin: Plugin, name: string, value: boolean): PermissionAttachment;
   addAttachment (plugin: Plugin, name: string, value: boolean, ticks: number): PermissionAttachment;
   clearPermissions (): void;
   getEffectivePermissions (): Set<PermissionAttachmentInfo>;
   hasPermission (in_name: string): boolean;
   hasPermission (perm: Permission): boolean;
   isOp (): boolean;
   isPermissionSet (name: string): boolean;
   isPermissionSet (perm: Permission): boolean;
   recalculatePermissions (): void;
   removeAttachment (attachment: PermissionAttachment): void;
   setOp (value: boolean): void;
}
export class Permission extends JavaObject {
   constructor (name: string);
   constructor (name: string, description: string);
   constructor (name: string, description: string, children: Map<string, Boolean>);
   constructor (name: string, description: string, default_value: PermissionDefault);
   constructor (name: string, description: string, default_value: PermissionDefault, children: Map<string, Boolean>);
   constructor (name: string, children: Map<string, Boolean>);
   constructor (name: string, default_value: PermissionDefault);
   constructor (name: string, default_value: PermissionDefault, children: Map<string, Boolean>);
   addParent (name: string, value: boolean): Permission;
   addParent (perm: Permission, value: boolean): void;
   getChildren (): Map<string, Boolean>;
   getDefault (): PermissionDefault;
   getDescription (): string;
   getName (): string;
   getPermissibles (): Set<Permissible>;
   static loadPermission (name: string, data: Map<X, X>, def: PermissionDefault, output: List<Permission>): Permission;
   static loadPermission (name: string, data: Map<string, JavaObject>): Permission;
   static loadPermissions (data: Map<X, X>, error: string, def: PermissionDefault): List<Permission>;
   recalculatePermissibles (): void;
   setDefault (value: PermissionDefault): void;
   setDescription (value: string): void;
}
export class PermissionAttachment extends JavaObject {
   constructor (plugin: Plugin, permissible: Permissible);
   getPermissible (): Permissible;
   getPermissions (): Map<string, Boolean>;
   getPlugin (): Plugin;
   getRemovalCallback (): PermissionRemovedExecutor;
   remove (): boolean;
   setPermission (name: string, value: boolean): void;
   setPermission (perm: Permission, value: boolean): void;
   setRemovalCallback (ex: PermissionRemovedExecutor): void;
   unsetPermission (name: string): void;
   unsetPermission (perm: Permission): void;
}
export class PermissionAttachmentInfo extends JavaObject {
   constructor (permissible: Permissible, permission: string, attachment: PermissionAttachment, value: boolean);
   getAttachment (): PermissionAttachment;
   getPermissible (): Permissible;
   getPermission (): string;
   getValue (): boolean;
}
export class PermissionDefault {
   static FALSE: PermissionDefault;
   static NOT_OP: PermissionDefault;
   static OP: PermissionDefault;
   static TRUE: PermissionDefault;
   static getByName (name: string): PermissionDefault;
   getValue (op: boolean): boolean;
   toString (): string;
   static valueOf (name: string): PermissionDefault;
   static values (): PermissionDefault[];
}
export interface PermissionRemovedExecutor {
   attachmentRemoved(attachment: PermissionAttachment): void;
}
export interface PersistentDataAdapterContext {
   newPersistentDataContainer(): PersistentDataContainer;
}
export interface PersistentDataContainer {
   get<T, Z>(key: NamespacedKey, type: PersistentDataType<T, Z>): Z;
   getAdapterContext(): PersistentDataAdapterContext;
   getKeys(): Set<NamespacedKey>;
   getOrDefault<T, Z>(key: NamespacedKey, type: PersistentDataType<T, Z>, default_value: Z): Z;
   has<T, Z>(key: NamespacedKey, type: PersistentDataType<T, Z>): boolean;
   isEmpty(): boolean;
   remove(key: NamespacedKey): void;
   set<T, Z>(key: NamespacedKey, type: PersistentDataType<T, Z>, value: Z): void;
}
export interface PersistentDataHolder {
   getPersistentDataContainer(): PersistentDataContainer;
}
export interface PersistentDataType<T, Z> {
   fromPrimitive(primitive: T, context: PersistentDataAdapterContext): Z;
   getComplexType(): Class<Z>;
   getPrimitiveType(): Class<T>;
   toPrimitive(complex: Z, context: PersistentDataAdapterContext): T;
}
export class PersistentDataType$PrimitivePersistentDataType<T> extends JavaObject implements PersistentDataType<T, T> {
   fromPrimitive (primitive: T, context: PersistentDataAdapterContext): T;
   getComplexType (): Class<T>;
   getPrimitiveType (): Class<T>;
   toPrimitive (complex: T, context: PersistentDataAdapterContext): T;
}
export interface Phantom extends Flying {
   getSize(): number;
   getSpawningEntity(): UUID;
   setSize(sz: number): void;
}
export class PhantomPreSpawnEvent extends PreCreatureSpawnEvent {
   constructor (location: Location, entity: Entity, reason: CreatureSpawnEvent$SpawnReason);
   getSpawningEntity (): Entity;
}
export interface Pig extends Steerable, Vehicle {}
export interface Piglin extends Monster {
   getConversionTime(): number;
   isAbleToHunt(): boolean;
   isBaby(): boolean;
   isConverting(): boolean;
   isImmuneToZombification(): boolean;
   setBaby(flag: boolean): void;
   setConversionTime(time: number): void;
   setImmuneToZombification(flag: boolean): void;
   setIsAbleToHunt(flag: boolean): void;
}
export class PigZapEvent extends EntityZapEvent implements Cancellable {
   constructor (pig: Pig, bolt: LightningStrike, pigzombie: PigZombie);
   getEntity (): Pig;
   getLightning (): LightningStrike;
   getPigZombie (): PigZombie;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export interface PigZombie extends Zombie {
   getAnger(): number;
   getConversionTime(): number;
   isAngry(): boolean;
   isConverting(): boolean;
   setAnger(level: number): void;
   setAngry(angry: boolean): void;
   setConversionTime(time: number): void;
}
export class PigZombieAngerEvent extends EntityEvent implements Cancellable {
   constructor (pig_zombie: PigZombie, target: Entity, new_anger: number);
   getEntity (): PigZombie;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getNewAnger (): number;
   getTarget (): Entity;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setNewAnger (new_anger: number): void;
}
export interface Pillager extends Illager, InventoryHolder {}
export interface Piston extends Directional {
   isExtended(): boolean;
   setExtended(extended: boolean): void;
}
export class PistonBaseMaterial extends MaterialData {
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): PistonBaseMaterial;
   getFacing (): BlockFace;
   isPowered (): boolean;
   isSticky (): boolean;
   setFacingDirection (face: BlockFace): void;
   setPowered (powered: boolean): void;
}
export class PistonExtensionMaterial extends MaterialData {
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): PistonExtensionMaterial;
   getAttachedFace (): BlockFace;
   getFacing (): BlockFace;
   isSticky (): boolean;
   setFacingDirection (face: BlockFace): void;
   setSticky (sticky: boolean): void;
}
export interface PistonHead extends TechnicalPiston {
   isShort(): boolean;
   setShort(_short: boolean): void;
}
export class PistonMoveReaction {
   static BLOCK: PistonMoveReaction;
   static BREAK: PistonMoveReaction;
   static IGNORE: PistonMoveReaction;
   static MOVE: PistonMoveReaction;
   static PUSH_ONLY: PistonMoveReaction;
   static getById (id: number): PistonMoveReaction;
   getId (): number;
   static valueOf (name: string): PistonMoveReaction;
   static values (): PistonMoveReaction[];
}
export interface Player extends HumanEntity, Conversable, OfflinePlayer, PluginMessageRecipient, NetworkClient {
   applyMending(amount: number): number;
   banPlayerFull(reason: string): BanEntry;
   banPlayerFull(reason: string, source: string): BanEntry;
   banPlayerFull(reason: string, expires: Date): BanEntry;
   banPlayerFull(reason: string, expires: Date, source: string): BanEntry;
   banPlayerIP(reason: string): BanEntry;
   banPlayerIP(reason: string, kick_player: boolean): BanEntry;
   banPlayerIP(reason: string, source: string): BanEntry;
   banPlayerIP(reason: string, source: string, kick_player: boolean): BanEntry;
   banPlayerIP(reason: string, expires: Date): BanEntry;
   banPlayerIP(reason: string, expires: Date, kick_player: boolean): BanEntry;
   banPlayerIP(reason: string, expires: Date, source: string): BanEntry;
   banPlayerIP(reason: string, expires: Date, source: string, kick_player: boolean): BanEntry;
   canSee(player: Player): boolean;
   chat(msg: string): void;
   getAddress(): InetSocketAddress;
   getAdvancementProgress(advancement: Advancement): AdvancementProgress;
   getAffectsSpawning(): boolean;
   getAllowFlight(): boolean;
   getBedSpawnLocation(): Location;
   getClientOption<T>(option: ClientOption<T>): T;
   getClientViewDistance(): number;
   getCompassTarget(): Location;
   getCooldownPeriod(): number;
   getCooledAttackStrength(adjust_ticks: number): number;
   getDisplayName(): string;
   getExhaustion(): number;
   getExp(): number;
   getFlySpeed(): number;
   getFoodLevel(): number;
   getHealthScale(): number;
   getLevel(): number;
   getLocale(): string;
   getPlayerListFooter(): string;
   getPlayerListHeader(): string;
   getPlayerListName(): string;
   getPlayerProfile(): PlayerProfile;
   getPlayerTime(): number;
   getPlayerTimeOffset(): number;
   getPlayerWeather(): WeatherType;
   getResourcePackHash(): string;
   getResourcePackStatus(): PlayerResourcePackStatusEvent$Status;
   getSaturation(): number;
   getScoreboard(): Scoreboard;
   getSpectatorTarget(): Entity;
   getTotalExperience(): number;
   getViewDistance(): number;
   getWalkSpeed(): number;
   giveExp(amount: number): void;
   giveExp(amount: number, apply_mending: boolean): void;
   giveExpLevels(amount: number): void;
   hasResourcePack(): boolean;
   hidePlayer(player: Player): void;
   hidePlayer(plugin: Plugin, player: Player): void;
   hideTitle(): void;
   isFlying(): boolean;
   isHealthScaled(): boolean;
   isOnGround(): boolean;
   isPlayerTimeRelative(): boolean;
   isSleepingIgnored(): boolean;
   isSneaking(): boolean;
   isSprinting(): boolean;
   kickPlayer(message: string): void;
   loadData(): void;
   openBook(book: ItemStack): void;
   performCommand(command: string): boolean;
   playEffect(loc: Location, effect: Effect, data: number): void;
   playEffect<T>(loc: Location, effect: Effect, data: T): void;
   playNote(loc: Location, instrument: number, note: number): void;
   playNote(loc: Location, instrument: Instrument, note: Note): void;
   playSound(location: Location, sound: string, volume: number, pitch: number): void;
   playSound(location: Location, sound: string, category: SoundCategory, volume: number, pitch: number): void;
   playSound(location: Location, sound: Sound, volume: number, pitch: number): void;
   playSound(location: Location, sound: Sound, category: SoundCategory, volume: number, pitch: number): void;
   resetCooldown(): void;
   resetPlayerTime(): void;
   resetPlayerWeather(): void;
   resetTitle(): void;
   saveData(): void;
   sendActionBar(alternate_char: char, message: string): void;
   sendActionBar(message: string): void;
   sendActionBar(...message: BaseComponent): void;
   sendBlockChange(loc: Location, block: BlockData): void;
   sendBlockChange(loc: Location, material: Material, data: number): void;
   sendChunkChange(loc: Location, sx: number, sy: number, sz: number, data: byte[]): boolean;
   sendExperienceChange(progress: number): void;
   sendExperienceChange(progress: number, level: number): void;
   sendMap(map: MapView): void;
   sendMessage(component: BaseComponent): void;
   sendMessage(...components: BaseComponent): void;
   sendMessage(position: ChatMessageType, ...components: BaseComponent): void;
   sendRawMessage(message: string): void;
   sendSignChange(loc: Location, lines: string[]): void;
   sendSignChange(loc: Location, lines: string[], dye_color: DyeColor): void;
   sendTitle(title: Title): void;
   sendTitle(title: string, subtitle: string): void;
   sendTitle(title: string, subtitle: string, fade_in: number, stay: number, fade_out: number): void;
   setAffectsSpawning(affects: boolean): void;
   setAllowFlight(flight: boolean): void;
   setBedSpawnLocation(location: Location): void;
   setBedSpawnLocation(location: Location, force: boolean): void;
   setCompassTarget(loc: Location): void;
   setDisplayName(name: string): void;
   setExhaustion(value: number): void;
   setExp(exp: number): void;
   setFlying(value: boolean): void;
   setFlySpeed(value: number): void;
   setFoodLevel(value: number): void;
   setHealthScale(scale: number): void;
   setHealthScaled(scale: boolean): void;
   setLevel(level: number): void;
   setPlayerListFooter(footer: string): void;
   setPlayerListHeader(header: string): void;
   setPlayerListHeaderFooter(header: string, footer: string): void;
   setPlayerListHeaderFooter(header: BaseComponent[], footer: BaseComponent[]): void;
   setPlayerListHeaderFooter(header: BaseComponent, footer: BaseComponent): void;
   setPlayerListName(name: string): void;
   setPlayerProfile(profile: PlayerProfile): void;
   setPlayerTime(time: number, relative: boolean): void;
   setPlayerWeather(type: WeatherType): void;
   setResourcePack(url: string): void;
   setResourcePack(url: string, hash: byte[]): void;
   setResourcePack(url: string, hash: string): void;
   setSaturation(value: number): void;
   setScoreboard(scoreboard: Scoreboard): void;
   setSleepingIgnored(is_sleeping: boolean): void;
   setSneaking(sneak: boolean): void;
   setSpectatorTarget(entity: Entity): void;
   setSprinting(sprinting: boolean): void;
   setSubtitle(subtitle: BaseComponent): void;
   setSubtitle(subtitle: BaseComponent[]): void;
   setTexturePack(url: string): void;
   setTitleTimes(fade_in_ticks: number, stay_ticks: number, fade_out_ticks: number): void;
   setTotalExperience(exp: number): void;
   setViewDistance(view_distance: number): void;
   setWalkSpeed(value: number): void;
   showPlayer(player: Player): void;
   showPlayer(plugin: Plugin, player: Player): void;
   showTitle(title: BaseComponent): void;
   showTitle(title: BaseComponent[]): void;
   showTitle(
      title: BaseComponent[],
      subtitle: BaseComponent[],
      fade_in_ticks: number,
      stay_ticks: number,
      fade_out_ticks: number
   ): void;
   showTitle(
      title: BaseComponent,
      subtitle: BaseComponent,
      fade_in_ticks: number,
      stay_ticks: number,
      fade_out_ticks: number
   ): void;
   spawnParticle(particle: Particle, x: number, y: number, z: number, count: number): void;
   spawnParticle(
      particle: Particle,
      x: number,
      y: number,
      z: number,
      count: number,
      offset_x: number,
      offset_y: number,
      offset_z: number
   ): void;
   spawnParticle(
      particle: Particle,
      x: number,
      y: number,
      z: number,
      count: number,
      offset_x: number,
      offset_y: number,
      offset_z: number,
      extra: number
   ): void;
   spawnParticle<T>(
      particle: Particle,
      x: number,
      y: number,
      z: number,
      count: number,
      offset_x: number,
      offset_y: number,
      offset_z: number,
      extra: number,
      data: T
   ): void;
   spawnParticle<T>(
      particle: Particle,
      x: number,
      y: number,
      z: number,
      count: number,
      offset_x: number,
      offset_y: number,
      offset_z: number,
      data: T
   ): void;
   spawnParticle<T>(particle: Particle, x: number, y: number, z: number, count: number, data: T): void;
   spawnParticle(particle: Particle, location: Location, count: number): void;
   spawnParticle(
      particle: Particle,
      location: Location,
      count: number,
      offset_x: number,
      offset_y: number,
      offset_z: number
   ): void;
   spawnParticle(
      particle: Particle,
      location: Location,
      count: number,
      offset_x: number,
      offset_y: number,
      offset_z: number,
      extra: number
   ): void;
   spawnParticle<T>(
      particle: Particle,
      location: Location,
      count: number,
      offset_x: number,
      offset_y: number,
      offset_z: number,
      extra: number,
      data: T
   ): void;
   spawnParticle<T>(
      particle: Particle,
      location: Location,
      count: number,
      offset_x: number,
      offset_y: number,
      offset_z: number,
      data: T
   ): void;
   spawnParticle<T>(particle: Particle, location: Location, count: number, data: T): void;
   spigot(): Player$Spigot;
   stopSound(sound: string): void;
   stopSound(sound: string, category: SoundCategory): void;
   stopSound(sound: Sound): void;
   stopSound(sound: Sound, category: SoundCategory): void;
   updateCommands(): void;
   updateInventory(): void;
   updateTitle(title: Title): void;
}
export class Player$Spigot extends Entity$Spigot {
   constructor ();
   getCollidesWithEntities (): boolean;
   getHiddenPlayers (): Set<Player>;
   getPing (): number;
   getRawAddress (): InetSocketAddress;
   respawn (): void;
   sendMessage (component: BaseComponent): void;
   sendMessage (...components: BaseComponent): void;
   sendMessage (position: ChatMessageType, component: BaseComponent): void;
   sendMessage (position: ChatMessageType, ...components: BaseComponent): void;
   setCollidesWithEntities (collides: boolean): void;
}
export class PlayerAdvancementCriterionGrantEvent extends PlayerEvent implements Cancellable {
   constructor (who: Player, advancement: Advancement, criterion: string);
   getAdvancement (): Advancement;
   getCriterion (): string;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PlayerAdvancementDoneEvent extends PlayerEvent {
   constructor (who: Player, advancement: Advancement);
   getAdvancement (): Advancement;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class PlayerAnimationEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player);
   getAnimationType (): PlayerAnimationType;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PlayerAnimationType {
   static ARM_SWING: PlayerAnimationType;
   static valueOf (name: string): PlayerAnimationType;
   static values (): PlayerAnimationType[];
}
export class PlayerArmorChangeEvent extends PlayerEvent {
   constructor (player: Player, slot_type: PlayerArmorChangeEvent$SlotType, old_item: ItemStack, new_item: ItemStack);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getNewItem (): ItemStack;
   getOldItem (): ItemStack;
   getSlotType (): PlayerArmorChangeEvent$SlotType;
   toString (): string;
}
export class PlayerArmorChangeEvent$SlotType {
   static CHEST: PlayerArmorChangeEvent$SlotType;
   static FEET: PlayerArmorChangeEvent$SlotType;
   static HEAD: PlayerArmorChangeEvent$SlotType;
   static LEGS: PlayerArmorChangeEvent$SlotType;
   static getByMaterial (material: Material): PlayerArmorChangeEvent$SlotType;
   getTypes (): Set<Material>;
   static isEquipable (material: Material): boolean;
   static valueOf (name: string): PlayerArmorChangeEvent$SlotType;
   static values (): PlayerArmorChangeEvent$SlotType[];
}
export class PlayerArmorStandManipulateEvent extends PlayerInteractEntityEvent {
   constructor (
      who: Player,
      clicked_entity: ArmorStand,
      player_item: ItemStack,
      armor_stand_item: ItemStack,
      slot: EquipmentSlot
   );
   getArmorStandItem (): ItemStack;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getPlayerItem (): ItemStack;
   getRightClicked (): ArmorStand;
   getSlot (): EquipmentSlot;
}
export class PlayerAttackEntityCooldownResetEvent extends PlayerEvent implements Cancellable {
   constructor (who: Player, attacked_entity: Entity, cooled_attack_strength: number);
   getAttackedEntity (): Entity;
   getCooledAttackStrength (): number;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PlayerAttemptPickupItemEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, item: Item);
   constructor (player: Player, item: Item, remaining: number);
   getFlyAtPlayer (): boolean;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getItem (): Item;
   getRemaining (): number;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setFlyAtPlayer (fly_at_player: boolean): void;
}
export class PlayerBedEnterEvent extends PlayerEvent implements Cancellable {
   constructor (who: Player, bed: Block);
   constructor (who: Player, bed: Block, bed_enter_result: PlayerBedEnterEvent$BedEnterResult);
   getBed (): Block;
   getBedEnterResult (): PlayerBedEnterEvent$BedEnterResult;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setUseBed (use_bed: Event$Result): void;
   useBed (): Event$Result;
}
export class PlayerBedEnterEvent$BedEnterResult {
   static NOT_POSSIBLE_HERE: PlayerBedEnterEvent$BedEnterResult;
   static NOT_POSSIBLE_NOW: PlayerBedEnterEvent$BedEnterResult;
   static NOT_SAFE: PlayerBedEnterEvent$BedEnterResult;
   static OK: PlayerBedEnterEvent$BedEnterResult;
   static OTHER_PROBLEM: PlayerBedEnterEvent$BedEnterResult;
   static TOO_FAR_AWAY: PlayerBedEnterEvent$BedEnterResult;
   static valueOf (name: string): PlayerBedEnterEvent$BedEnterResult;
   static values (): PlayerBedEnterEvent$BedEnterResult[];
}
export class PlayerBedLeaveEvent extends PlayerEvent {
   constructor (who: Player, bed: Block, set_bed_spawn: boolean);
   getBed (): Block;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   setSpawnLocation (set_bed_spawn: boolean): void;
   shouldSetSpawnLocation (): boolean;
}
export class PlayerBucketEmptyEvent extends PlayerBucketEvent {
   constructor (who: Player, block_clicked: Block, block_face: BlockFace, bucket: Material, item_in_hand: ItemStack);
   constructor (
      who: Player,
      block_clicked: Block,
      block_face: BlockFace,
      bucket: Material,
      item_in_hand: ItemStack,
      hand: EquipmentSlot
   );
   constructor (
      who: Player,
      block: Block,
      block_clicked: Block,
      block_face: BlockFace,
      bucket: Material,
      item_in_hand: ItemStack
   );
   constructor (
      who: Player,
      block: Block,
      block_clicked: Block,
      block_face: BlockFace,
      bucket: Material,
      item_in_hand: ItemStack,
      hand: EquipmentSlot
   );
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class PlayerBucketEvent extends PlayerEvent implements Cancellable {
   constructor (who: Player, block_clicked: Block, block_face: BlockFace, bucket: Material, item_in_hand: ItemStack);
   constructor (
      who: Player,
      block_clicked: Block,
      block_face: BlockFace,
      bucket: Material,
      item_in_hand: ItemStack,
      hand: EquipmentSlot
   );
   constructor (
      who: Player,
      block: Block,
      block_clicked: Block,
      block_face: BlockFace,
      bucket: Material,
      item_in_hand: ItemStack
   );
   constructor (
      who: Player,
      block: Block,
      block_clicked: Block,
      block_face: BlockFace,
      bucket: Material,
      item_in_hand: ItemStack,
      hand: EquipmentSlot
   );
   getBlock (): Block;
   getBlockClicked (): Block;
   getBlockFace (): BlockFace;
   getBucket (): Material;
   getHand (): EquipmentSlot;
   getItemStack (): ItemStack;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setItemStack (item_stack: ItemStack): void;
}
export class PlayerBucketFillEvent extends PlayerBucketEvent {
   constructor (who: Player, block_clicked: Block, block_face: BlockFace, bucket: Material, item_in_hand: ItemStack);
   constructor (
      who: Player,
      block_clicked: Block,
      block_face: BlockFace,
      bucket: Material,
      item_in_hand: ItemStack,
      hand: EquipmentSlot
   );
   constructor (
      who: Player,
      block: Block,
      block_clicked: Block,
      block_face: BlockFace,
      bucket: Material,
      item_in_hand: ItemStack
   );
   constructor (
      who: Player,
      block: Block,
      block_clicked: Block,
      block_face: BlockFace,
      bucket: Material,
      item_in_hand: ItemStack,
      hand: EquipmentSlot
   );
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class PlayerChangedMainHandEvent extends PlayerEvent {
   constructor (who: Player, main_hand: MainHand);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getMainHand (): MainHand;
}
export class PlayerChangedWorldEvent extends PlayerEvent {
   constructor (player: Player, from: World);
   getFrom (): World;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class PlayerChannelEvent extends PlayerEvent {
   constructor (player: Player, channel: string);
   getChannel (): string;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class PlayerChatEvent extends PlayerEvent {
   constructor (player: Player, message: string);
   constructor (player: Player, message: string, format: string, recipients: Set<Player>);
   getFormat (): string;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getMessage (): string;
   getRecipients (): Set<Player>;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setFormat (format: string): void;
   setMessage (message: string): void;
   setPlayer (player: Player): void;
}
export class PlayerChatTabCompleteEvent extends PlayerEvent {
   constructor (who: Player, message: string, completions: Collection<string>);
   getChatMessage (): string;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getLastToken (): string;
   getTabCompletions (): Collection<string>;
}
export class PlayerClientOptionsChangeEvent extends PlayerEvent {
   constructor (
      player: Player,
      locale: string,
      view_distance: number,
      chat_visibility: ClientOption$ChatVisibility,
      chat_colors: boolean,
      skin_parts: SkinParts,
      main_hand: MainHand
   );
   getChatVisibility (): ClientOption$ChatVisibility;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getLocale (): string;
   getMainHand (): MainHand;
   getSkinParts (): SkinParts;
   getViewDistance (): number;
   hasChatColorsEnabled (): boolean;
   hasChatColorsEnabledChanged (): boolean;
   hasChatVisibilityChanged (): boolean;
   hasLocaleChanged (): boolean;
   hasMainHandChanged (): boolean;
   hasSkinPartsChanged (): boolean;
   hasViewDistanceChanged (): boolean;
}
export class PlayerCommandPreprocessEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, message: string);
   constructor (player: Player, message: string, recipients: Set<Player>);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getMessage (): string;
   getRecipients (): Set<Player>;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setMessage (command: string): void;
   setPlayer (player: Player): void;
}
export class PlayerCommandSendEvent extends PlayerEvent {
   constructor (player: Player, commands: Collection<string>);
   getCommands (): Collection<string>;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class PlayerConnectionCloseEvent extends Event {
   constructor (player_unique_id: UUID, player_name: string, ip_address: InetAddress, async: boolean);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getIpAddress (): InetAddress;
   getPlayerName (): string;
   getPlayerUniqueId (): UUID;
}
export class PlayerDeathEvent extends EntityDeathEvent {
   constructor (
      player: Player,
      drops: List<ItemStack>,
      dropped_exp: number,
      new_exp: number,
      new_total_exp: number,
      new_level: number,
      death_message: string
   );
   constructor (
      player: Player,
      drops: List<ItemStack>,
      dropped_exp: number,
      new_exp: number,
      new_total_exp: number,
      new_level: number,
      death_message: string,
      do_exp_drop: boolean
   );
   constructor (player: Player, drops: List<ItemStack>, dropped_exp: number, new_exp: number, death_message: string);
   constructor (player: Player, drops: List<ItemStack>, dropped_exp: number, death_message: string);
   getDeathMessage (): string;
   getEntity (): Player;
   getItemsToKeep (): List<ItemStack>;
   getKeepInventory (): boolean;
   getKeepLevel (): boolean;
   getNewExp (): number;
   getNewLevel (): number;
   getNewTotalExp (): number;
   setDeathMessage (death_message: string): void;
   setKeepInventory (keep_inventory: boolean): void;
   setKeepLevel (keep_level: boolean): void;
   setNewExp (exp: number): void;
   setNewLevel (level: number): void;
   setNewTotalExp (total_exp: number): void;
   setShouldDropExperience (do_exp_drop: boolean): void;
   shouldDropExperience (): boolean;
}
export class PlayerDropItemEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, drop: Item);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getItemDrop (): Item;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PlayerEditBookEvent extends PlayerEvent implements Cancellable {
   constructor (who: Player, slot: number, previous_book_meta: BookMeta, new_book_meta: BookMeta, is_signing: boolean);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getNewBookMeta (): BookMeta;
   getPreviousBookMeta (): BookMeta;
   getSlot (): number;
   isCancelled (): boolean;
   isSigning (): boolean;
   setCancelled (cancel: boolean): void;
   setNewBookMeta (new_book_meta: BookMeta): void;
   setSigning (signing: boolean): void;
}
export class PlayerEggThrowEvent extends PlayerEvent {
   constructor (player: Player, egg: Egg, hatching: boolean, num_hatches: number, hatching_type: EntityType);
   getEgg (): Egg;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getHatchingType (): EntityType;
   getNumHatches (): number;
   isHatching (): boolean;
   setHatching (hatching: boolean): void;
   setHatchingType (hatch_type: EntityType): void;
   setNumHatches (num_hatches: number): void;
}
export class PlayerElytraBoostEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, item_stack: ItemStack, firework: Firework);
   getFirework (): Firework;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getItemStack (): ItemStack;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setShouldConsume (consume: boolean): void;
   shouldConsume (): boolean;
}
export class PlayerEvent extends Event {
   constructor (who: Player);
   constructor (who: Player, async: boolean);
   getPlayer (): Player;
}
export class PlayerExpChangeEvent extends PlayerEvent {
   constructor (player: Player, exp_amount: number);
   constructor (player: Player, source_entity: Entity, exp_amount: number);
   getAmount (): number;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getSource (): Entity;
   setAmount (amount: number): void;
}
export class PlayerFishEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, entity: Entity, hook_entity: FishHook, state: PlayerFishEvent$State);
   getCaught (): Entity;
   getExpToDrop (): number;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getHook (): FishHook;
   getState (): PlayerFishEvent$State;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setExpToDrop (amount: number): void;
}
export class PlayerFishEvent$State {
   static BITE: PlayerFishEvent$State;
   static CAUGHT_ENTITY: PlayerFishEvent$State;
   static CAUGHT_FISH: PlayerFishEvent$State;
   static FAILED_ATTEMPT: PlayerFishEvent$State;
   static FISHING: PlayerFishEvent$State;
   static IN_GROUND: PlayerFishEvent$State;
   static REEL_IN: PlayerFishEvent$State;
   static valueOf (name: string): PlayerFishEvent$State;
   static values (): PlayerFishEvent$State[];
}
export class PlayerGameModeChangeEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, new_game_mode: GameMode);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getNewGameMode (): GameMode;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PlayerHandshakeEvent extends Event implements Cancellable {
   constructor (original_handshake: string, cancelled: boolean);
   getFailMessage (): string;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getOriginalHandshake (): string;
   getPropertiesJson (): string;
   getServerHostname (): string;
   getSocketAddressHostname (): string;
   getUniqueId (): UUID;
   isCancelled (): boolean;
   isFailed (): boolean;
   setCancelled (cancelled: boolean): void;
   setFailed (failed: boolean): void;
   setFailMessage (fail_message: string): void;
   setPropertiesJson (properties_json: string): void;
   setServerHostname (server_hostname: string): void;
   setSocketAddressHostname (socket_address_hostname: string): void;
   setUniqueId (unique_id: UUID): void;
}
export class PlayerHarvestBlockEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, harvested_block: Block, items_harvested: List<ItemStack>);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getHarvestedBlock (): Block;
   getItemsHarvested (): List<ItemStack>;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PlayerInitialSpawnEvent extends PlayerSpawnLocationEvent {
   constructor (who: Player, spawn_location: Location);
}
export class PlayerInteractAtEntityEvent extends PlayerInteractEntityEvent {
   constructor (who: Player, clicked_entity: Entity, position: Vector);
   constructor (who: Player, clicked_entity: Entity, position: Vector, hand: EquipmentSlot);
   getClickedPosition (): Vector;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class PlayerInteractEntityEvent extends PlayerEvent implements Cancellable {
   constructor (who: Player, clicked_entity: Entity);
   constructor (who: Player, clicked_entity: Entity, hand: EquipmentSlot);
   getHand (): EquipmentSlot;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getRightClicked (): Entity;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PlayerInteractEvent extends PlayerEvent implements Cancellable {
   constructor (who: Player, action: Action, item: ItemStack, clicked_block: Block, clicked_face: BlockFace);
   constructor (
      who: Player,
      action: Action,
      item: ItemStack,
      clicked_block: Block,
      clicked_face: BlockFace,
      hand: EquipmentSlot
   );
   getAction (): Action;
   getBlockFace (): BlockFace;
   getClickedBlock (): Block;
   getHand (): EquipmentSlot;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getItem (): ItemStack;
   getMaterial (): Material;
   hasBlock (): boolean;
   hasItem (): boolean;
   isBlockInHand (): boolean;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setUseInteractedBlock (use_interacted_block: Event$Result): void;
   setUseItemInHand (use_item_in_hand: Event$Result): void;
   useInteractedBlock (): Event$Result;
   useItemInHand (): Event$Result;
}
export interface PlayerInventory extends Inventory {
   getArmorContents(): ItemStack[];
   getBoots(): ItemStack;
   getChestplate(): ItemStack;
   getExtraContents(): ItemStack[];
   getHeldItemSlot(): number;
   getHelmet(): ItemStack;
   getHolder(): HumanEntity;
   getItem(slot: EquipmentSlot): ItemStack;
   getItemInHand(): ItemStack;
   getItemInMainHand(): ItemStack;
   getItemInOffHand(): ItemStack;
   getLeggings(): ItemStack;
   setArmorContents(items: ItemStack[]): void;
   setBoots(boots: ItemStack): void;
   setChestplate(chestplate: ItemStack): void;
   setExtraContents(items: ItemStack[]): void;
   setHeldItemSlot(slot: number): void;
   setHelmet(helmet: ItemStack): void;
   setItem(index: number, item: ItemStack): void;
   setItem(slot: EquipmentSlot, item: ItemStack): void;
   setItemInHand(stack: ItemStack): void;
   setItemInMainHand(item: ItemStack): void;
   setItemInOffHand(item: ItemStack): void;
   setLeggings(leggings: ItemStack): void;
}
export class PlayerItemBreakEvent extends PlayerEvent {
   constructor (player: Player, broken_item: ItemStack);
   getBrokenItem (): ItemStack;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class PlayerItemConsumeEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, item: ItemStack);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getItem (): ItemStack;
   getReplacement (): ItemStack;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setItem (item: ItemStack): void;
   setReplacement (replacement: ItemStack): void;
}
export class PlayerItemDamageEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, what: ItemStack, damage: number);
   getDamage (): number;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getItem (): ItemStack;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setDamage (damage: number): void;
}
export class PlayerItemHeldEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, previous: number, current: number);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getNewSlot (): number;
   getPreviousSlot (): number;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PlayerItemMendEvent extends PlayerEvent implements Cancellable {
   constructor (who: Player, item: ItemStack, experience_orb: ExperienceOrb, repair_amount: number);
   getExperienceOrb (): ExperienceOrb;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getItem (): ItemStack;
   getRepairAmount (): number;
   isCancelled (): boolean;
   setCancelled (cancelled: boolean): void;
   setRepairAmount (amount: number): void;
}
export class PlayerJoinEvent extends PlayerEvent {
   constructor (player_joined: Player, join_message: string);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getJoinMessage (): string;
   setJoinMessage (join_message: string): void;
}
export class PlayerJumpEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, from: Location, to: Location);
   getFrom (): Location;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getTo (): Location;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setFrom (from: Location): void;
}
export class PlayerKickEvent extends PlayerEvent implements Cancellable {
   constructor (player_kicked: Player, kick_reason: string, leave_message: string);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getLeaveMessage (): string;
   getReason (): string;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setLeaveMessage (leave_message: string): void;
   setReason (kick_reason: string): void;
}
export class PlayerLaunchProjectileEvent extends PlayerEvent implements Cancellable {
   constructor (shooter: Player, item_stack: ItemStack, projectile: Projectile);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getItemStack (): ItemStack;
   getProjectile (): Projectile;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setShouldConsume (consume_item: boolean): void;
   shouldConsume (): boolean;
}
export class PlayerLeashEntityEvent extends Event implements Cancellable {
   constructor (what: Entity, leash_holder: Entity, leasher: Player);
   getEntity (): Entity;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getLeashHolder (): Entity;
   getPlayer (): Player;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PlayerLevelChangeEvent extends PlayerEvent {
   constructor (player: Player, old_level: number, new_level: number);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getNewLevel (): number;
   getOldLevel (): number;
}
export class PlayerLocaleChangeEvent extends PlayerEvent {
   constructor (player: Player, old_locale: string, new_locale: string);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getNewLocale (): string;
   getOldLocale (): string;
}
export class PlayerLocaleChangeEvent extends PlayerEvent {
   constructor (who: Player, locale: string);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getLocale (): string;
}
export class PlayerLoginEvent extends PlayerEvent {
   constructor (player: Player, hostname: string, address: InetAddress);
   constructor (player: Player, hostname: string, address: InetAddress, real_address: InetAddress);
   constructor (
      player: Player,
      hostname: string,
      address: InetAddress,
      result: PlayerLoginEvent$Result,
      message: string,
      real_address: InetAddress
   );
   allow (): void;
   disallow (result: PlayerLoginEvent$Result, message: string): void;
   getAddress (): InetAddress;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getHostname (): string;
   getKickMessage (): string;
   getRealAddress (): InetAddress;
   getResult (): PlayerLoginEvent$Result;
   setKickMessage (message: string): void;
   setResult (result: PlayerLoginEvent$Result): void;
}
export class PlayerLoginEvent$Result {
   static ALLOWED: PlayerLoginEvent$Result;
   static KICK_BANNED: PlayerLoginEvent$Result;
   static KICK_FULL: PlayerLoginEvent$Result;
   static KICK_OTHER: PlayerLoginEvent$Result;
   static KICK_WHITELIST: PlayerLoginEvent$Result;
   static valueOf (name: string): PlayerLoginEvent$Result;
   static values (): PlayerLoginEvent$Result[];
}
export class PlayerMoveEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, from: Location, to: Location);
   getFrom (): Location;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getTo (): Location;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setFrom (from: Location): void;
   setTo (to: Location): void;
}
export class PlayerNamePrompt extends ValidatingPrompt {
   constructor (plugin: Plugin);
   acceptValidatedInput (context: ConversationContext, input: string): Prompt;
   acceptValidatedInput (context: ConversationContext, input: Player): Prompt;
   isInputValid (context: ConversationContext, input: string): boolean;
}
export class PlayerNaturallySpawnCreaturesEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, radius: number);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getSpawnRadius (): number;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setSpawnRadius (radius: number): void;
}
export class PlayerPickupArrowEvent extends PlayerPickupItemEvent {
   constructor (player: Player, item: Item, arrow: AbstractArrow);
   getArrow (): AbstractArrow;
}
export class PlayerPickupExperienceEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, experience_orb: ExperienceOrb);
   getExperienceOrb (): ExperienceOrb;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PlayerPickupItemEvent extends PlayerEvent {
   constructor (player: Player, item: Item, remaining: number);
   getFlyAtPlayer (): boolean;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getItem (): Item;
   getRemaining (): number;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setFlyAtPlayer (fly_at_player: boolean): void;
}
export class PlayerPortalEvent extends PlayerTeleportEvent {
   constructor (player: Player, from: Location, to: Location);
   constructor (player: Player, from: Location, to: Location, cause: PlayerTeleportEvent$TeleportCause);
   constructor (
      player: Player,
      from: Location,
      to: Location,
      cause: PlayerTeleportEvent$TeleportCause,
      get_search_radius: number,
      can_create_portal: boolean,
      creation_radius: number
   );
   getCanCreatePortal (): boolean;
   getCreationRadius (): number;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getSearchRadius (): number;
   setCanCreatePortal (can_create_portal: boolean): void;
   setCreationRadius (creation_radius: number): void;
   setSearchRadius (search_radius: number): void;
}
export class PlayerPostRespawnEvent extends PlayerEvent {
   constructor (respawn_player: Player, respawned_location: Location, is_bed_spawn: boolean);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getRespawnedLocation (): Location;
   isBedSpawn (): boolean;
}
export class PlayerPreLoginEvent extends Event {
   constructor (name: string, ip_address: InetAddress);
   constructor (name: string, ip_address: InetAddress, unique_id: UUID);
   allow (): void;
   disallow (result: PlayerPreLoginEvent$Result, message: string): void;
   getAddress (): InetAddress;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getKickMessage (): string;
   getName (): string;
   getResult (): PlayerPreLoginEvent$Result;
   getUniqueId (): UUID;
   setKickMessage (message: string): void;
   setResult (result: PlayerPreLoginEvent$Result): void;
}
export class PlayerPreLoginEvent$Result {
   static ALLOWED: PlayerPreLoginEvent$Result;
   static KICK_BANNED: PlayerPreLoginEvent$Result;
   static KICK_FULL: PlayerPreLoginEvent$Result;
   static KICK_OTHER: PlayerPreLoginEvent$Result;
   static KICK_WHITELIST: PlayerPreLoginEvent$Result;
   static valueOf (name: string): PlayerPreLoginEvent$Result;
   static values (): PlayerPreLoginEvent$Result[];
}
export interface PlayerProfile {
   clearProperties(): void;
   complete(): boolean;
   complete(textures: boolean): boolean;
   complete(textures: boolean, online_mode: boolean): boolean;
   completeFromCache(): boolean;
   completeFromCache(online_mode: boolean): boolean;
   completeFromCache(lookup_u_u_i_d: boolean, online_mode: boolean): boolean;
   getId(): UUID;
   getName(): string;
   getProperties(): Set<ProfileProperty>;
   hasProperty(property: string): boolean;
   hasTextures(): boolean;
   isComplete(): boolean;
   removeProperties(properties: Collection<ProfileProperty>): boolean;
   removeProperty(property: ProfileProperty): boolean;
   removeProperty(property: string): boolean;
   setId(uuid: UUID): UUID;
   setName(name: string): string;
   setProperties(properties: Collection<ProfileProperty>): void;
   setProperty(property: ProfileProperty): void;
}
export class PlayerQuitEvent extends PlayerEvent {
   constructor (who: Player, quit_message: string);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getQuitMessage (): string;
   setQuitMessage (quit_message: string): void;
}
export class PlayerReadyArrowEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, bow: ItemStack, arrow: ItemStack);
   getArrow (): ItemStack;
   getBow (): ItemStack;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PlayerRecipeBookClickEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, recipe: NamespacedKey, make_all: boolean);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getRecipe (): NamespacedKey;
   isCancelled (): boolean;
   isMakeAll (): boolean;
   setCancelled (cancel: boolean): void;
   setMakeAll (make_all: boolean): void;
   setRecipe (recipe: NamespacedKey): void;
}
export class PlayerRecipeDiscoverEvent extends PlayerEvent implements Cancellable {
   constructor (who: Player, recipe: NamespacedKey);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getRecipe (): NamespacedKey;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PlayerRegisterChannelEvent extends PlayerChannelEvent {
   constructor (player: Player, channel: string);
}
export class PlayerResourcePackStatusEvent extends PlayerEvent {
   constructor (who: Player, resource_pack_status: PlayerResourcePackStatusEvent$Status);
   constructor (who: Player, resource_pack_status: PlayerResourcePackStatusEvent$Status, hash: string);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getHash (): string;
   getStatus (): PlayerResourcePackStatusEvent$Status;
}
export class PlayerResourcePackStatusEvent$Status {
   static ACCEPTED: PlayerResourcePackStatusEvent$Status;
   static DECLINED: PlayerResourcePackStatusEvent$Status;
   static FAILED_DOWNLOAD: PlayerResourcePackStatusEvent$Status;
   static SUCCESSFULLY_LOADED: PlayerResourcePackStatusEvent$Status;
   static valueOf (name: string): PlayerResourcePackStatusEvent$Status;
   static values (): PlayerResourcePackStatusEvent$Status[];
}
export class PlayerRespawnEvent extends PlayerEvent {
   constructor (respawn_player: Player, respawn_location: Location, is_bed_spawn: boolean);
   constructor (respawn_player: Player, respawn_location: Location, is_bed_spawn: boolean, is_anchor_spawn: boolean);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getRespawnLocation (): Location;
   isAnchorSpawn (): boolean;
   isBedSpawn (): boolean;
   setRespawnLocation (respawn_location: Location): void;
}
export class PlayerRiptideEvent extends PlayerEvent {
   constructor (who: Player, item: ItemStack);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getItem (): ItemStack;
}
export class PlayerShearEntityEvent extends PlayerEvent implements Cancellable {
   constructor (who: Player, what: Entity);
   constructor (who: Player, what: Entity, item: ItemStack, hand: EquipmentSlot);
   getEntity (): Entity;
   getHand (): EquipmentSlot;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getItem (): ItemStack;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PlayerSpawnLocationEvent extends PlayerEvent {
   constructor (who: Player, spawn_location: Location);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getSpawnLocation (): Location;
   setSpawnLocation (location: Location): void;
}
export class PlayerStartSpectatingEntityEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, current_spectator_target: Entity, new_spectator_target: Entity);
   getCurrentSpectatorTarget (): Entity;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getNewSpectatorTarget (): Entity;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PlayerStatisticIncrementEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, statistic: Statistic, initial_value: number, new_value: number);
   constructor (
      player: Player,
      statistic: Statistic,
      initial_value: number,
      new_value: number,
      entity_type: EntityType
   );
   constructor (player: Player, statistic: Statistic, initial_value: number, new_value: number, material: Material);
   getEntityType (): EntityType;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getMaterial (): Material;
   getNewValue (): number;
   getPreviousValue (): number;
   getStatistic (): Statistic;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PlayerStopSpectatingEntityEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, spectator_target: Entity);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getSpectatorTarget (): Entity;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PlayerSwapHandItemsEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, main_hand_item: ItemStack, off_hand_item: ItemStack);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getMainHandItem (): ItemStack;
   getOffHandItem (): ItemStack;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setMainHandItem (main_hand_item: ItemStack): void;
   setOffHandItem (off_hand_item: ItemStack): void;
}
export class PlayerTakeLecternBookEvent extends PlayerEvent implements Cancellable {
   constructor (who: Player, lectern: Lectern);
   getBook (): ItemStack;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getLectern (): Lectern;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PlayerTeleportEndGatewayEvent extends PlayerTeleportEvent {
   constructor (player: Player, from: Location, to: Location, gateway: EndGateway);
   getGateway (): EndGateway;
}
export class PlayerTeleportEvent extends PlayerMoveEvent {
   constructor (player: Player, from: Location, to: Location);
   constructor (player: Player, from: Location, to: Location, cause: PlayerTeleportEvent$TeleportCause);
   getCause (): PlayerTeleportEvent$TeleportCause;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class PlayerTeleportEvent$TeleportCause {
   static CHORUS_FRUIT: PlayerTeleportEvent$TeleportCause;
   static COMMAND: PlayerTeleportEvent$TeleportCause;
   static END_GATEWAY: PlayerTeleportEvent$TeleportCause;
   static END_PORTAL: PlayerTeleportEvent$TeleportCause;
   static ENDER_PEARL: PlayerTeleportEvent$TeleportCause;
   static NETHER_PORTAL: PlayerTeleportEvent$TeleportCause;
   static PLUGIN: PlayerTeleportEvent$TeleportCause;
   static SPECTATE: PlayerTeleportEvent$TeleportCause;
   static UNKNOWN: PlayerTeleportEvent$TeleportCause;
   static valueOf (name: string): PlayerTeleportEvent$TeleportCause;
   static values (): PlayerTeleportEvent$TeleportCause[];
}
export class PlayerToggleFlightEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, is_flying: boolean);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   isFlying (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PlayerToggleSneakEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, is_sneaking: boolean);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   isSneaking (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PlayerToggleSprintEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, is_sprinting: boolean);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   isSprinting (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PlayerUnleashEntityEvent extends EntityUnleashEvent implements Cancellable {
   constructor (entity: Entity, player: Player);
   getPlayer (): Player;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PlayerUnregisterChannelEvent extends PlayerChannelEvent {
   constructor (player: Player, channel: string);
}
export class PlayerUseUnknownEntityEvent extends PlayerEvent {
   constructor (who: Player, entity_id: number, attack: boolean, hand: EquipmentSlot);
   getEntityId (): number;
   getHand (): EquipmentSlot;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isAttack (): boolean;
}
export class PlayerVelocityEvent extends PlayerEvent implements Cancellable {
   constructor (player: Player, velocity: Vector);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getVelocity (): Vector;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setVelocity (velocity: Vector): void;
}
export interface Plugin extends TabExecutor {
   getConfig(): FileConfiguration;
   getDataFolder(): File;
   getDefaultWorldGenerator(world_name: string, id: string): ChunkGenerator;
   getDescription(): PluginDescriptionFile;
   getLogger(): Logger;
   getName(): string;
   getPluginLoader(): PluginLoader;
   getResource(filename: string): InputStream;
   getServer(): Server;
   getSLF4JLogger(): org$slf4j$Logger;
   isEnabled(): boolean;
   isNaggable(): boolean;
   onDisable(): void;
   onEnable(): void;
   onLoad(): void;
   reloadConfig(): void;
   saveConfig(): void;
   saveDefaultConfig(): void;
   saveResource(resource_path: string, replace: boolean): void;
   setNaggable(can_nag: boolean): void;
}
export interface PluginAwareness {
   static PluginAwareness$Flag(undefined): Class;
   static PluginAwareness$Flag(undefined): Class;
   static PluginAwareness$Flag(undefined): Class;
}
export class PluginAwareness$Flags {
   static UTF8: PluginAwareness$Flags;
   static valueOf (name: string): PluginAwareness$Flags;
   static values (): PluginAwareness$Flags[];
}
export class PluginBase extends JavaObject implements Plugin {
   constructor ();
   equals (obj: JavaObject): boolean;
   getName (): string;
   hashCode (): number;
}
export class PluginChannelDirection {
   static INCOMING: PluginChannelDirection;
   static OUTGOING: PluginChannelDirection;
   static valueOf (name: string): PluginChannelDirection;
   static values (): PluginChannelDirection[];
}
export class PluginClassLoader extends URLClassLoader {
   close (): void;
   findClass (name: string): Class;
   getPlugin (): JavaPlugin;
   getResource (name: string): URL;
   getResources (name: string): Enumeration<URL>;
   toString (): string;
}
export class PluginCommand extends Command implements PluginIdentifiableCommand {
   constructor (name: string, owner: Plugin);
   execute (sender: CommandSender, command_label: string, args: string[]): boolean;
   getExecutor (): CommandExecutor;
   getPlugin (): Plugin;
   getTabCompleter (): TabCompleter;
   setExecutor (executor: CommandExecutor): void;
   setTabCompleter (completer: TabCompleter): void;
   tabComplete (sender: CommandSender, alias: string, args: string[]): List<string>;
   toString (): string;
}
export class PluginCommandYamlParser extends JavaObject {
   constructor ();
   static parse (plugin: Plugin): List<Command>;
}
export class PluginDescriptionFile extends JavaObject {
   constructor (stream: InputStream);
   constructor (reader: Reader);
   constructor (plugin_name: string, plugin_version: string, main_class: string);
   getAPIVersion (): string;
   getAuthors (): List<string>;
   getAwareness (): Set<PluginAwareness>;
   getClassLoaderOf (): string;
   getCommands (): Map<string, Map<string, JavaObject>>;
   getContributors (): List<string>;
   getDepend (): List<string>;
   getDescription (): string;
   getFullName (): string;
   getLoad (): PluginLoadOrder;
   getLoadBefore (): List<string>;
   getMain (): string;
   getName (): string;
   getPermissionDefault (): PermissionDefault;
   getPermissions (): List<Permission>;
   getPrefix (): string;
   getProvides (): List<string>;
   getRawName (): string;
   getSoftDepend (): List<string>;
   getVersion (): string;
   getWebsite (): string;
   save (writer: Writer): void;
}
export class PluginDisableEvent extends PluginEvent {
   constructor (plugin: Plugin);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class PluginEnableEvent extends PluginEvent {
   constructor (plugin: Plugin);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class PluginEvent extends ServerEvent {
   constructor (plugin: Plugin);
   getPlugin (): Plugin;
}
export interface PluginIdentifiableCommand {
   getPlugin(): Plugin;
}
export interface PluginLoader {
   createRegisteredListeners(listener: Listener, plugin: Plugin): Map<Class<Event>, Set<RegisteredListener>>;
   disablePlugin(plugin: Plugin): void;
   disablePlugin(plugin: Plugin, close_classloader: boolean): void;
   enablePlugin(plugin: Plugin): void;
   getPluginDescription(file: File): PluginDescriptionFile;
   getPluginFileFilters(): Pattern[];
   loadPlugin(file: File): Plugin;
}
export class PluginLoadOrder {
   static POSTWORLD: PluginLoadOrder;
   static STARTUP: PluginLoadOrder;
   static valueOf (name: string): PluginLoadOrder;
   static values (): PluginLoadOrder[];
}
export class PluginLogger extends Logger {
   constructor (context: Plugin);
   log (log_record: LogRecord): void;
}
export interface PluginManager {
   addPermission(perm: Permission): void;
   callEvent(event: Event): void;
   clearPlugins(): void;
   disablePlugin(plugin: Plugin): void;
   disablePlugin(plugin: Plugin, close_classloader: boolean): void;
   disablePlugins(): void;
   enablePlugin(plugin: Plugin): void;
   getDefaultPermissions(op: boolean): Set<Permission>;
   getDefaultPermSubscriptions(op: boolean): Set<Permissible>;
   getPermission(name: string): Permission;
   getPermissions(): Set<Permission>;
   getPermissionSubscriptions(permission: string): Set<Permissible>;
   getPlugin(name: string): Plugin;
   getPlugins(): Plugin[];
   isPluginEnabled(name: string): boolean;
   isPluginEnabled(plugin: Plugin): boolean;
   loadPlugin(file: File): Plugin;
   loadPlugins(directory: File): Plugin[];
   recalculatePermissionDefaults(perm: Permission): void;
   registerEvent(
      event: Class<Event>,
      listener: Listener,
      priority: EventPriority,
      executor: EventExecutor,
      plugin: Plugin
   ): void;
   registerEvent(
      event: Class<Event>,
      listener: Listener,
      priority: EventPriority,
      executor: EventExecutor,
      plugin: Plugin,
      ignore_cancelled: boolean
   ): void;
   registerEvents(listener: Listener, plugin: Plugin): void;
   registerInterface(loader: Class<PluginLoader>): void;
   removePermission(name: string): void;
   removePermission(perm: Permission): void;
   subscribeToDefaultPerms(op: boolean, permissible: Permissible): void;
   subscribeToPermission(permission: string, permissible: Permissible): void;
   unsubscribeFromDefaultPerms(op: boolean, permissible: Permissible): void;
   unsubscribeFromPermission(permission: string, permissible: Permissible): void;
   useTimings(): boolean;
}
export interface PluginMessageListener {
   onPluginMessageReceived(channel: string, player: Player, message: byte[]): void;
}
export class PluginMessageListenerRegistration extends JavaObject {
   constructor (messenger: Messenger, plugin: Plugin, channel: string, listener: PluginMessageListener);
   equals (obj: JavaObject): boolean;
   getChannel (): string;
   getListener (): PluginMessageListener;
   getPlugin (): Plugin;
   hashCode (): number;
   isValid (): boolean;
}
export interface PluginMessageRecipient {
   getListeningPluginChannels(): Set<string>;
   sendPluginMessage(source: Plugin, channel: string, message: byte[]): void;
}
export class PluginNameConversationPrefix extends JavaObject implements ConversationPrefix {
   constructor (plugin: Plugin);
   constructor (plugin: Plugin, separator: string, prefix_color: ChatColor);
   getPrefix (context: ConversationContext): string;
}
export class PluginsCommand extends BukkitCommand {
   constructor (name: string);
   execute (sender: CommandSender, current_alias: string, args: string[]): boolean;
   tabComplete (sender: CommandSender, alias: string, args: string[]): List<string>;
}
export interface PolarBear extends Animals {}
export class PortalCreateEvent extends WorldEvent implements Cancellable {
   constructor (blocks: List<BlockState>, world: World, entity: Entity, reason: PortalCreateEvent$CreateReason);
   constructor (blocks: List<BlockState>, world: World, reason: PortalCreateEvent$CreateReason);
   getBlocks (): List<BlockState>;
   getEntity (): Entity;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getReason (): PortalCreateEvent$CreateReason;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PortalCreateEvent$CreateReason {
   static END_PLATFORM: PortalCreateEvent$CreateReason;
   static FIRE: PortalCreateEvent$CreateReason;
   static NETHER_PAIR: PortalCreateEvent$CreateReason;
   static valueOf (name: string): PortalCreateEvent$CreateReason;
   static values (): PortalCreateEvent$CreateReason[];
}
export class PortalType {
   static CUSTOM: PortalType;
   static ENDER: PortalType;
   static NETHER: PortalType;
   static valueOf (name: string): PortalType;
   static values (): PortalType[];
}
export class Pose {
   static DYING: Pose;
   static FALL_FLYING: Pose;
   static SLEEPING: Pose;
   static SNEAKING: Pose;
   static SPIN_ATTACK: Pose;
   static STANDING: Pose;
   static SWIMMING: Pose;
   static valueOf (name: string): Pose;
   static values (): Pose[];
}
export class Potion extends JavaObject {
   constructor (type: PotionType);
   constructor (type: PotionType, level: number);
   constructor (type: PotionType, level: number, splash: boolean);
   constructor (type: PotionType, level: number, splash: boolean, extended: boolean);
   apply (to: LivingEntity): void;
   apply (to: ItemStack): void;
   equals (obj: JavaObject): boolean;
   extend (): Potion;
   static fromDamage (damage: number): Potion;
   static fromItemStack (item: ItemStack): Potion;
   static getBrewer (): PotionBrewer;
   getEffects (): Collection<PotionEffect>;
   getLevel (): number;
   getNameId (): number;
   getType (): PotionType;
   hasExtendedDuration (): boolean;
   hashCode (): number;
   isSplash (): boolean;
   setHasExtendedDuration (is_extended: boolean): void;
   setLevel (level: number): void;
   static setPotionBrewer (other: PotionBrewer): void;
   setSplash (is_splash: boolean): void;
   setType (type: PotionType): void;
   splash (): Potion;
   toDamageValue (): number;
   toItemStack (amount: number): ItemStack;
}
export interface PotionBrewer {
   createEffect(potion: PotionEffectType, duration: number, amplifier: number): PotionEffect;
   getEffects(type: PotionType, upgraded: boolean, extended: boolean): Collection<PotionEffect>;
   getEffectsFromDamage(damage: number): Collection<PotionEffect>;
}
export class PotionData extends JavaObject {
   constructor (type: PotionType);
   constructor (type: PotionType, extended: boolean, upgraded: boolean);
   equals (obj: JavaObject): boolean;
   getType (): PotionType;
   hashCode (): number;
   isExtended (): boolean;
   isUpgraded (): boolean;
}
export class PotionEffect extends JavaObject implements ConfigurationSerializable {
   constructor (map: Map<string, JavaObject>);
   constructor (type: PotionEffectType, duration: number, amplifier: number);
   constructor (type: PotionEffectType, duration: number, amplifier: number, ambient: boolean);
   constructor (type: PotionEffectType, duration: number, amplifier: number, ambient: boolean, particles: boolean);
   constructor (
      type: PotionEffectType,
      duration: number,
      amplifier: number,
      ambient: boolean,
      particles: boolean,
      icon: boolean
   );
   apply (entity: LivingEntity): boolean;
   equals (obj: JavaObject): boolean;
   getAmplifier (): number;
   getColor (): Color;
   getDuration (): number;
   getType (): PotionEffectType;
   hashCode (): number;
   hasIcon (): boolean;
   hasParticles (): boolean;
   isAmbient (): boolean;
   serialize (): Map<string, JavaObject>;
   toString (): string;
   withAmbient (ambient: boolean): PotionEffect;
   withAmplifier (amplifier: number): PotionEffect;
   withDuration (duration: number): PotionEffect;
   withIcon (icon: boolean): PotionEffect;
   withParticles (particles: boolean): PotionEffect;
   withType (type: PotionEffectType): PotionEffect;
}
export class PotionEffectType extends JavaObject {
   constructor (id: number);
   createEffect (duration: number, amplifier: number): PotionEffect;
   equals (obj: JavaObject): boolean;
   static getById (id: number): PotionEffectType;
   static getByName (name: string): PotionEffectType;
   getColor (): Color;
   getDurationModifier (): number;
   getId (): number;
   getName (): string;
   hashCode (): number;
   isInstant (): boolean;
   static registerPotionEffectType (type: PotionEffectType): void;
   static stopAcceptingRegistrations (): void;
   toString (): string;
   static values (): PotionEffectType[];
}
export class PotionEffectTypeWrapper extends PotionEffectType {
   constructor (id: number);
   getColor (): Color;
   getDurationModifier (): number;
   getName (): string;
   getType (): PotionEffectType;
   isInstant (): boolean;
}
export interface PotionMeta extends ItemMeta {
   addCustomEffect(effect: PotionEffect, overwrite: boolean): boolean;
   clearCustomEffects(): boolean;
   clone(): PotionMeta;
   getBasePotionData(): PotionData;
   getColor(): Color;
   getCustomEffects(): List<PotionEffect>;
   hasColor(): boolean;
   hasCustomEffect(type: PotionEffectType): boolean;
   hasCustomEffects(): boolean;
   removeCustomEffect(type: PotionEffectType): boolean;
   setBasePotionData(data: PotionData): void;
   setColor(color: Color): void;
   setMainEffect(type: PotionEffectType): boolean;
}
export class PotionSplashEvent extends ProjectileHitEvent implements Cancellable {
   constructor (potion: ThrownPotion, affected_entities: Map<LivingEntity, Double>);
   getAffectedEntities (): Collection<LivingEntity>;
   getEntity (): ThrownPotion;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getIntensity (entity: LivingEntity): number;
   getPotion (): ThrownPotion;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setIntensity (entity: LivingEntity, intensity: number): void;
}
export class PotionType {
   static AWKWARD: PotionType;
   static FIRE_RESISTANCE: PotionType;
   static INSTANT_DAMAGE: PotionType;
   static INSTANT_HEAL: PotionType;
   static INVISIBILITY: PotionType;
   static JUMP: PotionType;
   static LUCK: PotionType;
   static MUNDANE: PotionType;
   static NIGHT_VISION: PotionType;
   static POISON: PotionType;
   static REGEN: PotionType;
   static SLOW_FALLING: PotionType;
   static SLOWNESS: PotionType;
   static SPEED: PotionType;
   static STRENGTH: PotionType;
   static THICK: PotionType;
   static TURTLE_MASTER: PotionType;
   static UNCRAFTABLE: PotionType;
   static WATER: PotionType;
   static WATER_BREATHING: PotionType;
   static WEAKNESS: PotionType;
   static getByEffect (effect_type: PotionEffectType): PotionType;
   getEffectType (): PotionEffectType;
   getMaxLevel (): number;
   isExtendable (): boolean;
   isInstant (): boolean;
   isUpgradeable (): boolean;
   static valueOf (name: string): PotionType;
   static values (): PotionType[];
}
export interface Powerable extends BlockData {
   isPowered(): boolean;
   setPowered(powered: boolean): void;
}
export interface PoweredMinecart extends Minecart {}
export class PoweredRail extends ExtendedRails {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): PoweredRail;
   isPowered (): boolean;
   setPowered (is_powered: boolean): void;
}
export class PreCreatureSpawnEvent extends Event implements Cancellable {
   constructor (location: Location, type: EntityType, reason: CreatureSpawnEvent$SpawnReason);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getReason (): CreatureSpawnEvent$SpawnReason;
   getSpawnLocation (): Location;
   getType (): EntityType;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setShouldAbortSpawn (should_abort_spawn: boolean): void;
   shouldAbortSpawn (): boolean;
}
export class PreFillProfileEvent extends Event {
   constructor (profile: PlayerProfile);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getPlayerProfile (): PlayerProfile;
   setProperties (properties: Collection<ProfileProperty>): void;
}
export class PreLookupProfileEvent extends Event {
   constructor (name: string);
   addProfileProperties (properties: Set<ProfileProperty>): void;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getName (): string;
   getProfileProperties (): Set<ProfileProperty>;
   getUUID (): UUID;
   setProfileProperties (properties: Set<ProfileProperty>): void;
   setUUID (uuid: UUID): void;
}
export class PrepareAnvilEvent extends PrepareResultEvent {
   constructor (inventory: InventoryView, result: ItemStack);
   getInventory (): AnvilInventory;
   getResult (): ItemStack;
   setResult (result: ItemStack): void;
}
export class PrepareGrindstoneEvent extends PrepareResultEvent {
   constructor (inventory: InventoryView, result: ItemStack);
   getInventory (): GrindstoneInventory;
}
export class PrepareItemCraftEvent extends InventoryEvent {
   constructor (what: CraftingInventory, view: InventoryView, is_repair: boolean);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getInventory (): CraftingInventory;
   getRecipe (): Recipe;
   isRepair (): boolean;
}
export class PrepareItemEnchantEvent extends InventoryEvent implements Cancellable {
   constructor (
      enchanter: Player,
      view: InventoryView,
      table: Block,
      item: ItemStack,
      offers: EnchantmentOffer[],
      bonus: number
   );
   getEnchantBlock (): Block;
   getEnchanter (): Player;
   getEnchantmentBonus (): number;
   getExpLevelCostsOffered (): number[];
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getItem (): ItemStack;
   getOffers (): EnchantmentOffer[];
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class PrepareResultEvent extends InventoryEvent {
   constructor (inventory: InventoryView, result: ItemStack);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getResult (): ItemStack;
   setResult (result: ItemStack): void;
}
export class PrepareSmithingEvent extends PrepareResultEvent {
   constructor (inventory: InventoryView, result: ItemStack);
   getInventory (): SmithingInventory;
   getResult (): ItemStack;
   setResult (result: ItemStack): void;
}
export class PreSpawnerSpawnEvent extends PreCreatureSpawnEvent {
   constructor (location: Location, type: EntityType, spawner_location: Location);
   getSpawnerLocation (): Location;
}
export class PressurePlate extends MaterialData {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): PressurePlate;
   isPressed (): boolean;
   toString (): string;
}
export interface PressureSensor {
   isPressed(): boolean;
}
export class ProfileProperty extends JavaObject {
   constructor (name: string, value: string);
   constructor (name: string, value: string, signature: string);
   equals (o: JavaObject): boolean;
   getName (): string;
   getSignature (): string;
   getValue (): string;
   hashCode (): number;
   isSigned (): boolean;
}
export class ProfileWhitelistVerifyEvent extends Event {
   constructor (
      profile: PlayerProfile,
      whitelist_enabled: boolean,
      whitelisted: boolean,
      is_op: boolean,
      kick_message: string
   );
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getKickMessage (): string;
   getPlayerProfile (): PlayerProfile;
   isOp (): boolean;
   isWhitelisted (): boolean;
   isWhitelistEnabled (): boolean;
   setKickMessage (kick_message: string): void;
   setWhitelisted (whitelisted: boolean): void;
}
export interface Projectile extends Entity {
   doesBounce(): boolean;
   getShooter(): ProjectileSource;
   setBounce(does_bounce: boolean): void;
   setShooter(source: ProjectileSource): void;
}
export class ProjectileCollideEvent extends EntityEvent implements Cancellable {
   constructor (what: Projectile, collided_with: Entity);
   getCollidedWith (): Entity;
   getEntity (): Projectile;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class ProjectileHitEvent extends EntityEvent {
   constructor (projectile: Projectile);
   constructor (projectile: Projectile, hit_block: Block);
   constructor (projectile: Projectile, hit_entity: Entity);
   constructor (projectile: Projectile, hit_entity: Entity, hit_block: Block);
   constructor (projectile: Projectile, hit_entity: Entity, hit_block: Block, hit_face: BlockFace);
   getEntity (): Projectile;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getHitBlock (): Block;
   getHitBlockFace (): BlockFace;
   getHitEntity (): Entity;
}
export class ProjectileLaunchEvent extends EntitySpawnEvent implements Cancellable {
   constructor (what: Entity);
   getEntity (): Projectile;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export interface ProjectileSource {
   launchProjectile<T extends Projectile>(projectile: Class<T>): T;
   launchProjectile<T extends Projectile>(projectile: Class<T>, velocity: Vector): T;
}
export interface Prompt extends Cloneable {
   acceptInput(context: ConversationContext, input: string): Prompt;
   blocksForInput(context: ConversationContext): boolean;
   getPromptText(context: ConversationContext): string;
}
export interface ProxiedCommandSender extends CommandSender {
   getCallee(): CommandSender;
   getCaller(): CommandSender;
}
export interface PufferFish extends Fish {
   getPuffState(): number;
   setPuffState(state: number): void;
}
export class Pumpkin extends MaterialData {
   constructor ();
   constructor (direction: BlockFace);
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Pumpkin;
   getFacing (): BlockFace;
   isLit (): boolean;
   setFacingDirection (face: BlockFace): void;
   toString (): string;
}
export interface Rabbit extends Animals {
   getRabbitType(): Rabbit$Type;
   setRabbitType(type: Rabbit$Type): void;
}
export class Rabbit$Type {
   static BLACK: Rabbit$Type;
   static BLACK_AND_WHITE: Rabbit$Type;
   static BROWN: Rabbit$Type;
   static GOLD: Rabbit$Type;
   static SALT_AND_PEPPER: Rabbit$Type;
   static THE_KILLER_BUNNY: Rabbit$Type;
   static WHITE: Rabbit$Type;
   static valueOf (name: string): Rabbit$Type;
   static values (): Rabbit$Type[];
}
export interface Raid {
   getActiveTicks(): number;
   getBadOmenLevel(): number;
   getHeroes(): Set<UUID>;
   getLocation(): Location;
   getRaiders(): List<Raider>;
   getSpawnedGroups(): number;
   getStatus(): Raid$RaidStatus;
   getTotalGroups(): number;
   getTotalHealth(): number;
   getTotalWaves(): number;
   isStarted(): boolean;
   setBadOmenLevel(bad_omen_level: number): void;
}
export class Raid$RaidStatus {
   static LOSS: Raid$RaidStatus;
   static ONGOING: Raid$RaidStatus;
   static STOPPED: Raid$RaidStatus;
   static VICTORY: Raid$RaidStatus;
   static valueOf (name: string): Raid$RaidStatus;
   static values (): Raid$RaidStatus[];
}
export interface Raider extends Monster {
   getPatrolTarget(): Block;
   isCanJoinRaid(): boolean;
   isPatrolLeader(): boolean;
   setCanJoinRaid(join: boolean): void;
   setPatrolLeader(leader: boolean): void;
   setPatrolTarget(block: Block): void;
}
export class RaidEvent extends WorldEvent {
   constructor (raid: Raid, world: World);
   getRaid (): Raid;
}
export class RaidFinishEvent extends RaidEvent {
   constructor (raid: Raid, world: World, winners: List<Player>);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getWinners (): List<Player>;
}
export class RaidSpawnWaveEvent extends RaidEvent {
   constructor (raid: Raid, world: World, leader: Raider, raiders: List<Raider>);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getPatrolLeader (): Raider;
   getRaiders (): List<Raider>;
}
export class RaidStopEvent extends RaidEvent {
   constructor (raid: Raid, world: World, reason: RaidStopEvent$Reason);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getReason (): RaidStopEvent$Reason;
}
export class RaidStopEvent$Reason {
   static FINISHED: RaidStopEvent$Reason;
   static NOT_IN_VILLAGE: RaidStopEvent$Reason;
   static PEACE: RaidStopEvent$Reason;
   static TIMEOUT: RaidStopEvent$Reason;
   static UNSPAWNABLE: RaidStopEvent$Reason;
   static valueOf (name: string): RaidStopEvent$Reason;
   static values (): RaidStopEvent$Reason[];
}
export class RaidTriggerEvent extends RaidEvent implements Cancellable {
   constructor (raid: Raid, world: World, player: Player);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getPlayer (): Player;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export interface Rail extends BlockData {
   getShape(): Rail$Shape;
   getShapes(): Set<Rail$Shape>;
   setShape(shape: Rail$Shape): void;
}
export class Rail$Shape {
   static ASCENDING_EAST: Rail$Shape;
   static ASCENDING_NORTH: Rail$Shape;
   static ASCENDING_SOUTH: Rail$Shape;
   static ASCENDING_WEST: Rail$Shape;
   static EAST_WEST: Rail$Shape;
   static NORTH_EAST: Rail$Shape;
   static NORTH_SOUTH: Rail$Shape;
   static NORTH_WEST: Rail$Shape;
   static SOUTH_EAST: Rail$Shape;
   static SOUTH_WEST: Rail$Shape;
   static valueOf (name: string): Rail$Shape;
   static values (): Rail$Shape[];
}
export class Rails extends MaterialData {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Rails;
   getConvertedData (): number;
   getDirection (): BlockFace;
   isCurve (): boolean;
   isOnSlope (): boolean;
   setDirection (face: BlockFace, is_on_slope: boolean): void;
   toString (): string;
}
export interface RangedEntity extends Mob {
   isChargingAttack(): boolean;
   rangedAttack(target: LivingEntity, charge: number): void;
   setChargingAttack(raise_hands: boolean): void;
}
export interface Ravager extends Raider {}
export class RayTraceResult extends JavaObject {
   constructor (hit_position: Vector);
   constructor (hit_position: Vector, hit_block_face: BlockFace);
   constructor (hit_position: Vector, hit_block: Block, hit_block_face: BlockFace);
   constructor (hit_position: Vector, hit_entity: Entity);
   constructor (hit_position: Vector, hit_entity: Entity, hit_block_face: BlockFace);
   equals (obj: JavaObject): boolean;
   getHitBlock (): Block;
   getHitBlockFace (): BlockFace;
   getHitEntity (): Entity;
   getHitPosition (): Vector;
   hashCode (): number;
   toString (): string;
}
export interface Recipe {
   getResult(): ItemStack;
}
export interface RecipeChoice extends Predicate<ItemStack>, Cloneable {
   clone(): RecipeChoice;
   getItemStack(): ItemStack;
   test(item_stack: ItemStack): boolean;
}
export class RecipeChoice$ExactChoice extends JavaObject {
   constructor (choices: List<ItemStack>);
   constructor (stack: ItemStack);
   constructor (...stacks: ItemStack);
   clone (): RecipeChoice$ExactChoice;
   equals (obj: JavaObject): boolean;
   getChoices (): List<ItemStack>;
   getItemStack (): ItemStack;
   hashCode (): number;
   test (t: ItemStack): boolean;
   toString (): string;
}
export class RecipeChoice$MaterialChoice extends JavaObject implements RecipeChoice {
   constructor (choices: List<Material>);
   constructor (choice: Material);
   constructor (...choices: Material);
   constructor (choices: Tag<Material>);
   clone (): RecipeChoice$MaterialChoice;
   equals (obj: JavaObject): boolean;
   getChoices (): List<Material>;
   getItemStack (): ItemStack;
   hashCode (): number;
   test (t: ItemStack): boolean;
   toString (): string;
}
export interface Redstone {
   isPowered(): boolean;
}
export interface RedstoneRail extends Powerable, Rail {}
export class RedstoneTorch extends Torch {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): RedstoneTorch;
   isPowered (): boolean;
   toString (): string;
}
export interface RedstoneWallTorch extends Directional, Lightable {}
export interface RedstoneWire extends AnaloguePowerable {
   getAllowedFaces(): Set<BlockFace>;
   getFace(face: BlockFace): RedstoneWire$Connection;
   setFace(face: BlockFace, connection: RedstoneWire$Connection): void;
}
export class RedstoneWire extends MaterialData {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): RedstoneWire;
   isPowered (): boolean;
   toString (): string;
}
export class RedstoneWire$Connection {
   static NONE: RedstoneWire$Connection;
   static SIDE: RedstoneWire$Connection;
   static UP: RedstoneWire$Connection;
   static valueOf (name: string): RedstoneWire$Connection;
   static values (): RedstoneWire$Connection[];
}
export class RegexPrompt extends ValidatingPrompt {
   constructor (regex: string);
   constructor (pattern: Pattern);
   isInputValid (context: ConversationContext, input: string): boolean;
}
export class RegisteredListener extends JavaObject {
   constructor (
      listener: Listener,
      executor: EventExecutor,
      priority: EventPriority,
      plugin: Plugin,
      ignore_cancelled: boolean
   );
   callEvent (event: Event): void;
   getListener (): Listener;
   getPlugin (): Plugin;
   getPriority (): EventPriority;
   isIgnoringCancelled (): boolean;
}
export class RegisteredServiceProvider<T> extends JavaObject implements Comparable<RegisteredServiceProvider<X>> {
   constructor (service: Class<T>, provider: T, priority: ServicePriority, plugin: Plugin);
   compareTo (other: RegisteredServiceProvider): number;
   getPlugin (): Plugin;
   getPriority (): ServicePriority;
   getProvider (): T;
   getService (): Class<T>;
}
export interface Registry<T extends Keyed> extends Iterable<T> {
   get(key: NamespacedKey): T;
}
export class Registry$SimpleRegistry<T extends Enum<T> & Keyed> extends JavaObject implements Registry<T> {
   constructor (type: Class<T>);
   constructor (type: Class<T>, predicate: Predicate<T>);
   get (key: NamespacedKey): T;
   iterator (): Iterator<T>;
}
export class ReloadCommand extends BukkitCommand {
   constructor (name: string);
   execute (sender: CommandSender, current_alias: string, args: string[]): boolean;
   tabComplete (sender: CommandSender, alias: string, args: string[]): List<string>;
}
export interface RemoteConsoleCommandSender extends CommandSender {}
export class RemoteServerCommandEvent extends ServerCommandEvent {
   constructor (sender: CommandSender, command: string);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class RenderType {
   static HEARTS: RenderType;
   static INTEGER: RenderType;
   static valueOf (name: string): RenderType;
   static values (): RenderType[];
}
export interface Repairable {
   clone(): Repairable;
   getRepairCost(): number;
   hasRepairCost(): boolean;
   setRepairCost(cost: number): void;
}
export interface Repeater extends Directional, Powerable {
   getDelay(): number;
   getMaximumDelay(): number;
   getMinimumDelay(): number;
   isLocked(): boolean;
   setDelay(delay: number): void;
   setLocked(locked: boolean): void;
}
export class Reputation extends JavaObject {
   constructor ();
   constructor (reputation: Map<ReputationType, Integer>);
   getReputation (type: ReputationType): number;
   setReputation (type: ReputationType, value: number): void;
}
export class ReputationType {
   static MAJOR_NEGATIVE: ReputationType;
   static MAJOR_POSITIVE: ReputationType;
   static MINOR_NEGATIVE: ReputationType;
   static MINOR_POSITIVE: ReputationType;
   static TRADING: ReputationType;
   static valueOf (name: string): ReputationType;
   static values (): ReputationType[];
}
export class ReservedChannelException extends RuntimeException {
   constructor ();
   constructor (name: string);
}
export interface RespawnAnchor extends BlockData {
   getCharges(): number;
   getMaximumCharges(): number;
   setCharges(charges: number): void;
}
export interface RideableMinecart extends Minecart {}
export interface Rotatable extends BlockData {
   getRotation(): BlockFace;
   setRotation(rotation: BlockFace): void;
}
export class Rotation {
   static CLOCKWISE: Rotation;
   static CLOCKWISE_135: Rotation;
   static CLOCKWISE_45: Rotation;
   static COUNTER_CLOCKWISE: Rotation;
   static COUNTER_CLOCKWISE_45: Rotation;
   static FLIPPED: Rotation;
   static FLIPPED_45: Rotation;
   static NONE: Rotation;
   rotateClockwise (): Rotation;
   rotateCounterClockwise (): Rotation;
   static valueOf (name: string): Rotation;
   static values (): Rotation[];
}
export interface SaddledHorseInventory extends AbstractHorseInventory {}
export class SafeClassDefiner extends JavaObject implements ClassDefiner {
   defineClass (parent_loader: ClassLoader, name: string, data: byte[]): Class;
}
export interface Salmon extends Fish {}
export class Sandstone extends MaterialData {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   constructor (type: SandstoneType);
   clone (): Sandstone;
   getType (): SandstoneType;
   setType (type: SandstoneType): void;
   toString (): string;
}
export class SandstoneType {
   static CRACKED: SandstoneType;
   static GLYPHED: SandstoneType;
   static SMOOTH: SandstoneType;
   static getByData (data: number): SandstoneType;
   getData (): number;
   static valueOf (name: string): SandstoneType;
   static values (): SandstoneType[];
}
export interface Sapling extends BlockData {
   getMaximumStage(): number;
   getStage(): number;
   setStage(stage: number): void;
}
export class Sapling extends Wood {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   constructor (type: Material, species: TreeSpecies);
   constructor (type: Material, species: TreeSpecies, is_instant_growable: boolean);
   constructor (species: TreeSpecies);
   constructor (species: TreeSpecies, is_instant_growable: boolean);
   clone (): Sapling;
   isInstantGrowable (): boolean;
   setIsInstantGrowable (is_instant_growable: boolean): void;
   toString (): string;
}
export interface Scaffolding extends Waterlogged {
   getDistance(): number;
   getMaximumDistance(): number;
   isBottom(): boolean;
   setBottom(bottom: boolean): void;
   setDistance(distance: number): void;
}
export interface Score {
   getEntry(): string;
   getObjective(): JavaObjective;
   getPlayer(): OfflinePlayer;
   getScore(): number;
   getScoreboard(): Scoreboard;
   isScoreSet(): boolean;
   setScore(score: number): void;
}
export interface Scoreboard {
   clearSlot(slot: DisplaySlot): void;
   getEntries(): Set<string>;
   getEntryTeam(entry: string): Team;
   getObjective(name: string): JavaObjective;
   getObjective(slot: DisplaySlot): JavaObjective;
   getObjectives(): Set<JavaObjective>;
   getObjectivesByCriteria(criteria: string): Set<JavaObjective>;
   getPlayers(): Set<OfflinePlayer>;
   getPlayerTeam(player: OfflinePlayer): Team;
   getScores(entry: string): Set<Score>;
   getScores(player: OfflinePlayer): Set<Score>;
   getTeam(team_name: string): Team;
   getTeams(): Set<Team>;
   registerNewObjective(name: string, criteria: string): JavaObjective;
   registerNewObjective(name: string, criteria: string, display_name: string): JavaObjective;
   registerNewObjective(name: string, criteria: string, display_name: string, render_type: RenderType): JavaObjective;
   registerNewTeam(name: string): Team;
   resetScores(entry: string): void;
   resetScores(player: OfflinePlayer): void;
}
export interface ScoreboardManager {
   getMainScoreboard(): Scoreboard;
   getNewScoreboard(): Scoreboard;
}
export interface SeaPickle extends Waterlogged {
   getMaximumPickles(): number;
   getMinimumPickles(): number;
   getPickles(): number;
   setPickles(pickles: number): void;
}
export class Server$Spigot extends JavaObject {
   constructor ();
   broadcast (component: BaseComponent): void;
   broadcast (...components: BaseComponent): void;
   getBukkitConfig (): YamlConfiguration;
   getConfig (): YamlConfiguration;
   getPaperConfig (): YamlConfiguration;
   getSpigotConfig (): YamlConfiguration;
   restart (): void;
}
export class ServerCommandEvent extends ServerEvent implements Cancellable {
   constructor (sender: CommandSender, command: string);
   getCommand (): string;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getSender (): CommandSender;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setCommand (message: string): void;
}
export class ServerCommandException extends ServerException {
   constructor (
      message: string,
      cause: Throwable,
      enable_suppression: boolean,
      writable_stack_trace: boolean,
      command: Command,
      command_sender: CommandSender,
      arguments: string[]
   );
   constructor (
      message: string,
      cause: Throwable,
      command: Command,
      command_sender: CommandSender,
      arguments: string[]
   );
   constructor (cause: Throwable, command: Command, command_sender: CommandSender, arguments: string[]);
   getArguments (): string[];
   getCommand (): Command;
   getCommandSender (): CommandSender;
}
export class ServerEvent extends Event {
   constructor ();
   constructor (is_async: boolean);
}
export class ServerEventException extends ServerPluginException {
   constructor (
      message: string,
      cause: Throwable,
      enable_suppression: boolean,
      writable_stack_trace: boolean,
      responsible_plugin: Plugin,
      listener: Listener,
      event: Event
   );
   constructor (message: string, cause: Throwable, responsible_plugin: Plugin, listener: Listener, event: Event);
   constructor (cause: Throwable, responsible_plugin: Plugin, listener: Listener, event: Event);
   getEvent (): Event;
   getListener (): Listener;
}
export class ServerException extends Exception {
   constructor (message: string);
   constructor (message: string, cause: Throwable);
   constructor (message: string, cause: Throwable, enable_suppression: boolean, writable_stack_trace: boolean);
   constructor (cause: Throwable);
}
export class ServerExceptionEvent extends Event {
   constructor (exception: ServerException);
   getException (): ServerException;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class ServerInternalException extends ServerException {
   constructor (message: string);
   constructor (message: string, cause: Throwable);
   constructor (message: string, cause: Throwable, enable_suppression: boolean, writable_stack_trace: boolean);
   constructor (cause: Throwable);
   static reportInternalException (cause: Throwable): void;
}
export class ServerListPingEvent extends ServerEvent implements Iterable<Player> {
   constructor (address: InetAddress, motd: string, max_players: number);
   constructor (address: InetAddress, motd: string, num_players: number, max_players: number);
   getAddress (): InetAddress;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getMaxPlayers (): number;
   getMotd (): string;
   getNumPlayers (): number;
   iterator (): Iterator<Player>;
   setMaxPlayers (max_players: number): void;
   setMotd (motd: string): void;
   setServerIcon (icon: CachedServerIcon): void;
}
export class ServerLoadEvent extends ServerEvent {
   constructor (type: ServerLoadEvent$LoadType);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getType (): ServerLoadEvent$LoadType;
}
export class ServerLoadEvent$LoadType {
   static RELOAD: ServerLoadEvent$LoadType;
   static STARTUP: ServerLoadEvent$LoadType;
   static valueOf (name: string): ServerLoadEvent$LoadType;
   static values (): ServerLoadEvent$LoadType[];
}
export interface ServerOperator {
   isOp(): boolean;
   setOp(value: boolean): void;
}
export class ServerPluginEnableDisableException extends ServerPluginException {
   constructor (
      message: string,
      cause: Throwable,
      enable_suppression: boolean,
      writable_stack_trace: boolean,
      responsible_plugin: Plugin
   );
   constructor (message: string, cause: Throwable, responsible_plugin: Plugin);
   constructor (cause: Throwable, responsible_plugin: Plugin);
}
export class ServerPluginException extends ServerException {
   constructor (
      message: string,
      cause: Throwable,
      enable_suppression: boolean,
      writable_stack_trace: boolean,
      responsible_plugin: Plugin
   );
   constructor (message: string, cause: Throwable, responsible_plugin: Plugin);
   constructor (cause: Throwable, responsible_plugin: Plugin);
   getResponsiblePlugin (): Plugin;
}
export class ServerPluginMessageException extends ServerPluginException {
   constructor (
      message: string,
      cause: Throwable,
      enable_suppression: boolean,
      writable_stack_trace: boolean,
      responsible_plugin: Plugin,
      player: Player,
      channel: string,
      data: byte[]
   );
   constructor (
      message: string,
      cause: Throwable,
      responsible_plugin: Plugin,
      player: Player,
      channel: string,
      data: byte[]
   );
   constructor (cause: Throwable, responsible_plugin: Plugin, player: Player, channel: string, data: byte[]);
   getChannel (): string;
   getData (): number[];
   getPlayer (): Player;
}
export class ServerSchedulerException extends ServerPluginException {
   constructor (
      message: string,
      cause: Throwable,
      enable_suppression: boolean,
      writable_stack_trace: boolean,
      task: BukkitTask
   );
   constructor (message: string, cause: Throwable, task: BukkitTask);
   constructor (cause: Throwable, task: BukkitTask);
   getTask (): BukkitTask;
}
export class ServerTabCompleteException extends ServerCommandException {
   constructor (
      message: string,
      cause: Throwable,
      enable_suppression: boolean,
      writable_stack_trace: boolean,
      command: Command,
      command_sender: CommandSender,
      arguments: string[]
   );
   constructor (
      message: string,
      cause: Throwable,
      command: Command,
      command_sender: CommandSender,
      arguments: string[]
   );
   constructor (cause: Throwable, command: Command, command_sender: CommandSender, arguments: string[]);
}
export class ServerTickEndEvent extends Event {
   constructor (tickNumber: number, tickDuration: number, timeRemaining: umber);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getTickDuration (): number;
   getTickNumber (): number;
   getTimeRemaining (): number;
}
export class ServerTickStartEvent extends Event {
   constructor (tickNumber: number);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getTickNumber (): number;
}
export class ServiceEvent extends ServerEvent {
   constructor (provider: RegisteredServiceProvider<X>);
   getProvider (): RegisteredServiceProvider;
}
export class ServicePriority {
   static High: ServicePriority;
   static Highest: ServicePriority;
   static Low: ServicePriority;
   static Lowest: ServicePriority;
   static Normal: ServicePriority;
   static valueOf (name: string): ServicePriority;
   static values (): ServicePriority[];
}
export class ServiceRegisterEvent extends ServiceEvent {
   constructor (registered_provider: RegisteredServiceProvider<X>);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export interface ServicesManager {
   getKnownServices(): Collection<Class>;
   getRegistration<T>(service: Class<T>): RegisteredServiceProvider<T>;
   getRegistrations<T>(service: Class<T>): Collection<RegisteredServiceProvider<T>>;
   getRegistrations(plugin: Plugin): List<RegisteredServiceProvider>;
   isProvidedFor<T>(service: Class<T>): boolean;
   load<T>(service: Class<T>): T;
   register<T>(service: Class<T>, provider: T, plugin: Plugin, priority: ServicePriority): void;
   unregister(service: Class, provider: JavaObject): void;
   unregister(provider: JavaObject): void;
   unregisterAll(plugin: Plugin): void;
}
export class ServiceUnregisterEvent extends ServiceEvent {
   constructor (service_provider: RegisteredServiceProvider<X>);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class ShapedRecipe extends JavaObject implements Recipe, Keyed {
   constructor (result: ItemStack);
   constructor (key: NamespacedKey, result: ItemStack);
   getChoiceMap (): Map<Character, RecipeChoice>;
   getGroup (): string;
   getIngredientMap (): Map<Character, ItemStack>;
   getKey (): NamespacedKey;
   getResult (): ItemStack;
   getShape (): string[];
   setGroup (group: string): void;
   setIngredient (key: char, item: ItemStack): ShapedRecipe;
   setIngredient (key: char, ingredient: RecipeChoice): ShapedRecipe;
   setIngredient (key: char, ingredient: Material): ShapedRecipe;
   setIngredient (key: char, ingredient: MaterialData): ShapedRecipe;
   setIngredient (key: char, ingredient: Material, raw: number): ShapedRecipe;
   shape (...shape: string): ShapedRecipe;
}
export class ShapelessRecipe extends JavaObject implements Recipe, Keyed {
   constructor (result: ItemStack);
   constructor (key: NamespacedKey, result: ItemStack);
   addIngredient (count: number, item: ItemStack): ShapelessRecipe;
   addIngredient (count: number, ingredient: Material): ShapelessRecipe;
   addIngredient (count: number, ingredient: MaterialData): ShapelessRecipe;
   addIngredient (count: number, ingredient: Material, rawdata: number): ShapelessRecipe;
   addIngredient (item: ItemStack): ShapelessRecipe;
   addIngredient (ingredient: RecipeChoice): ShapelessRecipe;
   addIngredient (ingredient: Material): ShapelessRecipe;
   addIngredient (ingredient: MaterialData): ShapelessRecipe;
   addIngredient (ingredient: Material, rawdata: number): ShapelessRecipe;
   getChoiceList (): List<RecipeChoice>;
   getGroup (): string;
   getIngredientList (): List<ItemStack>;
   getKey (): NamespacedKey;
   getResult (): ItemStack;
   removeIngredient (count: number, item: ItemStack): ShapelessRecipe;
   removeIngredient (count: number, ingredient: Material): ShapelessRecipe;
   removeIngredient (count: number, ingredient: MaterialData): ShapelessRecipe;
   removeIngredient (count: number, ingredient: Material, rawdata: number): ShapelessRecipe;
   removeIngredient (item: ItemStack): ShapelessRecipe;
   removeIngredient (ingredient: RecipeChoice): ShapelessRecipe;
   removeIngredient (ingredient: Material): ShapelessRecipe;
   removeIngredient (ingredient: MaterialData): ShapelessRecipe;
   removeIngredient (ingredient: Material, rawdata: number): ShapelessRecipe;
   setGroup (group: string): void;
}
export interface Sheep extends Animals, Colorable {
   isSheared(): boolean;
   setSheared(flag: boolean): void;
}
export class SheepDyeWoolEvent extends EntityEvent implements Cancellable {
   constructor (sheep: Sheep, color: DyeColor);
   getColor (): DyeColor;
   getEntity (): Sheep;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setColor (color: DyeColor): void;
}
export class SheepRegrowWoolEvent extends EntityEvent implements Cancellable {
   constructor (sheep: Sheep);
   getEntity (): Sheep;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export interface Shulker extends Golem, Colorable {}
export interface ShulkerBox extends Container, LootableBlockInventory, Lidded {
   getColor(): DyeColor;
}
export interface ShulkerBullet extends Projectile {
   getTarget(): Entity;
   setTarget(target: Entity): void;
}
export interface Sign extends Rotatable, Waterlogged {}
export interface Sign extends TileState, Colorable {
   getLine(index: number): string;
   getLines(): string[];
   isEditable(): boolean;
   setEditable(editable: boolean): void;
   setLine(index: number, line: string): void;
}
export class Sign extends MaterialData {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Sign;
   getAttachedFace (): BlockFace;
   getFacing (): BlockFace;
   isWallSign (): boolean;
   setFacingDirection (face: BlockFace): void;
   toString (): string;
}
export class SignChangeEvent extends BlockEvent implements Cancellable {
   constructor (the_block: Block, the_player: Player, the_lines: string[]);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getLine (index: number): string;
   getLines (): string[];
   getPlayer (): Player;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setLine (index: number, line: string): void;
}
export interface Silverfish extends Monster {}
export class SimpleAttachableMaterialData extends MaterialData {
   constructor (type: Material);
   constructor (type: Material, data: number);
   constructor (type: Material, direction: BlockFace);
   clone (): SimpleAttachableMaterialData;
   getFacing (): BlockFace;
   toString (): string;
}
export class SimpleCommandMap extends JavaObject implements CommandMap {
   constructor (server: Server);
   clearCommands (): void;
   dispatch (sender: CommandSender, command_line: string): boolean;
   getCommand (name: string): Command;
   getCommands (): Collection<Command>;
   getKnownCommands (): Map<string, Command>;
   register (label: string, fallback_prefix: string, command: Command): boolean;
   register (fallback_prefix: string, command: Command): boolean;
   registerAll (fallback_prefix: string, commands: List<Command>): void;
   registerServerAliases (): void;
   setFallbackCommands (): void;
   tabComplete (sender: CommandSender, cmd_line: string): List<string>;
   tabComplete (sender: CommandSender, cmd_line: string, location: Location): List<string>;
}
export class SimplePluginManager extends JavaObject implements PluginManager {
   constructor (instance: Server, command_map: SimpleCommandMap);
   addPermission (perm: Permission): void;
   addPermission (perm: Permission, dirty: boolean): void;
   callEvent (event: Event): void;
   clearPermissions (): void;
   clearPlugins (): void;
   dirtyPermissibles (): void;
   disablePlugin (plugin: Plugin): void;
   disablePlugin (plugin: Plugin, close_classloader: boolean): void;
   disablePlugins (): void;
   disablePlugins (close_classloaders: boolean): void;
   enablePlugin (plugin: Plugin): void;
   getDefaultPermissions (op: boolean): Set<Permission>;
   getDefaultPermSubscriptions (op: boolean): Set<Permissible>;
   getPermission (name: string): Permission;
   getPermissions (): Set<Permission>;
   getPermissionSubscriptions (permission: string): Set<Permissible>;
   getPlugin (name: string): Plugin;
   getPlugins (): Plugin[];
   isPluginEnabled (name: string): boolean;
   isPluginEnabled (plugin: Plugin): boolean;
   isTransitiveDepend (plugin: PluginDescriptionFile, depend: PluginDescriptionFile): boolean;
   loadPlugin (file: File): Plugin;
   loadPlugins (directory: File): Plugin[];
   recalculatePermissionDefaults (perm: Permission): void;
   registerEvent (
      event: Class<Event>,
      listener: Listener,
      priority: EventPriority,
      executor: EventExecutor,
      plugin: Plugin
   ): void;
   registerEvent (
      event: Class<Event>,
      listener: Listener,
      priority: EventPriority,
      executor: EventExecutor,
      plugin: Plugin,
      ignore_cancelled: boolean
   ): void;
   registerEvents (listener: Listener, plugin: Plugin): void;
   registerInterface (loader: Class<PluginLoader>): void;
   removePermission (name: string): void;
   removePermission (perm: Permission): void;
   subscribeToDefaultPerms (op: boolean, permissible: Permissible): void;
   subscribeToPermission (permission: string, permissible: Permissible): void;
   unsubscribeFromDefaultPerms (op: boolean, permissible: Permissible): void;
   unsubscribeFromPermission (permission: string, permissible: Permissible): void;
   useTimings (): boolean;
   useTimings (use: boolean): void;
}
export class SimpleServicesManager extends JavaObject implements ServicesManager {
   constructor ();
   getKnownServices (): Set<Class>;
   getRegistration<T> (service: Class<T>): RegisteredServiceProvider<T>;
   getRegistrations<T> (service: Class<T>): List<RegisteredServiceProvider<T>>;
   getRegistrations (plugin: Plugin): List<RegisteredServiceProvider>;
   isProvidedFor<T> (service: Class<T>): boolean;
   load<T> (service: Class<T>): T;
   register<T> (service: Class<T>, provider: T, plugin: Plugin, priority: ServicePriority): void;
   unregister (service: Class, provider: JavaObject): void;
   unregister (provider: JavaObject): void;
   unregisterAll (plugin: Plugin): void;
}
export class SimplexNoiseGenerator extends PerlinNoiseGenerator {
   constructor ();
   constructor (seed: number);
   constructor (rand: Random);
   constructor (world: World);
   static dot (g: int[], x: number, y: number): number;
   static dot (g: int[], x: number, y: number, z: number): number;
   static dot (g: int[], x: number, y: number, z: number, w: number): number;
   static getInstance (): SimplexNoiseGenerator;
   static getNoise (xin: number): number;
   static getNoise (xin: number, yin: number): number;
   static getNoise (xin: number, yin: number, zin: number): number;
   static getNoise (x: number, y: number, z: number, w: number): number;
   noise (xin: number, yin: number): number;
   noise (xin: number, yin: number, zin: number): number;
   noise (x: number, y: number, z: number, w: number): number;
}
export class SimplexOctaveGenerator extends OctaveGenerator {
   constructor (seed: number, octaves: number);
   constructor (rand: Random, octaves: number);
   constructor (world: World, octaves: number);
   getWScale (): number;
   noise (x: number, y: number, z: number, w: number, frequency: number, amplitude: number): number;
   noise (
      x: number,
      y: number,
      z: number,
      w: number,
      frequency: number,
      amplitude: number,
      normalized: boolean
   ): number;
   setScale (scale: number): void;
   setWScale (scale: number): void;
}
export interface Sittable {
   isSitting(): boolean;
   setSitting(sitting: boolean): void;
}
export interface SizedFireball extends Fireball {
   getDisplayItem(): ItemStack;
   setDisplayItem(item: ItemStack): void;
}
export interface Skeleton extends Monster, RangedEntity {
   getSkeletonType(): Skeleton$SkeletonType;
   setSkeletonType(type: Skeleton$SkeletonType): void;
}
export class Skeleton$SkeletonType {
   static NORMAL: Skeleton$SkeletonType;
   static STRAY: Skeleton$SkeletonType;
   static WITHER: Skeleton$SkeletonType;
   static valueOf (name: string): Skeleton$SkeletonType;
   static values (): Skeleton$SkeletonType[];
}
export interface SkeletonHorse extends AbstractHorse {
   getTrapTime(): number;
   isTrap(): boolean;
   setTrap(trap: boolean): void;
}
export class SkeletonHorseTrapEvent extends EntityEvent implements Cancellable {
   constructor (horse: SkeletonHorse);
   getEntity (): SkeletonHorse;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export interface SkinParts {
   getRaw(): number;
   hasCapeEnabled(): boolean;
   hasHatsEnabled(): boolean;
   hasJacketEnabled(): boolean;
   hasLeftPantsEnabled(): boolean;
   hasLeftSleeveEnabled(): boolean;
   hasRightPantsEnabled(): boolean;
   hasRightSleeveEnabled(): boolean;
}
export interface Skull extends TileState {
   getOwner(): string;
   getOwningPlayer(): OfflinePlayer;
   getPlayerProfile(): PlayerProfile;
   getRotation(): BlockFace;
   getSkullType(): SkullType;
   hasOwner(): boolean;
   setOwner(name: string): boolean;
   setOwningPlayer(player: OfflinePlayer): void;
   setPlayerProfile(profile: PlayerProfile): void;
   setRotation(rotation: BlockFace): void;
   setSkullType(skull_type: SkullType): void;
}
export class Skull extends MaterialData {
   constructor ();
   constructor (direction: BlockFace);
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Skull;
   getFacing (): BlockFace;
   setFacingDirection (face: BlockFace): void;
   toString (): string;
}
export interface SkullMeta extends ItemMeta {
   clone(): SkullMeta;
   getOwner(): string;
   getOwningPlayer(): OfflinePlayer;
   getPlayerProfile(): PlayerProfile;
   hasOwner(): boolean;
   setOwner(owner: string): boolean;
   setOwningPlayer(owner: OfflinePlayer): boolean;
   setPlayerProfile(profile: PlayerProfile): void;
}
export class SkullType {
   static CREEPER: SkullType;
   static DRAGON: SkullType;
   static PLAYER: SkullType;
   static SKELETON: SkullType;
   static WITHER: SkullType;
   static ZOMBIE: SkullType;
   static valueOf (name: string): SkullType;
   static values (): SkullType[];
}
export interface Slab extends Waterlogged {
   getType(): Slab$Type;
   setType(type: Slab$Type): void;
}
export class Slab$Type {
   static BOTTOM: Slab$Type;
   static DOUBLE: Slab$Type;
   static TOP: Slab$Type;
   static valueOf (name: string): Slab$Type;
   static values (): Slab$Type[];
}
export interface Slime extends Mob {
   canWander(): boolean;
   getSize(): number;
   setSize(sz: number): void;
   setWander(can_wander: boolean): void;
}
export class SlimeChangeDirectionEvent extends SlimePathfindEvent implements Cancellable {
   constructor (slime: Slime, yaw: number);
   getNewYaw (): number;
   setNewYaw (yaw: number): void;
}
export class SlimePathfindEvent extends EntityEvent implements Cancellable {
   constructor (slime: Slime);
   getEntity (): Slime;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class SlimeSplitEvent extends EntityEvent implements Cancellable {
   constructor (slime: Slime, count: number);
   getCount (): number;
   getEntity (): Slime;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setCount (count: number): void;
}
export class SlimeSwimEvent extends SlimeWanderEvent implements Cancellable {
   constructor (slime: Slime);
}
export class SlimeTargetLivingEntityEvent extends SlimePathfindEvent implements Cancellable {
   constructor (slime: Slime, target: LivingEntity);
   getTarget (): LivingEntity;
}
export class SlimeWanderEvent extends SlimePathfindEvent implements Cancellable {
   constructor (slime: Slime);
}
export interface SmallFireball extends SizedFireball {}
export interface SmithingInventory extends Inventory {}
export class SmithingRecipe extends JavaObject implements Recipe, Keyed {
   constructor (key: NamespacedKey, result: ItemStack, base: RecipeChoice, addition: RecipeChoice);
   getAddition (): RecipeChoice;
   getBase (): RecipeChoice;
   getKey (): NamespacedKey;
   getResult (): ItemStack;
}
export interface Smoker extends Furnace {}
export class SmokingRecipe extends CookingRecipe<SmokingRecipe> {
   constructor (key: NamespacedKey, result: ItemStack, input: RecipeChoice, experience: number, cooking_time: number);
   constructor (key: NamespacedKey, result: ItemStack, source: Material, experience: number, cooking_time: number);
}
export class SmoothBrick extends TexturedMaterial {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): SmoothBrick;
   getTextures (): List<Material>;
}
export class SneakyThrow extends JavaObject {
   constructor ();
   static sneaky (exception: Throwable): void;
}
export interface Snow extends BlockData {
   getLayers(): number;
   getMaximumLayers(): number;
   getMinimumLayers(): number;
   setLayers(layers: number): void;
}
export interface Snowable extends BlockData {
   isSnowy(): boolean;
   setSnowy(snowy: boolean): void;
}
export interface Snowball extends ThrowableProjectile {}
export interface Snowman extends Golem, RangedEntity {
   isDerp(): boolean;
   setDerp(derp_mode: boolean): void;
}
export class Sound {
   static AMBIENT_BASALT_DELTAS_ADDITIONS: Sound;
   static AMBIENT_BASALT_DELTAS_LOOP: Sound;
   static AMBIENT_BASALT_DELTAS_MOOD: Sound;
   static AMBIENT_CAVE: Sound;
   static AMBIENT_CRIMSON_FOREST_ADDITIONS: Sound;
   static AMBIENT_CRIMSON_FOREST_LOOP: Sound;
   static AMBIENT_CRIMSON_FOREST_MOOD: Sound;
   static AMBIENT_NETHER_WASTES_ADDITIONS: Sound;
   static AMBIENT_NETHER_WASTES_LOOP: Sound;
   static AMBIENT_NETHER_WASTES_MOOD: Sound;
   static AMBIENT_SOUL_SAND_VALLEY_ADDITIONS: Sound;
   static AMBIENT_SOUL_SAND_VALLEY_LOOP: Sound;
   static AMBIENT_SOUL_SAND_VALLEY_MOOD: Sound;
   static AMBIENT_UNDERWATER_ENTER: Sound;
   static AMBIENT_UNDERWATER_EXIT: Sound;
   static AMBIENT_UNDERWATER_LOOP: Sound;
   static AMBIENT_UNDERWATER_LOOP_ADDITIONS: Sound;
   static AMBIENT_UNDERWATER_LOOP_ADDITIONS_RARE: Sound;
   static AMBIENT_UNDERWATER_LOOP_ADDITIONS_ULTRA_RARE: Sound;
   static AMBIENT_WARPED_FOREST_ADDITIONS: Sound;
   static AMBIENT_WARPED_FOREST_LOOP: Sound;
   static AMBIENT_WARPED_FOREST_MOOD: Sound;
   static BLOCK_ANCIENT_DEBRIS_BREAK: Sound;
   static BLOCK_ANCIENT_DEBRIS_FALL: Sound;
   static BLOCK_ANCIENT_DEBRIS_HIT: Sound;
   static BLOCK_ANCIENT_DEBRIS_PLACE: Sound;
   static BLOCK_ANCIENT_DEBRIS_STEP: Sound;
   static BLOCK_ANVIL_BREAK: Sound;
   static BLOCK_ANVIL_DESTROY: Sound;
   static BLOCK_ANVIL_FALL: Sound;
   static BLOCK_ANVIL_HIT: Sound;
   static BLOCK_ANVIL_LAND: Sound;
   static BLOCK_ANVIL_PLACE: Sound;
   static BLOCK_ANVIL_STEP: Sound;
   static BLOCK_ANVIL_USE: Sound;
   static BLOCK_BAMBOO_BREAK: Sound;
   static BLOCK_BAMBOO_FALL: Sound;
   static BLOCK_BAMBOO_HIT: Sound;
   static BLOCK_BAMBOO_PLACE: Sound;
   static BLOCK_BAMBOO_SAPLING_BREAK: Sound;
   static BLOCK_BAMBOO_SAPLING_HIT: Sound;
   static BLOCK_BAMBOO_SAPLING_PLACE: Sound;
   static BLOCK_BAMBOO_STEP: Sound;
   static BLOCK_BARREL_CLOSE: Sound;
   static BLOCK_BARREL_OPEN: Sound;
   static BLOCK_BASALT_BREAK: Sound;
   static BLOCK_BASALT_FALL: Sound;
   static BLOCK_BASALT_HIT: Sound;
   static BLOCK_BASALT_PLACE: Sound;
   static BLOCK_BASALT_STEP: Sound;
   static BLOCK_BEACON_ACTIVATE: Sound;
   static BLOCK_BEACON_AMBIENT: Sound;
   static BLOCK_BEACON_DEACTIVATE: Sound;
   static BLOCK_BEACON_POWER_SELECT: Sound;
   static BLOCK_BEEHIVE_DRIP: Sound;
   static BLOCK_BEEHIVE_ENTER: Sound;
   static BLOCK_BEEHIVE_EXIT: Sound;
   static BLOCK_BEEHIVE_SHEAR: Sound;
   static BLOCK_BEEHIVE_WORK: Sound;
   static BLOCK_BELL_RESONATE: Sound;
   static BLOCK_BELL_USE: Sound;
   static BLOCK_BLASTFURNACE_FIRE_CRACKLE: Sound;
   static BLOCK_BONE_BLOCK_BREAK: Sound;
   static BLOCK_BONE_BLOCK_FALL: Sound;
   static BLOCK_BONE_BLOCK_HIT: Sound;
   static BLOCK_BONE_BLOCK_PLACE: Sound;
   static BLOCK_BONE_BLOCK_STEP: Sound;
   static BLOCK_BREWING_STAND_BREW: Sound;
   static BLOCK_BUBBLE_COLUMN_BUBBLE_POP: Sound;
   static BLOCK_BUBBLE_COLUMN_UPWARDS_AMBIENT: Sound;
   static BLOCK_BUBBLE_COLUMN_UPWARDS_INSIDE: Sound;
   static BLOCK_BUBBLE_COLUMN_WHIRLPOOL_AMBIENT: Sound;
   static BLOCK_BUBBLE_COLUMN_WHIRLPOOL_INSIDE: Sound;
   static BLOCK_CAMPFIRE_CRACKLE: Sound;
   static BLOCK_CHAIN_BREAK: Sound;
   static BLOCK_CHAIN_FALL: Sound;
   static BLOCK_CHAIN_HIT: Sound;
   static BLOCK_CHAIN_PLACE: Sound;
   static BLOCK_CHAIN_STEP: Sound;
   static BLOCK_CHEST_CLOSE: Sound;
   static BLOCK_CHEST_LOCKED: Sound;
   static BLOCK_CHEST_OPEN: Sound;
   static BLOCK_CHORUS_FLOWER_DEATH: Sound;
   static BLOCK_CHORUS_FLOWER_GROW: Sound;
   static BLOCK_COMPARATOR_CLICK: Sound;
   static BLOCK_COMPOSTER_EMPTY: Sound;
   static BLOCK_COMPOSTER_FILL: Sound;
   static BLOCK_COMPOSTER_FILL_SUCCESS: Sound;
   static BLOCK_COMPOSTER_READY: Sound;
   static BLOCK_CONDUIT_ACTIVATE: Sound;
   static BLOCK_CONDUIT_AMBIENT: Sound;
   static BLOCK_CONDUIT_AMBIENT_SHORT: Sound;
   static BLOCK_CONDUIT_ATTACK_TARGET: Sound;
   static BLOCK_CONDUIT_DEACTIVATE: Sound;
   static BLOCK_CORAL_BLOCK_BREAK: Sound;
   static BLOCK_CORAL_BLOCK_FALL: Sound;
   static BLOCK_CORAL_BLOCK_HIT: Sound;
   static BLOCK_CORAL_BLOCK_PLACE: Sound;
   static BLOCK_CORAL_BLOCK_STEP: Sound;
   static BLOCK_CROP_BREAK: Sound;
   static BLOCK_DISPENSER_DISPENSE: Sound;
   static BLOCK_DISPENSER_FAIL: Sound;
   static BLOCK_DISPENSER_LAUNCH: Sound;
   static BLOCK_ENCHANTMENT_TABLE_USE: Sound;
   static BLOCK_END_GATEWAY_SPAWN: Sound;
   static BLOCK_END_PORTAL_FRAME_FILL: Sound;
   static BLOCK_END_PORTAL_SPAWN: Sound;
   static BLOCK_ENDER_CHEST_CLOSE: Sound;
   static BLOCK_ENDER_CHEST_OPEN: Sound;
   static BLOCK_FENCE_GATE_CLOSE: Sound;
   static BLOCK_FENCE_GATE_OPEN: Sound;
   static BLOCK_FIRE_AMBIENT: Sound;
   static BLOCK_FIRE_EXTINGUISH: Sound;
   static BLOCK_FUNGUS_BREAK: Sound;
   static BLOCK_FUNGUS_FALL: Sound;
   static BLOCK_FUNGUS_HIT: Sound;
   static BLOCK_FUNGUS_PLACE: Sound;
   static BLOCK_FUNGUS_STEP: Sound;
   static BLOCK_FURNACE_FIRE_CRACKLE: Sound;
   static BLOCK_GILDED_BLACKSTONE_BREAK: Sound;
   static BLOCK_GILDED_BLACKSTONE_FALL: Sound;
   static BLOCK_GILDED_BLACKSTONE_HIT: Sound;
   static BLOCK_GILDED_BLACKSTONE_PLACE: Sound;
   static BLOCK_GILDED_BLACKSTONE_STEP: Sound;
   static BLOCK_GLASS_BREAK: Sound;
   static BLOCK_GLASS_FALL: Sound;
   static BLOCK_GLASS_HIT: Sound;
   static BLOCK_GLASS_PLACE: Sound;
   static BLOCK_GLASS_STEP: Sound;
   static BLOCK_GRASS_BREAK: Sound;
   static BLOCK_GRASS_FALL: Sound;
   static BLOCK_GRASS_HIT: Sound;
   static BLOCK_GRASS_PLACE: Sound;
   static BLOCK_GRASS_STEP: Sound;
   static BLOCK_GRAVEL_BREAK: Sound;
   static BLOCK_GRAVEL_FALL: Sound;
   static BLOCK_GRAVEL_HIT: Sound;
   static BLOCK_GRAVEL_PLACE: Sound;
   static BLOCK_GRAVEL_STEP: Sound;
   static BLOCK_GRINDSTONE_USE: Sound;
   static BLOCK_HONEY_BLOCK_BREAK: Sound;
   static BLOCK_HONEY_BLOCK_FALL: Sound;
   static BLOCK_HONEY_BLOCK_HIT: Sound;
   static BLOCK_HONEY_BLOCK_PLACE: Sound;
   static BLOCK_HONEY_BLOCK_SLIDE: Sound;
   static BLOCK_HONEY_BLOCK_STEP: Sound;
   static BLOCK_IRON_DOOR_CLOSE: Sound;
   static BLOCK_IRON_DOOR_OPEN: Sound;
   static BLOCK_IRON_TRAPDOOR_CLOSE: Sound;
   static BLOCK_IRON_TRAPDOOR_OPEN: Sound;
   static BLOCK_LADDER_BREAK: Sound;
   static BLOCK_LADDER_FALL: Sound;
   static BLOCK_LADDER_HIT: Sound;
   static BLOCK_LADDER_PLACE: Sound;
   static BLOCK_LADDER_STEP: Sound;
   static BLOCK_LANTERN_BREAK: Sound;
   static BLOCK_LANTERN_FALL: Sound;
   static BLOCK_LANTERN_HIT: Sound;
   static BLOCK_LANTERN_PLACE: Sound;
   static BLOCK_LANTERN_STEP: Sound;
   static BLOCK_LAVA_AMBIENT: Sound;
   static BLOCK_LAVA_EXTINGUISH: Sound;
   static BLOCK_LAVA_POP: Sound;
   static BLOCK_LEVER_CLICK: Sound;
   static BLOCK_LILY_PAD_PLACE: Sound;
   static BLOCK_LODESTONE_BREAK: Sound;
   static BLOCK_LODESTONE_FALL: Sound;
   static BLOCK_LODESTONE_HIT: Sound;
   static BLOCK_LODESTONE_PLACE: Sound;
   static BLOCK_LODESTONE_STEP: Sound;
   static BLOCK_METAL_BREAK: Sound;
   static BLOCK_METAL_FALL: Sound;
   static BLOCK_METAL_HIT: Sound;
   static BLOCK_METAL_PLACE: Sound;
   static BLOCK_METAL_PRESSURE_PLATE_CLICK_OFF: Sound;
   static BLOCK_METAL_PRESSURE_PLATE_CLICK_ON: Sound;
   static BLOCK_METAL_STEP: Sound;
   static BLOCK_NETHER_BRICKS_BREAK: Sound;
   static BLOCK_NETHER_BRICKS_FALL: Sound;
   static BLOCK_NETHER_BRICKS_HIT: Sound;
   static BLOCK_NETHER_BRICKS_PLACE: Sound;
   static BLOCK_NETHER_BRICKS_STEP: Sound;
   static BLOCK_NETHER_GOLD_ORE_BREAK: Sound;
   static BLOCK_NETHER_GOLD_ORE_FALL: Sound;
   static BLOCK_NETHER_GOLD_ORE_HIT: Sound;
   static BLOCK_NETHER_GOLD_ORE_PLACE: Sound;
   static BLOCK_NETHER_GOLD_ORE_STEP: Sound;
   static BLOCK_NETHER_ORE_BREAK: Sound;
   static BLOCK_NETHER_ORE_FALL: Sound;
   static BLOCK_NETHER_ORE_HIT: Sound;
   static BLOCK_NETHER_ORE_PLACE: Sound;
   static BLOCK_NETHER_ORE_STEP: Sound;
   static BLOCK_NETHER_SPROUTS_BREAK: Sound;
   static BLOCK_NETHER_SPROUTS_FALL: Sound;
   static BLOCK_NETHER_SPROUTS_HIT: Sound;
   static BLOCK_NETHER_SPROUTS_PLACE: Sound;
   static BLOCK_NETHER_SPROUTS_STEP: Sound;
   static BLOCK_NETHER_WART_BREAK: Sound;
   static BLOCK_NETHERITE_BLOCK_BREAK: Sound;
   static BLOCK_NETHERITE_BLOCK_FALL: Sound;
   static BLOCK_NETHERITE_BLOCK_HIT: Sound;
   static BLOCK_NETHERITE_BLOCK_PLACE: Sound;
   static BLOCK_NETHERITE_BLOCK_STEP: Sound;
   static BLOCK_NETHERRACK_BREAK: Sound;
   static BLOCK_NETHERRACK_FALL: Sound;
   static BLOCK_NETHERRACK_HIT: Sound;
   static BLOCK_NETHERRACK_PLACE: Sound;
   static BLOCK_NETHERRACK_STEP: Sound;
   static BLOCK_NOTE_BLOCK_BANJO: Sound;
   static BLOCK_NOTE_BLOCK_BASEDRUM: Sound;
   static BLOCK_NOTE_BLOCK_BASS: Sound;
   static BLOCK_NOTE_BLOCK_BELL: Sound;
   static BLOCK_NOTE_BLOCK_BIT: Sound;
   static BLOCK_NOTE_BLOCK_CHIME: Sound;
   static BLOCK_NOTE_BLOCK_COW_BELL: Sound;
   static BLOCK_NOTE_BLOCK_DIDGERIDOO: Sound;
   static BLOCK_NOTE_BLOCK_FLUTE: Sound;
   static BLOCK_NOTE_BLOCK_GUITAR: Sound;
   static BLOCK_NOTE_BLOCK_HARP: Sound;
   static BLOCK_NOTE_BLOCK_HAT: Sound;
   static BLOCK_NOTE_BLOCK_IRON_XYLOPHONE: Sound;
   static BLOCK_NOTE_BLOCK_PLING: Sound;
   static BLOCK_NOTE_BLOCK_SNARE: Sound;
   static BLOCK_NOTE_BLOCK_XYLOPHONE: Sound;
   static BLOCK_NYLIUM_BREAK: Sound;
   static BLOCK_NYLIUM_FALL: Sound;
   static BLOCK_NYLIUM_HIT: Sound;
   static BLOCK_NYLIUM_PLACE: Sound;
   static BLOCK_NYLIUM_STEP: Sound;
   static BLOCK_PISTON_CONTRACT: Sound;
   static BLOCK_PISTON_EXTEND: Sound;
   static BLOCK_PORTAL_AMBIENT: Sound;
   static BLOCK_PORTAL_TRAVEL: Sound;
   static BLOCK_PORTAL_TRIGGER: Sound;
   static BLOCK_PUMPKIN_CARVE: Sound;
   static BLOCK_REDSTONE_TORCH_BURNOUT: Sound;
   static BLOCK_RESPAWN_ANCHOR_AMBIENT: Sound;
   static BLOCK_RESPAWN_ANCHOR_CHARGE: Sound;
   static BLOCK_RESPAWN_ANCHOR_DEPLETE: Sound;
   static BLOCK_RESPAWN_ANCHOR_SET_SPAWN: Sound;
   static BLOCK_ROOTS_BREAK: Sound;
   static BLOCK_ROOTS_FALL: Sound;
   static BLOCK_ROOTS_HIT: Sound;
   static BLOCK_ROOTS_PLACE: Sound;
   static BLOCK_ROOTS_STEP: Sound;
   static BLOCK_SAND_BREAK: Sound;
   static BLOCK_SAND_FALL: Sound;
   static BLOCK_SAND_HIT: Sound;
   static BLOCK_SAND_PLACE: Sound;
   static BLOCK_SAND_STEP: Sound;
   static BLOCK_SCAFFOLDING_BREAK: Sound;
   static BLOCK_SCAFFOLDING_FALL: Sound;
   static BLOCK_SCAFFOLDING_HIT: Sound;
   static BLOCK_SCAFFOLDING_PLACE: Sound;
   static BLOCK_SCAFFOLDING_STEP: Sound;
   static BLOCK_SHROOMLIGHT_BREAK: Sound;
   static BLOCK_SHROOMLIGHT_FALL: Sound;
   static BLOCK_SHROOMLIGHT_HIT: Sound;
   static BLOCK_SHROOMLIGHT_PLACE: Sound;
   static BLOCK_SHROOMLIGHT_STEP: Sound;
   static BLOCK_SHULKER_BOX_CLOSE: Sound;
   static BLOCK_SHULKER_BOX_OPEN: Sound;
   static BLOCK_SLIME_BLOCK_BREAK: Sound;
   static BLOCK_SLIME_BLOCK_FALL: Sound;
   static BLOCK_SLIME_BLOCK_HIT: Sound;
   static BLOCK_SLIME_BLOCK_PLACE: Sound;
   static BLOCK_SLIME_BLOCK_STEP: Sound;
   static BLOCK_SMITHING_TABLE_USE: Sound;
   static BLOCK_SMOKER_SMOKE: Sound;
   static BLOCK_SNOW_BREAK: Sound;
   static BLOCK_SNOW_FALL: Sound;
   static BLOCK_SNOW_HIT: Sound;
   static BLOCK_SNOW_PLACE: Sound;
   static BLOCK_SNOW_STEP: Sound;
   static BLOCK_SOUL_SAND_BREAK: Sound;
   static BLOCK_SOUL_SAND_FALL: Sound;
   static BLOCK_SOUL_SAND_HIT: Sound;
   static BLOCK_SOUL_SAND_PLACE: Sound;
   static BLOCK_SOUL_SAND_STEP: Sound;
   static BLOCK_SOUL_SOIL_BREAK: Sound;
   static BLOCK_SOUL_SOIL_FALL: Sound;
   static BLOCK_SOUL_SOIL_HIT: Sound;
   static BLOCK_SOUL_SOIL_PLACE: Sound;
   static BLOCK_SOUL_SOIL_STEP: Sound;
   static BLOCK_STEM_BREAK: Sound;
   static BLOCK_STEM_FALL: Sound;
   static BLOCK_STEM_HIT: Sound;
   static BLOCK_STEM_PLACE: Sound;
   static BLOCK_STEM_STEP: Sound;
   static BLOCK_STONE_BREAK: Sound;
   static BLOCK_STONE_BUTTON_CLICK_OFF: Sound;
   static BLOCK_STONE_BUTTON_CLICK_ON: Sound;
   static BLOCK_STONE_FALL: Sound;
   static BLOCK_STONE_HIT: Sound;
   static BLOCK_STONE_PLACE: Sound;
   static BLOCK_STONE_PRESSURE_PLATE_CLICK_OFF: Sound;
   static BLOCK_STONE_PRESSURE_PLATE_CLICK_ON: Sound;
   static BLOCK_STONE_STEP: Sound;
   static BLOCK_SWEET_BERRY_BUSH_BREAK: Sound;
   static BLOCK_SWEET_BERRY_BUSH_PLACE: Sound;
   static BLOCK_TRIPWIRE_ATTACH: Sound;
   static BLOCK_TRIPWIRE_CLICK_OFF: Sound;
   static BLOCK_TRIPWIRE_CLICK_ON: Sound;
   static BLOCK_TRIPWIRE_DETACH: Sound;
   static BLOCK_VINE_STEP: Sound;
   static BLOCK_WART_BLOCK_BREAK: Sound;
   static BLOCK_WART_BLOCK_FALL: Sound;
   static BLOCK_WART_BLOCK_HIT: Sound;
   static BLOCK_WART_BLOCK_PLACE: Sound;
   static BLOCK_WART_BLOCK_STEP: Sound;
   static BLOCK_WATER_AMBIENT: Sound;
   static BLOCK_WEEPING_VINES_BREAK: Sound;
   static BLOCK_WEEPING_VINES_FALL: Sound;
   static BLOCK_WEEPING_VINES_HIT: Sound;
   static BLOCK_WEEPING_VINES_PLACE: Sound;
   static BLOCK_WEEPING_VINES_STEP: Sound;
   static BLOCK_WET_GRASS_BREAK: Sound;
   static BLOCK_WET_GRASS_FALL: Sound;
   static BLOCK_WET_GRASS_HIT: Sound;
   static BLOCK_WET_GRASS_PLACE: Sound;
   static BLOCK_WET_GRASS_STEP: Sound;
   static BLOCK_WOOD_BREAK: Sound;
   static BLOCK_WOOD_FALL: Sound;
   static BLOCK_WOOD_HIT: Sound;
   static BLOCK_WOOD_PLACE: Sound;
   static BLOCK_WOOD_STEP: Sound;
   static BLOCK_WOODEN_BUTTON_CLICK_OFF: Sound;
   static BLOCK_WOODEN_BUTTON_CLICK_ON: Sound;
   static BLOCK_WOODEN_DOOR_CLOSE: Sound;
   static BLOCK_WOODEN_DOOR_OPEN: Sound;
   static BLOCK_WOODEN_PRESSURE_PLATE_CLICK_OFF: Sound;
   static BLOCK_WOODEN_PRESSURE_PLATE_CLICK_ON: Sound;
   static BLOCK_WOODEN_TRAPDOOR_CLOSE: Sound;
   static BLOCK_WOODEN_TRAPDOOR_OPEN: Sound;
   static BLOCK_WOOL_BREAK: Sound;
   static BLOCK_WOOL_FALL: Sound;
   static BLOCK_WOOL_HIT: Sound;
   static BLOCK_WOOL_PLACE: Sound;
   static BLOCK_WOOL_STEP: Sound;
   static ENCHANT_THORNS_HIT: Sound;
   static ENTITY_ARMOR_STAND_BREAK: Sound;
   static ENTITY_ARMOR_STAND_FALL: Sound;
   static ENTITY_ARMOR_STAND_HIT: Sound;
   static ENTITY_ARMOR_STAND_PLACE: Sound;
   static ENTITY_ARROW_HIT: Sound;
   static ENTITY_ARROW_HIT_PLAYER: Sound;
   static ENTITY_ARROW_SHOOT: Sound;
   static ENTITY_BAT_AMBIENT: Sound;
   static ENTITY_BAT_DEATH: Sound;
   static ENTITY_BAT_HURT: Sound;
   static ENTITY_BAT_LOOP: Sound;
   static ENTITY_BAT_TAKEOFF: Sound;
   static ENTITY_BEE_DEATH: Sound;
   static ENTITY_BEE_HURT: Sound;
   static ENTITY_BEE_LOOP: Sound;
   static ENTITY_BEE_LOOP_AGGRESSIVE: Sound;
   static ENTITY_BEE_POLLINATE: Sound;
   static ENTITY_BEE_STING: Sound;
   static ENTITY_BLAZE_AMBIENT: Sound;
   static ENTITY_BLAZE_BURN: Sound;
   static ENTITY_BLAZE_DEATH: Sound;
   static ENTITY_BLAZE_HURT: Sound;
   static ENTITY_BLAZE_SHOOT: Sound;
   static ENTITY_BOAT_PADDLE_LAND: Sound;
   static ENTITY_BOAT_PADDLE_WATER: Sound;
   static ENTITY_CAT_AMBIENT: Sound;
   static ENTITY_CAT_BEG_FOR_FOOD: Sound;
   static ENTITY_CAT_DEATH: Sound;
   static ENTITY_CAT_EAT: Sound;
   static ENTITY_CAT_HISS: Sound;
   static ENTITY_CAT_HURT: Sound;
   static ENTITY_CAT_PURR: Sound;
   static ENTITY_CAT_PURREOW: Sound;
   static ENTITY_CAT_STRAY_AMBIENT: Sound;
   static ENTITY_CHICKEN_AMBIENT: Sound;
   static ENTITY_CHICKEN_DEATH: Sound;
   static ENTITY_CHICKEN_EGG: Sound;
   static ENTITY_CHICKEN_HURT: Sound;
   static ENTITY_CHICKEN_STEP: Sound;
   static ENTITY_COD_AMBIENT: Sound;
   static ENTITY_COD_DEATH: Sound;
   static ENTITY_COD_FLOP: Sound;
   static ENTITY_COD_HURT: Sound;
   static ENTITY_COW_AMBIENT: Sound;
   static ENTITY_COW_DEATH: Sound;
   static ENTITY_COW_HURT: Sound;
   static ENTITY_COW_MILK: Sound;
   static ENTITY_COW_STEP: Sound;
   static ENTITY_CREEPER_DEATH: Sound;
   static ENTITY_CREEPER_HURT: Sound;
   static ENTITY_CREEPER_PRIMED: Sound;
   static ENTITY_DOLPHIN_AMBIENT: Sound;
   static ENTITY_DOLPHIN_AMBIENT_WATER: Sound;
   static ENTITY_DOLPHIN_ATTACK: Sound;
   static ENTITY_DOLPHIN_DEATH: Sound;
   static ENTITY_DOLPHIN_EAT: Sound;
   static ENTITY_DOLPHIN_HURT: Sound;
   static ENTITY_DOLPHIN_JUMP: Sound;
   static ENTITY_DOLPHIN_PLAY: Sound;
   static ENTITY_DOLPHIN_SPLASH: Sound;
   static ENTITY_DOLPHIN_SWIM: Sound;
   static ENTITY_DONKEY_AMBIENT: Sound;
   static ENTITY_DONKEY_ANGRY: Sound;
   static ENTITY_DONKEY_CHEST: Sound;
   static ENTITY_DONKEY_DEATH: Sound;
   static ENTITY_DONKEY_EAT: Sound;
   static ENTITY_DONKEY_HURT: Sound;
   static ENTITY_DRAGON_FIREBALL_EXPLODE: Sound;
   static ENTITY_DROWNED_AMBIENT: Sound;
   static ENTITY_DROWNED_AMBIENT_WATER: Sound;
   static ENTITY_DROWNED_DEATH: Sound;
   static ENTITY_DROWNED_DEATH_WATER: Sound;
   static ENTITY_DROWNED_HURT: Sound;
   static ENTITY_DROWNED_HURT_WATER: Sound;
   static ENTITY_DROWNED_SHOOT: Sound;
   static ENTITY_DROWNED_STEP: Sound;
   static ENTITY_DROWNED_SWIM: Sound;
   static ENTITY_EGG_THROW: Sound;
   static ENTITY_ELDER_GUARDIAN_AMBIENT: Sound;
   static ENTITY_ELDER_GUARDIAN_AMBIENT_LAND: Sound;
   static ENTITY_ELDER_GUARDIAN_CURSE: Sound;
   static ENTITY_ELDER_GUARDIAN_DEATH: Sound;
   static ENTITY_ELDER_GUARDIAN_DEATH_LAND: Sound;
   static ENTITY_ELDER_GUARDIAN_FLOP: Sound;
   static ENTITY_ELDER_GUARDIAN_HURT: Sound;
   static ENTITY_ELDER_GUARDIAN_HURT_LAND: Sound;
   static ENTITY_ENDER_DRAGON_AMBIENT: Sound;
   static ENTITY_ENDER_DRAGON_DEATH: Sound;
   static ENTITY_ENDER_DRAGON_FLAP: Sound;
   static ENTITY_ENDER_DRAGON_GROWL: Sound;
   static ENTITY_ENDER_DRAGON_HURT: Sound;
   static ENTITY_ENDER_DRAGON_SHOOT: Sound;
   static ENTITY_ENDER_EYE_DEATH: Sound;
   static ENTITY_ENDER_EYE_LAUNCH: Sound;
   static ENTITY_ENDER_PEARL_THROW: Sound;
   static ENTITY_ENDERMAN_AMBIENT: Sound;
   static ENTITY_ENDERMAN_DEATH: Sound;
   static ENTITY_ENDERMAN_HURT: Sound;
   static ENTITY_ENDERMAN_SCREAM: Sound;
   static ENTITY_ENDERMAN_STARE: Sound;
   static ENTITY_ENDERMAN_TELEPORT: Sound;
   static ENTITY_ENDERMITE_AMBIENT: Sound;
   static ENTITY_ENDERMITE_DEATH: Sound;
   static ENTITY_ENDERMITE_HURT: Sound;
   static ENTITY_ENDERMITE_STEP: Sound;
   static ENTITY_EVOKER_AMBIENT: Sound;
   static ENTITY_EVOKER_CAST_SPELL: Sound;
   static ENTITY_EVOKER_CELEBRATE: Sound;
   static ENTITY_EVOKER_DEATH: Sound;
   static ENTITY_EVOKER_FANGS_ATTACK: Sound;
   static ENTITY_EVOKER_HURT: Sound;
   static ENTITY_EVOKER_PREPARE_ATTACK: Sound;
   static ENTITY_EVOKER_PREPARE_SUMMON: Sound;
   static ENTITY_EVOKER_PREPARE_WOLOLO: Sound;
   static ENTITY_EXPERIENCE_BOTTLE_THROW: Sound;
   static ENTITY_EXPERIENCE_ORB_PICKUP: Sound;
   static ENTITY_FIREWORK_ROCKET_BLAST: Sound;
   static ENTITY_FIREWORK_ROCKET_BLAST_FAR: Sound;
   static ENTITY_FIREWORK_ROCKET_LARGE_BLAST: Sound;
   static ENTITY_FIREWORK_ROCKET_LARGE_BLAST_FAR: Sound;
   static ENTITY_FIREWORK_ROCKET_LAUNCH: Sound;
   static ENTITY_FIREWORK_ROCKET_SHOOT: Sound;
   static ENTITY_FIREWORK_ROCKET_TWINKLE: Sound;
   static ENTITY_FIREWORK_ROCKET_TWINKLE_FAR: Sound;
   static ENTITY_FISH_SWIM: Sound;
   static ENTITY_FISHING_BOBBER_RETRIEVE: Sound;
   static ENTITY_FISHING_BOBBER_SPLASH: Sound;
   static ENTITY_FISHING_BOBBER_THROW: Sound;
   static ENTITY_FOX_AGGRO: Sound;
   static ENTITY_FOX_AMBIENT: Sound;
   static ENTITY_FOX_BITE: Sound;
   static ENTITY_FOX_DEATH: Sound;
   static ENTITY_FOX_EAT: Sound;
   static ENTITY_FOX_HURT: Sound;
   static ENTITY_FOX_SCREECH: Sound;
   static ENTITY_FOX_SLEEP: Sound;
   static ENTITY_FOX_SNIFF: Sound;
   static ENTITY_FOX_SPIT: Sound;
   static ENTITY_FOX_TELEPORT: Sound;
   static ENTITY_GENERIC_BIG_FALL: Sound;
   static ENTITY_GENERIC_BURN: Sound;
   static ENTITY_GENERIC_DEATH: Sound;
   static ENTITY_GENERIC_DRINK: Sound;
   static ENTITY_GENERIC_EAT: Sound;
   static ENTITY_GENERIC_EXPLODE: Sound;
   static ENTITY_GENERIC_EXTINGUISH_FIRE: Sound;
   static ENTITY_GENERIC_HURT: Sound;
   static ENTITY_GENERIC_SMALL_FALL: Sound;
   static ENTITY_GENERIC_SPLASH: Sound;
   static ENTITY_GENERIC_SWIM: Sound;
   static ENTITY_GHAST_AMBIENT: Sound;
   static ENTITY_GHAST_DEATH: Sound;
   static ENTITY_GHAST_HURT: Sound;
   static ENTITY_GHAST_SCREAM: Sound;
   static ENTITY_GHAST_SHOOT: Sound;
   static ENTITY_GHAST_WARN: Sound;
   static ENTITY_GUARDIAN_AMBIENT: Sound;
   static ENTITY_GUARDIAN_AMBIENT_LAND: Sound;
   static ENTITY_GUARDIAN_ATTACK: Sound;
   static ENTITY_GUARDIAN_DEATH: Sound;
   static ENTITY_GUARDIAN_DEATH_LAND: Sound;
   static ENTITY_GUARDIAN_FLOP: Sound;
   static ENTITY_GUARDIAN_HURT: Sound;
   static ENTITY_GUARDIAN_HURT_LAND: Sound;
   static ENTITY_HOGLIN_AMBIENT: Sound;
   static ENTITY_HOGLIN_ANGRY: Sound;
   static ENTITY_HOGLIN_ATTACK: Sound;
   static ENTITY_HOGLIN_CONVERTED_TO_ZOMBIFIED: Sound;
   static ENTITY_HOGLIN_DEATH: Sound;
   static ENTITY_HOGLIN_HURT: Sound;
   static ENTITY_HOGLIN_RETREAT: Sound;
   static ENTITY_HOGLIN_STEP: Sound;
   static ENTITY_HORSE_AMBIENT: Sound;
   static ENTITY_HORSE_ANGRY: Sound;
   static ENTITY_HORSE_ARMOR: Sound;
   static ENTITY_HORSE_BREATHE: Sound;
   static ENTITY_HORSE_DEATH: Sound;
   static ENTITY_HORSE_EAT: Sound;
   static ENTITY_HORSE_GALLOP: Sound;
   static ENTITY_HORSE_HURT: Sound;
   static ENTITY_HORSE_JUMP: Sound;
   static ENTITY_HORSE_LAND: Sound;
   static ENTITY_HORSE_SADDLE: Sound;
   static ENTITY_HORSE_STEP: Sound;
   static ENTITY_HORSE_STEP_WOOD: Sound;
   static ENTITY_HOSTILE_BIG_FALL: Sound;
   static ENTITY_HOSTILE_DEATH: Sound;
   static ENTITY_HOSTILE_HURT: Sound;
   static ENTITY_HOSTILE_SMALL_FALL: Sound;
   static ENTITY_HOSTILE_SPLASH: Sound;
   static ENTITY_HOSTILE_SWIM: Sound;
   static ENTITY_HUSK_AMBIENT: Sound;
   static ENTITY_HUSK_CONVERTED_TO_ZOMBIE: Sound;
   static ENTITY_HUSK_DEATH: Sound;
   static ENTITY_HUSK_HURT: Sound;
   static ENTITY_HUSK_STEP: Sound;
   static ENTITY_ILLUSIONER_AMBIENT: Sound;
   static ENTITY_ILLUSIONER_CAST_SPELL: Sound;
   static ENTITY_ILLUSIONER_DEATH: Sound;
   static ENTITY_ILLUSIONER_HURT: Sound;
   static ENTITY_ILLUSIONER_MIRROR_MOVE: Sound;
   static ENTITY_ILLUSIONER_PREPARE_BLINDNESS: Sound;
   static ENTITY_ILLUSIONER_PREPARE_MIRROR: Sound;
   static ENTITY_IRON_GOLEM_ATTACK: Sound;
   static ENTITY_IRON_GOLEM_DAMAGE: Sound;
   static ENTITY_IRON_GOLEM_DEATH: Sound;
   static ENTITY_IRON_GOLEM_HURT: Sound;
   static ENTITY_IRON_GOLEM_REPAIR: Sound;
   static ENTITY_IRON_GOLEM_STEP: Sound;
   static ENTITY_ITEM_BREAK: Sound;
   static ENTITY_ITEM_FRAME_ADD_ITEM: Sound;
   static ENTITY_ITEM_FRAME_BREAK: Sound;
   static ENTITY_ITEM_FRAME_PLACE: Sound;
   static ENTITY_ITEM_FRAME_REMOVE_ITEM: Sound;
   static ENTITY_ITEM_FRAME_ROTATE_ITEM: Sound;
   static ENTITY_ITEM_PICKUP: Sound;
   static ENTITY_LEASH_KNOT_BREAK: Sound;
   static ENTITY_LEASH_KNOT_PLACE: Sound;
   static ENTITY_LIGHTNING_BOLT_IMPACT: Sound;
   static ENTITY_LIGHTNING_BOLT_THUNDER: Sound;
   static ENTITY_LINGERING_POTION_THROW: Sound;
   static ENTITY_LLAMA_AMBIENT: Sound;
   static ENTITY_LLAMA_ANGRY: Sound;
   static ENTITY_LLAMA_CHEST: Sound;
   static ENTITY_LLAMA_DEATH: Sound;
   static ENTITY_LLAMA_EAT: Sound;
   static ENTITY_LLAMA_HURT: Sound;
   static ENTITY_LLAMA_SPIT: Sound;
   static ENTITY_LLAMA_STEP: Sound;
   static ENTITY_LLAMA_SWAG: Sound;
   static ENTITY_MAGMA_CUBE_DEATH: Sound;
   static ENTITY_MAGMA_CUBE_DEATH_SMALL: Sound;
   static ENTITY_MAGMA_CUBE_HURT: Sound;
   static ENTITY_MAGMA_CUBE_HURT_SMALL: Sound;
   static ENTITY_MAGMA_CUBE_JUMP: Sound;
   static ENTITY_MAGMA_CUBE_SQUISH: Sound;
   static ENTITY_MAGMA_CUBE_SQUISH_SMALL: Sound;
   static ENTITY_MINECART_INSIDE: Sound;
   static ENTITY_MINECART_RIDING: Sound;
   static ENTITY_MOOSHROOM_CONVERT: Sound;
   static ENTITY_MOOSHROOM_EAT: Sound;
   static ENTITY_MOOSHROOM_MILK: Sound;
   static ENTITY_MOOSHROOM_SHEAR: Sound;
   static ENTITY_MOOSHROOM_SUSPICIOUS_MILK: Sound;
   static ENTITY_MULE_AMBIENT: Sound;
   static ENTITY_MULE_ANGRY: Sound;
   static ENTITY_MULE_CHEST: Sound;
   static ENTITY_MULE_DEATH: Sound;
   static ENTITY_MULE_EAT: Sound;
   static ENTITY_MULE_HURT: Sound;
   static ENTITY_OCELOT_AMBIENT: Sound;
   static ENTITY_OCELOT_DEATH: Sound;
   static ENTITY_OCELOT_HURT: Sound;
   static ENTITY_PAINTING_BREAK: Sound;
   static ENTITY_PAINTING_PLACE: Sound;
   static ENTITY_PANDA_AGGRESSIVE_AMBIENT: Sound;
   static ENTITY_PANDA_AMBIENT: Sound;
   static ENTITY_PANDA_BITE: Sound;
   static ENTITY_PANDA_CANT_BREED: Sound;
   static ENTITY_PANDA_DEATH: Sound;
   static ENTITY_PANDA_EAT: Sound;
   static ENTITY_PANDA_HURT: Sound;
   static ENTITY_PANDA_PRE_SNEEZE: Sound;
   static ENTITY_PANDA_SNEEZE: Sound;
   static ENTITY_PANDA_STEP: Sound;
   static ENTITY_PANDA_WORRIED_AMBIENT: Sound;
   static ENTITY_PARROT_AMBIENT: Sound;
   static ENTITY_PARROT_DEATH: Sound;
   static ENTITY_PARROT_EAT: Sound;
   static ENTITY_PARROT_FLY: Sound;
   static ENTITY_PARROT_HURT: Sound;
   static ENTITY_PARROT_IMITATE_BLAZE: Sound;
   static ENTITY_PARROT_IMITATE_CREEPER: Sound;
   static ENTITY_PARROT_IMITATE_DROWNED: Sound;
   static ENTITY_PARROT_IMITATE_ELDER_GUARDIAN: Sound;
   static ENTITY_PARROT_IMITATE_ENDER_DRAGON: Sound;
   static ENTITY_PARROT_IMITATE_ENDERMITE: Sound;
   static ENTITY_PARROT_IMITATE_EVOKER: Sound;
   static ENTITY_PARROT_IMITATE_GHAST: Sound;
   static ENTITY_PARROT_IMITATE_GUARDIAN: Sound;
   static ENTITY_PARROT_IMITATE_HOGLIN: Sound;
   static ENTITY_PARROT_IMITATE_HUSK: Sound;
   static ENTITY_PARROT_IMITATE_ILLUSIONER: Sound;
   static ENTITY_PARROT_IMITATE_MAGMA_CUBE: Sound;
   static ENTITY_PARROT_IMITATE_PHANTOM: Sound;
   static ENTITY_PARROT_IMITATE_PIGLIN: Sound;
   static ENTITY_PARROT_IMITATE_PILLAGER: Sound;
   static ENTITY_PARROT_IMITATE_RAVAGER: Sound;
   static ENTITY_PARROT_IMITATE_SHULKER: Sound;
   static ENTITY_PARROT_IMITATE_SILVERFISH: Sound;
   static ENTITY_PARROT_IMITATE_SKELETON: Sound;
   static ENTITY_PARROT_IMITATE_SLIME: Sound;
   static ENTITY_PARROT_IMITATE_SPIDER: Sound;
   static ENTITY_PARROT_IMITATE_STRAY: Sound;
   static ENTITY_PARROT_IMITATE_VEX: Sound;
   static ENTITY_PARROT_IMITATE_VINDICATOR: Sound;
   static ENTITY_PARROT_IMITATE_WITCH: Sound;
   static ENTITY_PARROT_IMITATE_WITHER: Sound;
   static ENTITY_PARROT_IMITATE_WITHER_SKELETON: Sound;
   static ENTITY_PARROT_IMITATE_ZOGLIN: Sound;
   static ENTITY_PARROT_IMITATE_ZOMBIE: Sound;
   static ENTITY_PARROT_IMITATE_ZOMBIE_VILLAGER: Sound;
   static ENTITY_PARROT_STEP: Sound;
   static ENTITY_PHANTOM_AMBIENT: Sound;
   static ENTITY_PHANTOM_BITE: Sound;
   static ENTITY_PHANTOM_DEATH: Sound;
   static ENTITY_PHANTOM_FLAP: Sound;
   static ENTITY_PHANTOM_HURT: Sound;
   static ENTITY_PHANTOM_SWOOP: Sound;
   static ENTITY_PIG_AMBIENT: Sound;
   static ENTITY_PIG_DEATH: Sound;
   static ENTITY_PIG_HURT: Sound;
   static ENTITY_PIG_SADDLE: Sound;
   static ENTITY_PIG_STEP: Sound;
   static ENTITY_PIGLIN_ADMIRING_ITEM: Sound;
   static ENTITY_PIGLIN_AMBIENT: Sound;
   static ENTITY_PIGLIN_ANGRY: Sound;
   static ENTITY_PIGLIN_CELEBRATE: Sound;
   static ENTITY_PIGLIN_CONVERTED_TO_ZOMBIFIED: Sound;
   static ENTITY_PIGLIN_DEATH: Sound;
   static ENTITY_PIGLIN_HURT: Sound;
   static ENTITY_PIGLIN_JEALOUS: Sound;
   static ENTITY_PIGLIN_RETREAT: Sound;
   static ENTITY_PIGLIN_STEP: Sound;
   static ENTITY_PILLAGER_AMBIENT: Sound;
   static ENTITY_PILLAGER_CELEBRATE: Sound;
   static ENTITY_PILLAGER_DEATH: Sound;
   static ENTITY_PILLAGER_HURT: Sound;
   static ENTITY_PLAYER_ATTACK_CRIT: Sound;
   static ENTITY_PLAYER_ATTACK_KNOCKBACK: Sound;
   static ENTITY_PLAYER_ATTACK_NODAMAGE: Sound;
   static ENTITY_PLAYER_ATTACK_STRONG: Sound;
   static ENTITY_PLAYER_ATTACK_SWEEP: Sound;
   static ENTITY_PLAYER_ATTACK_WEAK: Sound;
   static ENTITY_PLAYER_BIG_FALL: Sound;
   static ENTITY_PLAYER_BREATH: Sound;
   static ENTITY_PLAYER_BURP: Sound;
   static ENTITY_PLAYER_DEATH: Sound;
   static ENTITY_PLAYER_HURT: Sound;
   static ENTITY_PLAYER_HURT_DROWN: Sound;
   static ENTITY_PLAYER_HURT_ON_FIRE: Sound;
   static ENTITY_PLAYER_HURT_SWEET_BERRY_BUSH: Sound;
   static ENTITY_PLAYER_LEVELUP: Sound;
   static ENTITY_PLAYER_SMALL_FALL: Sound;
   static ENTITY_PLAYER_SPLASH: Sound;
   static ENTITY_PLAYER_SPLASH_HIGH_SPEED: Sound;
   static ENTITY_PLAYER_SWIM: Sound;
   static ENTITY_POLAR_BEAR_AMBIENT: Sound;
   static ENTITY_POLAR_BEAR_AMBIENT_BABY: Sound;
   static ENTITY_POLAR_BEAR_DEATH: Sound;
   static ENTITY_POLAR_BEAR_HURT: Sound;
   static ENTITY_POLAR_BEAR_STEP: Sound;
   static ENTITY_POLAR_BEAR_WARNING: Sound;
   static ENTITY_PUFFER_FISH_AMBIENT: Sound;
   static ENTITY_PUFFER_FISH_BLOW_OUT: Sound;
   static ENTITY_PUFFER_FISH_BLOW_UP: Sound;
   static ENTITY_PUFFER_FISH_DEATH: Sound;
   static ENTITY_PUFFER_FISH_FLOP: Sound;
   static ENTITY_PUFFER_FISH_HURT: Sound;
   static ENTITY_PUFFER_FISH_STING: Sound;
   static ENTITY_RABBIT_AMBIENT: Sound;
   static ENTITY_RABBIT_ATTACK: Sound;
   static ENTITY_RABBIT_DEATH: Sound;
   static ENTITY_RABBIT_HURT: Sound;
   static ENTITY_RABBIT_JUMP: Sound;
   static ENTITY_RAVAGER_AMBIENT: Sound;
   static ENTITY_RAVAGER_ATTACK: Sound;
   static ENTITY_RAVAGER_CELEBRATE: Sound;
   static ENTITY_RAVAGER_DEATH: Sound;
   static ENTITY_RAVAGER_HURT: Sound;
   static ENTITY_RAVAGER_ROAR: Sound;
   static ENTITY_RAVAGER_STEP: Sound;
   static ENTITY_RAVAGER_STUNNED: Sound;
   static ENTITY_SALMON_AMBIENT: Sound;
   static ENTITY_SALMON_DEATH: Sound;
   static ENTITY_SALMON_FLOP: Sound;
   static ENTITY_SALMON_HURT: Sound;
   static ENTITY_SHEEP_AMBIENT: Sound;
   static ENTITY_SHEEP_DEATH: Sound;
   static ENTITY_SHEEP_HURT: Sound;
   static ENTITY_SHEEP_SHEAR: Sound;
   static ENTITY_SHEEP_STEP: Sound;
   static ENTITY_SHULKER_AMBIENT: Sound;
   static ENTITY_SHULKER_BULLET_HIT: Sound;
   static ENTITY_SHULKER_BULLET_HURT: Sound;
   static ENTITY_SHULKER_CLOSE: Sound;
   static ENTITY_SHULKER_DEATH: Sound;
   static ENTITY_SHULKER_HURT: Sound;
   static ENTITY_SHULKER_HURT_CLOSED: Sound;
   static ENTITY_SHULKER_OPEN: Sound;
   static ENTITY_SHULKER_SHOOT: Sound;
   static ENTITY_SHULKER_TELEPORT: Sound;
   static ENTITY_SILVERFISH_AMBIENT: Sound;
   static ENTITY_SILVERFISH_DEATH: Sound;
   static ENTITY_SILVERFISH_HURT: Sound;
   static ENTITY_SILVERFISH_STEP: Sound;
   static ENTITY_SKELETON_AMBIENT: Sound;
   static ENTITY_SKELETON_DEATH: Sound;
   static ENTITY_SKELETON_HORSE_AMBIENT: Sound;
   static ENTITY_SKELETON_HORSE_AMBIENT_WATER: Sound;
   static ENTITY_SKELETON_HORSE_DEATH: Sound;
   static ENTITY_SKELETON_HORSE_GALLOP_WATER: Sound;
   static ENTITY_SKELETON_HORSE_HURT: Sound;
   static ENTITY_SKELETON_HORSE_JUMP_WATER: Sound;
   static ENTITY_SKELETON_HORSE_STEP_WATER: Sound;
   static ENTITY_SKELETON_HORSE_SWIM: Sound;
   static ENTITY_SKELETON_HURT: Sound;
   static ENTITY_SKELETON_SHOOT: Sound;
   static ENTITY_SKELETON_STEP: Sound;
   static ENTITY_SLIME_ATTACK: Sound;
   static ENTITY_SLIME_DEATH: Sound;
   static ENTITY_SLIME_DEATH_SMALL: Sound;
   static ENTITY_SLIME_HURT: Sound;
   static ENTITY_SLIME_HURT_SMALL: Sound;
   static ENTITY_SLIME_JUMP: Sound;
   static ENTITY_SLIME_JUMP_SMALL: Sound;
   static ENTITY_SLIME_SQUISH: Sound;
   static ENTITY_SLIME_SQUISH_SMALL: Sound;
   static ENTITY_SNOW_GOLEM_AMBIENT: Sound;
   static ENTITY_SNOW_GOLEM_DEATH: Sound;
   static ENTITY_SNOW_GOLEM_HURT: Sound;
   static ENTITY_SNOW_GOLEM_SHEAR: Sound;
   static ENTITY_SNOW_GOLEM_SHOOT: Sound;
   static ENTITY_SNOWBALL_THROW: Sound;
   static ENTITY_SPIDER_AMBIENT: Sound;
   static ENTITY_SPIDER_DEATH: Sound;
   static ENTITY_SPIDER_HURT: Sound;
   static ENTITY_SPIDER_STEP: Sound;
   static ENTITY_SPLASH_POTION_BREAK: Sound;
   static ENTITY_SPLASH_POTION_THROW: Sound;
   static ENTITY_SQUID_AMBIENT: Sound;
   static ENTITY_SQUID_DEATH: Sound;
   static ENTITY_SQUID_HURT: Sound;
   static ENTITY_SQUID_SQUIRT: Sound;
   static ENTITY_STRAY_AMBIENT: Sound;
   static ENTITY_STRAY_DEATH: Sound;
   static ENTITY_STRAY_HURT: Sound;
   static ENTITY_STRAY_STEP: Sound;
   static ENTITY_STRIDER_AMBIENT: Sound;
   static ENTITY_STRIDER_DEATH: Sound;
   static ENTITY_STRIDER_EAT: Sound;
   static ENTITY_STRIDER_HAPPY: Sound;
   static ENTITY_STRIDER_HURT: Sound;
   static ENTITY_STRIDER_RETREAT: Sound;
   static ENTITY_STRIDER_SADDLE: Sound;
   static ENTITY_STRIDER_STEP: Sound;
   static ENTITY_STRIDER_STEP_LAVA: Sound;
   static ENTITY_TNT_PRIMED: Sound;
   static ENTITY_TROPICAL_FISH_AMBIENT: Sound;
   static ENTITY_TROPICAL_FISH_DEATH: Sound;
   static ENTITY_TROPICAL_FISH_FLOP: Sound;
   static ENTITY_TROPICAL_FISH_HURT: Sound;
   static ENTITY_TURTLE_AMBIENT_LAND: Sound;
   static ENTITY_TURTLE_DEATH: Sound;
   static ENTITY_TURTLE_DEATH_BABY: Sound;
   static ENTITY_TURTLE_EGG_BREAK: Sound;
   static ENTITY_TURTLE_EGG_CRACK: Sound;
   static ENTITY_TURTLE_EGG_HATCH: Sound;
   static ENTITY_TURTLE_HURT: Sound;
   static ENTITY_TURTLE_HURT_BABY: Sound;
   static ENTITY_TURTLE_LAY_EGG: Sound;
   static ENTITY_TURTLE_SHAMBLE: Sound;
   static ENTITY_TURTLE_SHAMBLE_BABY: Sound;
   static ENTITY_TURTLE_SWIM: Sound;
   static ENTITY_VEX_AMBIENT: Sound;
   static ENTITY_VEX_CHARGE: Sound;
   static ENTITY_VEX_DEATH: Sound;
   static ENTITY_VEX_HURT: Sound;
   static ENTITY_VILLAGER_AMBIENT: Sound;
   static ENTITY_VILLAGER_CELEBRATE: Sound;
   static ENTITY_VILLAGER_DEATH: Sound;
   static ENTITY_VILLAGER_HURT: Sound;
   static ENTITY_VILLAGER_NO: Sound;
   static ENTITY_VILLAGER_TRADE: Sound;
   static ENTITY_VILLAGER_WORK_ARMORER: Sound;
   static ENTITY_VILLAGER_WORK_BUTCHER: Sound;
   static ENTITY_VILLAGER_WORK_CARTOGRAPHER: Sound;
   static ENTITY_VILLAGER_WORK_CLERIC: Sound;
   static ENTITY_VILLAGER_WORK_FARMER: Sound;
   static ENTITY_VILLAGER_WORK_FISHERMAN: Sound;
   static ENTITY_VILLAGER_WORK_FLETCHER: Sound;
   static ENTITY_VILLAGER_WORK_LEATHERWORKER: Sound;
   static ENTITY_VILLAGER_WORK_LIBRARIAN: Sound;
   static ENTITY_VILLAGER_WORK_MASON: Sound;
   static ENTITY_VILLAGER_WORK_SHEPHERD: Sound;
   static ENTITY_VILLAGER_WORK_TOOLSMITH: Sound;
   static ENTITY_VILLAGER_WORK_WEAPONSMITH: Sound;
   static ENTITY_VILLAGER_YES: Sound;
   static ENTITY_VINDICATOR_AMBIENT: Sound;
   static ENTITY_VINDICATOR_CELEBRATE: Sound;
   static ENTITY_VINDICATOR_DEATH: Sound;
   static ENTITY_VINDICATOR_HURT: Sound;
   static ENTITY_WANDERING_TRADER_AMBIENT: Sound;
   static ENTITY_WANDERING_TRADER_DEATH: Sound;
   static ENTITY_WANDERING_TRADER_DISAPPEARED: Sound;
   static ENTITY_WANDERING_TRADER_DRINK_MILK: Sound;
   static ENTITY_WANDERING_TRADER_DRINK_POTION: Sound;
   static ENTITY_WANDERING_TRADER_HURT: Sound;
   static ENTITY_WANDERING_TRADER_NO: Sound;
   static ENTITY_WANDERING_TRADER_REAPPEARED: Sound;
   static ENTITY_WANDERING_TRADER_TRADE: Sound;
   static ENTITY_WANDERING_TRADER_YES: Sound;
   static ENTITY_WITCH_AMBIENT: Sound;
   static ENTITY_WITCH_CELEBRATE: Sound;
   static ENTITY_WITCH_DEATH: Sound;
   static ENTITY_WITCH_DRINK: Sound;
   static ENTITY_WITCH_HURT: Sound;
   static ENTITY_WITCH_THROW: Sound;
   static ENTITY_WITHER_AMBIENT: Sound;
   static ENTITY_WITHER_BREAK_BLOCK: Sound;
   static ENTITY_WITHER_DEATH: Sound;
   static ENTITY_WITHER_HURT: Sound;
   static ENTITY_WITHER_SHOOT: Sound;
   static ENTITY_WITHER_SKELETON_AMBIENT: Sound;
   static ENTITY_WITHER_SKELETON_DEATH: Sound;
   static ENTITY_WITHER_SKELETON_HURT: Sound;
   static ENTITY_WITHER_SKELETON_STEP: Sound;
   static ENTITY_WITHER_SPAWN: Sound;
   static ENTITY_WOLF_AMBIENT: Sound;
   static ENTITY_WOLF_DEATH: Sound;
   static ENTITY_WOLF_GROWL: Sound;
   static ENTITY_WOLF_HOWL: Sound;
   static ENTITY_WOLF_HURT: Sound;
   static ENTITY_WOLF_PANT: Sound;
   static ENTITY_WOLF_SHAKE: Sound;
   static ENTITY_WOLF_STEP: Sound;
   static ENTITY_WOLF_WHINE: Sound;
   static ENTITY_ZOGLIN_AMBIENT: Sound;
   static ENTITY_ZOGLIN_ANGRY: Sound;
   static ENTITY_ZOGLIN_ATTACK: Sound;
   static ENTITY_ZOGLIN_DEATH: Sound;
   static ENTITY_ZOGLIN_HURT: Sound;
   static ENTITY_ZOGLIN_STEP: Sound;
   static ENTITY_ZOMBIE_AMBIENT: Sound;
   static ENTITY_ZOMBIE_ATTACK_IRON_DOOR: Sound;
   static ENTITY_ZOMBIE_ATTACK_WOODEN_DOOR: Sound;
   static ENTITY_ZOMBIE_BREAK_WOODEN_DOOR: Sound;
   static ENTITY_ZOMBIE_CONVERTED_TO_DROWNED: Sound;
   static ENTITY_ZOMBIE_DEATH: Sound;
   static ENTITY_ZOMBIE_DESTROY_EGG: Sound;
   static ENTITY_ZOMBIE_HORSE_AMBIENT: Sound;
   static ENTITY_ZOMBIE_HORSE_DEATH: Sound;
   static ENTITY_ZOMBIE_HORSE_HURT: Sound;
   static ENTITY_ZOMBIE_HURT: Sound;
   static ENTITY_ZOMBIE_INFECT: Sound;
   static ENTITY_ZOMBIE_STEP: Sound;
   static ENTITY_ZOMBIE_VILLAGER_AMBIENT: Sound;
   static ENTITY_ZOMBIE_VILLAGER_CONVERTED: Sound;
   static ENTITY_ZOMBIE_VILLAGER_CURE: Sound;
   static ENTITY_ZOMBIE_VILLAGER_DEATH: Sound;
   static ENTITY_ZOMBIE_VILLAGER_HURT: Sound;
   static ENTITY_ZOMBIE_VILLAGER_STEP: Sound;
   static ENTITY_ZOMBIFIED_PIGLIN_AMBIENT: Sound;
   static ENTITY_ZOMBIFIED_PIGLIN_ANGRY: Sound;
   static ENTITY_ZOMBIFIED_PIGLIN_DEATH: Sound;
   static ENTITY_ZOMBIFIED_PIGLIN_HURT: Sound;
   static EVENT_RAID_HORN: Sound;
   static ITEM_ARMOR_EQUIP_CHAIN: Sound;
   static ITEM_ARMOR_EQUIP_DIAMOND: Sound;
   static ITEM_ARMOR_EQUIP_ELYTRA: Sound;
   static ITEM_ARMOR_EQUIP_GENERIC: Sound;
   static ITEM_ARMOR_EQUIP_GOLD: Sound;
   static ITEM_ARMOR_EQUIP_IRON: Sound;
   static ITEM_ARMOR_EQUIP_LEATHER: Sound;
   static ITEM_ARMOR_EQUIP_NETHERITE: Sound;
   static ITEM_ARMOR_EQUIP_TURTLE: Sound;
   static ITEM_AXE_STRIP: Sound;
   static ITEM_BOOK_PAGE_TURN: Sound;
   static ITEM_BOOK_PUT: Sound;
   static ITEM_BOTTLE_EMPTY: Sound;
   static ITEM_BOTTLE_FILL: Sound;
   static ITEM_BOTTLE_FILL_DRAGONBREATH: Sound;
   static ITEM_BUCKET_EMPTY: Sound;
   static ITEM_BUCKET_EMPTY_FISH: Sound;
   static ITEM_BUCKET_EMPTY_LAVA: Sound;
   static ITEM_BUCKET_FILL: Sound;
   static ITEM_BUCKET_FILL_FISH: Sound;
   static ITEM_BUCKET_FILL_LAVA: Sound;
   static ITEM_CHORUS_FRUIT_TELEPORT: Sound;
   static ITEM_CROP_PLANT: Sound;
   static ITEM_CROSSBOW_HIT: Sound;
   static ITEM_CROSSBOW_LOADING_END: Sound;
   static ITEM_CROSSBOW_LOADING_MIDDLE: Sound;
   static ITEM_CROSSBOW_LOADING_START: Sound;
   static ITEM_CROSSBOW_QUICK_CHARGE_1: Sound;
   static ITEM_CROSSBOW_QUICK_CHARGE_2: Sound;
   static ITEM_CROSSBOW_QUICK_CHARGE_3: Sound;
   static ITEM_CROSSBOW_SHOOT: Sound;
   static ITEM_ELYTRA_FLYING: Sound;
   static ITEM_FIRECHARGE_USE: Sound;
   static ITEM_FLINTANDSTEEL_USE: Sound;
   static ITEM_HOE_TILL: Sound;
   static ITEM_HONEY_BOTTLE_DRINK: Sound;
   static ITEM_LODESTONE_COMPASS_LOCK: Sound;
   static ITEM_NETHER_WART_PLANT: Sound;
   static ITEM_SHIELD_BLOCK: Sound;
   static ITEM_SHIELD_BREAK: Sound;
   static ITEM_SHOVEL_FLATTEN: Sound;
   static ITEM_SWEET_BERRIES_PICK_FROM_BUSH: Sound;
   static ITEM_TOTEM_USE: Sound;
   static ITEM_TRIDENT_HIT: Sound;
   static ITEM_TRIDENT_HIT_GROUND: Sound;
   static ITEM_TRIDENT_RETURN: Sound;
   static ITEM_TRIDENT_RIPTIDE_1: Sound;
   static ITEM_TRIDENT_RIPTIDE_2: Sound;
   static ITEM_TRIDENT_RIPTIDE_3: Sound;
   static ITEM_TRIDENT_THROW: Sound;
   static ITEM_TRIDENT_THUNDER: Sound;
   static MUSIC_CREATIVE: Sound;
   static MUSIC_CREDITS: Sound;
   static MUSIC_DISC_11: Sound;
   static MUSIC_DISC_13: Sound;
   static MUSIC_DISC_BLOCKS: Sound;
   static MUSIC_DISC_CAT: Sound;
   static MUSIC_DISC_CHIRP: Sound;
   static MUSIC_DISC_FAR: Sound;
   static MUSIC_DISC_MALL: Sound;
   static MUSIC_DISC_MELLOHI: Sound;
   static MUSIC_DISC_PIGSTEP: Sound;
   static MUSIC_DISC_STAL: Sound;
   static MUSIC_DISC_STRAD: Sound;
   static MUSIC_DISC_WAIT: Sound;
   static MUSIC_DISC_WARD: Sound;
   static MUSIC_DRAGON: Sound;
   static MUSIC_END: Sound;
   static MUSIC_GAME: Sound;
   static MUSIC_MENU: Sound;
   static MUSIC_NETHER_BASALT_DELTAS: Sound;
   static MUSIC_NETHER_CRIMSON_FOREST: Sound;
   static MUSIC_NETHER_NETHER_WASTES: Sound;
   static MUSIC_NETHER_SOUL_SAND_VALLEY: Sound;
   static MUSIC_NETHER_WARPED_FOREST: Sound;
   static MUSIC_UNDER_WATER: Sound;
   static PARTICLE_SOUL_ESCAPE: Sound;
   static UI_BUTTON_CLICK: Sound;
   static UI_CARTOGRAPHY_TABLE_TAKE_RESULT: Sound;
   static UI_LOOM_SELECT_PATTERN: Sound;
   static UI_LOOM_TAKE_RESULT: Sound;
   static UI_STONECUTTER_SELECT_RECIPE: Sound;
   static UI_STONECUTTER_TAKE_RESULT: Sound;
   static UI_TOAST_CHALLENGE_COMPLETE: Sound;
   static UI_TOAST_IN: Sound;
   static UI_TOAST_OUT: Sound;
   static WEATHER_RAIN: Sound;
   static WEATHER_RAIN_ABOVE: Sound;
   static valueOf (name: string): Sound;
   static values (): Sound[];
}
export class SoundCategory {
   static AMBIENT: SoundCategory;
   static BLOCKS: SoundCategory;
   static HOSTILE: SoundCategory;
   static MASTER: SoundCategory;
   static MUSIC: SoundCategory;
   static NEUTRAL: SoundCategory;
   static PLAYERS: SoundCategory;
   static RECORDS: SoundCategory;
   static VOICE: SoundCategory;
   static WEATHER: SoundCategory;
   static valueOf (name: string): SoundCategory;
   static values (): SoundCategory[];
}
export class SpawnChangeEvent extends WorldEvent {
   constructor (world: World, previous_location: Location);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getPreviousLocation (): Location;
}
export class SpawnEgg extends MaterialData {
   constructor ();
   constructor (data: number);
   constructor (type: EntityType);
   constructor (type: Material, data: number);
   clone (): SpawnEgg;
   getSpawnedType (): EntityType;
   setSpawnedType (type: EntityType): void;
   toString (): string;
}
export interface SpawnEggMeta extends ItemMeta {
   clone(): SpawnEggMeta;
   getSpawnedType(): EntityType;
   setSpawnedType(type: EntityType): void;
}
export interface SpawnerMinecart extends Minecart {}
export class SpawnerSpawnEvent extends EntitySpawnEvent {
   constructor (spawnee: Entity, spawner: CreatureSpawner);
   getSpawner (): CreatureSpawner;
}
export interface SpectralArrow extends AbstractArrow {
   getGlowingTicks(): number;
   setGlowingTicks(duration: number): void;
}
export interface Spellcaster extends Illager {
   getSpell(): Spellcaster$Spell;
   setSpell(spell: Spellcaster$Spell): void;
}
export class Spellcaster$Spell {
   static BLINDNESS: Spellcaster$Spell;
   static DISAPPEAR: Spellcaster$Spell;
   static FANGS: Spellcaster$Spell;
   static NONE: Spellcaster$Spell;
   static SUMMON_VEX: Spellcaster$Spell;
   static WOLOLO: Spellcaster$Spell;
   static valueOf (name: string): Spellcaster$Spell;
   static values (): Spellcaster$Spell[];
}
export interface Spider extends Monster {}
export interface SplashPotion extends ThrownPotion {}
export class SpongeAbsorbEvent extends BlockEvent implements Cancellable {
   constructor (block: Block, waterblocks: List<BlockState>);
   getBlocks (): List<BlockState>;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export interface Squid extends WaterMob {}
export interface Stairs extends Bisected, Directional, Waterlogged {
   getShape(): Stairs$Shape;
   setShape(shape: Stairs$Shape): void;
}
export class Stairs extends MaterialData {
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Stairs;
   getAscendingDirection (): BlockFace;
   getDescendingDirection (): BlockFace;
   getFacing (): BlockFace;
   isInverted (): boolean;
   setFacingDirection (face: BlockFace): void;
   setInverted (inv: boolean): void;
   toString (): string;
}
export class Stairs$Shape {
   static INNER_LEFT: Stairs$Shape;
   static INNER_RIGHT: Stairs$Shape;
   static OUTER_LEFT: Stairs$Shape;
   static OUTER_RIGHT: Stairs$Shape;
   static STRAIGHT: Stairs$Shape;
   static valueOf (name: string): Stairs$Shape;
   static values (): Stairs$Shape[];
}
export class StandardMessenger extends JavaObject implements Messenger {
   constructor ();
   dispatchIncomingMessage (source: Player, channel: string, message: byte[]): void;
   getIncomingChannelRegistrations (channel: string): Set<PluginMessageListenerRegistration>;
   getIncomingChannelRegistrations (plugin: Plugin): Set<PluginMessageListenerRegistration>;
   getIncomingChannelRegistrations (plugin: Plugin, channel: string): Set<PluginMessageListenerRegistration>;
   getIncomingChannels (): Set<string>;
   getIncomingChannels (plugin: Plugin): Set<string>;
   getOutgoingChannels (): Set<string>;
   getOutgoingChannels (plugin: Plugin): Set<string>;
   isIncomingChannelRegistered (plugin: Plugin, channel: string): boolean;
   isOutgoingChannelRegistered (plugin: Plugin, channel: string): boolean;
   isRegistrationValid (registration: PluginMessageListenerRegistration): boolean;
   isReservedChannel (channel: string): boolean;
   registerIncomingPluginChannel (
      plugin: Plugin,
      channel: string,
      listener: PluginMessageListener
   ): PluginMessageListenerRegistration;
   registerOutgoingPluginChannel (plugin: Plugin, channel: string): void;
   unregisterIncomingPluginChannel (plugin: Plugin): void;
   unregisterIncomingPluginChannel (plugin: Plugin, channel: string): void;
   unregisterIncomingPluginChannel (plugin: Plugin, channel: string, listener: PluginMessageListener): void;
   unregisterOutgoingPluginChannel (plugin: Plugin): void;
   unregisterOutgoingPluginChannel (plugin: Plugin, channel: string): void;
   static validateAndCorrectChannel (channel: string): string;
   static validateChannel (channel: string): void;
   static validatePluginMessage (messenger: Messenger, source: Plugin, channel: string, message: byte[]): void;
}
export class StaticMethodHandleEventExecutor extends JavaObject implements EventExecutor {
   constructor (event_class: Class<Event>, m: Method);
   execute (listener: Listener, event: Event): void;
}
export class Statistic {
   static ANIMALS_BRED: Statistic;
   static ARMOR_CLEANED: Statistic;
   static AVIATE_ONE_CM: Statistic;
   static BANNER_CLEANED: Statistic;
   static BEACON_INTERACTION: Statistic;
   static BELL_RING: Statistic;
   static BOAT_ONE_CM: Statistic;
   static BREAK_ITEM: Statistic;
   static BREWINGSTAND_INTERACTION: Statistic;
   static CAKE_SLICES_EATEN: Statistic;
   static CAULDRON_FILLED: Statistic;
   static CAULDRON_USED: Statistic;
   static CHEST_OPENED: Statistic;
   static CLEAN_SHULKER_BOX: Statistic;
   static CLIMB_ONE_CM: Statistic;
   static CRAFT_ITEM: Statistic;
   static CRAFTING_TABLE_INTERACTION: Statistic;
   static CROUCH_ONE_CM: Statistic;
   static DAMAGE_ABSORBED: Statistic;
   static DAMAGE_BLOCKED_BY_SHIELD: Statistic;
   static DAMAGE_DEALT: Statistic;
   static DAMAGE_DEALT_ABSORBED: Statistic;
   static DAMAGE_DEALT_RESISTED: Statistic;
   static DAMAGE_RESISTED: Statistic;
   static DAMAGE_TAKEN: Statistic;
   static DEATHS: Statistic;
   static DISPENSER_INSPECTED: Statistic;
   static DROP: Statistic;
   static DROP_COUNT: Statistic;
   static DROPPER_INSPECTED: Statistic;
   static ENDERCHEST_OPENED: Statistic;
   static ENTITY_KILLED_BY: Statistic;
   static FALL_ONE_CM: Statistic;
   static FISH_CAUGHT: Statistic;
   static FLOWER_POTTED: Statistic;
   static FLY_ONE_CM: Statistic;
   static FURNACE_INTERACTION: Statistic;
   static HOPPER_INSPECTED: Statistic;
   static HORSE_ONE_CM: Statistic;
   static INTERACT_WITH_ANVIL: Statistic;
   static INTERACT_WITH_BLAST_FURNACE: Statistic;
   static INTERACT_WITH_CAMPFIRE: Statistic;
   static INTERACT_WITH_CARTOGRAPHY_TABLE: Statistic;
   static INTERACT_WITH_GRINDSTONE: Statistic;
   static INTERACT_WITH_LECTERN: Statistic;
   static INTERACT_WITH_LOOM: Statistic;
   static INTERACT_WITH_SMITHING_TABLE: Statistic;
   static INTERACT_WITH_SMOKER: Statistic;
   static INTERACT_WITH_STONECUTTER: Statistic;
   static ITEM_ENCHANTED: Statistic;
   static JUMP: Statistic;
   static KILL_ENTITY: Statistic;
   static LEAVE_GAME: Statistic;
   static MINE_BLOCK: Statistic;
   static MINECART_ONE_CM: Statistic;
   static MOB_KILLS: Statistic;
   static NOTEBLOCK_PLAYED: Statistic;
   static NOTEBLOCK_TUNED: Statistic;
   static OPEN_BARREL: Statistic;
   static PICKUP: Statistic;
   static PIG_ONE_CM: Statistic;
   static PLAY_ONE_MINUTE: Statistic;
   static PLAYER_KILLS: Statistic;
   static RAID_TRIGGER: Statistic;
   static RAID_WIN: Statistic;
   static RECORD_PLAYED: Statistic;
   static SHULKER_BOX_OPENED: Statistic;
   static SLEEP_IN_BED: Statistic;
   static SNEAK_TIME: Statistic;
   static SPRINT_ONE_CM: Statistic;
   static STRIDER_ONE_CM: Statistic;
   static SWIM_ONE_CM: Statistic;
   static TALKED_TO_VILLAGER: Statistic;
   static TARGET_HIT: Statistic;
   static TIME_SINCE_DEATH: Statistic;
   static TIME_SINCE_REST: Statistic;
   static TRADED_WITH_VILLAGER: Statistic;
   static TRAPPED_CHEST_TRIGGERED: Statistic;
   static USE_ITEM: Statistic;
   static WALK_ON_WATER_ONE_CM: Statistic;
   static WALK_ONE_CM: Statistic;
   static WALK_UNDER_WATER_ONE_CM: Statistic;
   getKey (): NamespacedKey;
   getType (): Statistic$Type;
   isBlock (): boolean;
   isSubstatistic (): boolean;
   static valueOf (name: string): Statistic;
   static values (): Statistic[];
}
export class Statistic$Type {
   static BLOCK: Statistic$Type;
   static ENTITY: Statistic$Type;
   static ITEM: Statistic$Type;
   static UNTYPED: Statistic$Type;
   static valueOf (name: string): Statistic$Type;
   static values (): Statistic$Type[];
}
export interface StatusClient extends NetworkClient {
   isLegacy(): boolean;
}
export interface Steerable extends Animals {
   getBoostTicks(): number;
   getCurrentBoostTicks(): number;
   getSteerMaterial(): Material;
   hasSaddle(): boolean;
   setBoostTicks(ticks: number): void;
   setCurrentBoostTicks(ticks: number): void;
   setSaddle(saddled: boolean): void;
}
export class Step extends TexturedMaterial {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Step;
   getTextureIndex (): number;
   getTextures (): List<Material>;
   isInverted (): boolean;
   setInverted (inv: boolean): void;
   setTextureIndex (idx: number): void;
   toString (): string;
}
export interface StonecutterInventory extends Inventory {
   getInputItem(): ItemStack;
   getResult(): ItemStack;
   setInputItem(item_stack: ItemStack): void;
   setResult(item_stack: ItemStack): void;
}
export class StonecuttingRecipe extends JavaObject implements Recipe, Keyed {
   constructor (key: NamespacedKey, result: ItemStack, input: RecipeChoice);
   constructor (key: NamespacedKey, result: ItemStack, source: Material);
   getGroup (): string;
   getInput (): ItemStack;
   getInputChoice (): RecipeChoice;
   getKey (): NamespacedKey;
   getResult (): ItemStack;
   setGroup (group: string): void;
   setInput (input: Material): StonecuttingRecipe;
   setInputChoice (input: RecipeChoice): StonecuttingRecipe;
}
export interface StorageMinecart extends Minecart, InventoryHolder, LootableEntityInventory {}
export interface Stray extends Skeleton {}
export interface Strider extends Steerable, Vehicle {
   isShivering(): boolean;
   setShivering(shivering: boolean): void;
}
export class StriderTemperatureChangeEvent extends EntityEvent {
   constructor (what: Strider, shivering: boolean);
   getEntity (): Strider;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isShivering (): boolean;
}
export class StringPrompt extends JavaObject implements Prompt {
   constructor ();
   blocksForInput (context: ConversationContext): boolean;
}
export class StringUtil extends JavaObject {
   constructor ();
   // static copyPartialMatches<T extends Collection<string>(token:string,originals:Iterable<string>,collection:T):>T;
   static startsWithIgnoreCase (string: string, prefix: string): boolean;
}
export interface Structure extends TileState {
   getAuthor(): string;
   getIntegrity(): number;
   getMetadata(): string;
   getMirror(): Mirror;
   getRelativePosition(): BlockVector;
   getRotation(): StructureRotation;
   getSeed(): number;
   getStructureName(): string;
   getStructureSize(): BlockVector;
   getUsageMode(): UsageMode;
   isBoundingBoxVisible(): boolean;
   isIgnoreEntities(): boolean;
   isShowAir(): boolean;
   setAuthor(author: string): void;
   setAuthor(living_entity: LivingEntity): void;
   setBoundingBoxVisible(show_bounding_box: boolean): void;
   setIgnoreEntities(ignore_entities: boolean): void;
   setIntegrity(integrity: number): void;
   setMetadata(metadata: string): void;
   setMirror(mirror: Mirror): void;
   setRelativePosition(vector: BlockVector): void;
   setRotation(rotation: StructureRotation): void;
   setSeed(seed: number): void;
   setShowAir(show_air: boolean): void;
   setStructureName(name: string): void;
   setStructureSize(vector: BlockVector): void;
   setUsageMode(mode: UsageMode): void;
}
export interface StructureBlock extends BlockData {
   getMode(): StructureBlock$Mode;
   setMode(mode: StructureBlock$Mode): void;
}
export class StructureBlock$Mode {
   static CORNER: StructureBlock$Mode;
   static DATA: StructureBlock$Mode;
   static LOAD: StructureBlock$Mode;
   static SAVE: StructureBlock$Mode;
   static valueOf (name: string): StructureBlock$Mode;
   static values (): StructureBlock$Mode[];
}
export class StructureGrowEvent extends WorldEvent implements Cancellable {
   constructor (location: Location, species: TreeType, bonemeal: boolean, player: Player, blocks: List<BlockState>);
   getBlocks (): List<BlockState>;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getLocation (): Location;
   getPlayer (): Player;
   getSpecies (): TreeType;
   isCancelled (): boolean;
   isFromBonemeal (): boolean;
   setCancelled (cancel: boolean): void;
}
export class StructureRotation {
   static CLOCKWISE_180: StructureRotation;
   static CLOCKWISE_90: StructureRotation;
   static COUNTERCLOCKWISE_90: StructureRotation;
   static NONE: StructureRotation;
   static valueOf (name: string): StructureRotation;
   static values (): StructureRotation[];
}
export class StructureType extends JavaObject {
   equals (other: JavaObject): boolean;
   getMapIcon (): MapCursor$Type;
   getName (): string;
   static getStructureTypes (): Map<string, StructureType>;
   hashCode (): number;
   toString (): string;
}
export interface SuspiciousStewMeta extends ItemMeta {
   addCustomEffect(effect: PotionEffect, overwrite: boolean): boolean;
   clearCustomEffects(): boolean;
   clone(): SuspiciousStewMeta;
   getCustomEffects(): List<PotionEffect>;
   hasCustomEffect(type: PotionEffectType): boolean;
   hasCustomEffects(): boolean;
   removeCustomEffect(type: PotionEffectType): boolean;
}
export interface Switch extends Directional, FaceAttachable, Powerable {
   getFace(): Switch$Face;
   setFace(face: Switch$Face): void;
}
export class Switch$Face {
   static CEILING: Switch$Face;
   static FLOOR: Switch$Face;
   static WALL: Switch$Face;
   static valueOf (name: string): Switch$Face;
   static values (): Switch$Face[];
}
export class TabCompleteEvent extends Event implements Cancellable {
   constructor (sender: CommandSender, buffer: string, completions: List<string>);
   constructor (
      sender: CommandSender,
      buffer: string,
      completions: List<string>,
      is_command: boolean,
      location: Location
   );
   getBuffer (): string;
   getCompletions (): List<string>;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getLocation (): Location;
   getSender (): CommandSender;
   isCancelled (): boolean;
   isCommand (): boolean;
   setCancelled (cancelled: boolean): void;
   setCompletions (completions: List<string>): void;
}
export interface TabCompleter {
   onTabComplete(sender: CommandSender, command: Command, alias: string, args: string[]): List<string>;
}
export interface TabExecutor extends TabCompleter, CommandExecutor {}
export interface Tag<T extends Keyed> extends Keyed {
   getValues(): Set<T>;
   isTagged(item: T): boolean;
}
export interface Tameable extends Animals {
   getOwner(): AnimalTamer;
   getOwnerUniqueId(): UUID;
   isTamed(): boolean;
   setOwner(tamer: AnimalTamer): void;
   setTamed(tame: boolean): void;
}
export class TargetBlockInfo extends JavaObject {
   constructor (block: Block, block_face: BlockFace);
   getBlock (): Block;
   getBlockFace (): BlockFace;
   getRelativeBlock (): Block;
}
export class TargetBlockInfo$FluidMode {
   static ALWAYS: TargetBlockInfo$FluidMode;
   static NEVER: TargetBlockInfo$FluidMode;
   static SOURCE_ONLY: TargetBlockInfo$FluidMode;
   static valueOf (name: string): TargetBlockInfo$FluidMode;
   static values (): TargetBlockInfo$FluidMode[];
}
export class TargetEntityInfo extends JavaObject {
   constructor (entity: Entity, hit_vec: Vector);
   getEntity (): Entity;
   getHitVector (): Vector;
}
export interface Team {
   addEntry(entry: string): void;
   addPlayer(player: OfflinePlayer): void;
   allowFriendlyFire(): boolean;
   canSeeFriendlyInvisibles(): boolean;
   getColor(): ChatColor;
   getDisplayName(): string;
   getEntries(): Set<string>;
   getName(): string;
   getNameTagVisibility(): NameTagVisibility;
   getOption(option: Team$Option): Team$OptionStatus;
   getPlayers(): Set<OfflinePlayer>;
   getPrefix(): string;
   getScoreboard(): Scoreboard;
   getSize(): number;
   getSuffix(): string;
   hasEntry(entry: string): boolean;
   hasPlayer(player: OfflinePlayer): boolean;
   removeEntry(entry: string): boolean;
   removePlayer(player: OfflinePlayer): boolean;
   setAllowFriendlyFire(enabled: boolean): void;
   setCanSeeFriendlyInvisibles(enabled: boolean): void;
   setColor(color: ChatColor): void;
   setDisplayName(display_name: string): void;
   setNameTagVisibility(visibility: NameTagVisibility): void;
   setOption(option: Team$Option, status: Team$OptionStatus): void;
   setPrefix(prefix: string): void;
   setSuffix(suffix: string): void;
   unregister(): void;
}
export class Team$Option {
   static COLLISION_RULE: Team$Option;
   static DEATH_MESSAGE_VISIBILITY: Team$Option;
   static NAME_TAG_VISIBILITY: Team$Option;
   static valueOf (name: string): Team$Option;
   static values (): Team$Option[];
}
export class Team$OptionStatus {
   static ALWAYS: Team$OptionStatus;
   static FOR_OTHER_TEAMS: Team$OptionStatus;
   static FOR_OWN_TEAM: Team$OptionStatus;
   static NEVER: Team$OptionStatus;
   static valueOf (name: string): Team$OptionStatus;
   static values (): Team$OptionStatus[];
}
export interface TechnicalPiston extends Directional {
   getType(): TechnicalPiston$Type;
   setType(type: TechnicalPiston$Type): void;
}
export class TechnicalPiston$Type {
   static NORMAL: TechnicalPiston$Type;
   static STICKY: TechnicalPiston$Type;
   static valueOf (name: string): TechnicalPiston$Type;
   static values (): TechnicalPiston$Type[];
}
export class TexturedMaterial extends MaterialData {
   constructor (m: Material);
   constructor (type: Material, data: number);
   clone (): TexturedMaterial;
   getMaterial (): Material;
   getTextureIndex (): number;
   getTextures (): List<Material>;
   setMaterial (material: Material): void;
   setTextureIndex (idx: number): void;
   toString (): string;
}
export interface ThrowableProjectile extends Projectile {
   getItem(): ItemStack;
   setItem(item: ItemStack): void;
}
export class ThrownEggHatchEvent extends Event {
   constructor (egg: Egg, hatching: boolean, num_hatches: number, hatching_type: EntityType);
   getEgg (): Egg;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getHatchingType (): EntityType;
   getNumHatches (): number;
   isHatching (): boolean;
   setHatching (hatching: boolean): void;
   setHatchingType (hatch_type: EntityType): void;
   setNumHatches (num_hatches: number): void;
}
export interface ThrownExpBottle extends ThrowableProjectile {}
export interface ThrownPotion extends Projectile {
   getEffects(): Collection<PotionEffect>;
   getItem(): ItemStack;
   setItem(item: ItemStack): void;
}
export class ThunderChangeEvent extends WeatherEvent implements Cancellable {
   constructor (world: World, to: boolean);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   toThunderState (): boolean;
}
export interface TileState extends BlockState, PersistentDataHolder {
   getPersistentDataContainer(): PersistentDataContainer;
}
export class TimedEventExecutor extends JavaObject implements EventExecutor {
   constructor (executor: EventExecutor, plugin: Plugin, method: Method, event_class: Class<Event>);
   execute (listener: Listener, event: Event): void;
}
export class TimedRegisteredListener extends RegisteredListener {
   constructor (
      plugin_listener: Listener,
      event_executor: EventExecutor,
      event_priority: EventPriority,
      registered_plugin: Plugin,
      listen_cancelled: boolean
   );
   callEvent (event: Event): void;
   getCount (): number;
   getEventClass (): Class<Event>;
   getTotalTime (): number;
   hasMultiple (): boolean;
   reset (): void;
}
export class TimeSkipEvent extends WorldEvent implements Cancellable {
   constructor (world: World, skip_reason: TimeSkipEvent$SkipReason, skip_amount: number);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getSkipAmount (): number;
   getSkipReason (): TimeSkipEvent$SkipReason;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setSkipAmount (skip_amount: number): void;
}
export class TimeSkipEvent$SkipReason {
   static COMMAND: TimeSkipEvent$SkipReason;
   static CUSTOM: TimeSkipEvent$SkipReason;
   static NIGHT_SKIP: TimeSkipEvent$SkipReason;
   static valueOf (name: string): TimeSkipEvent$SkipReason;
   static values (): TimeSkipEvent$SkipReason[];
}
export interface Timing extends AutoCloseable {
   abort(): void;
   close(): void;
   getTimingHandler(): co$aikar$timings$TimingHandler;
   startTiming(): Timing;
   startTimingIfSync(): Timing;
   stopTiming(): void;
   stopTimingIfSync(): void;
}
export class TimingHistory extends JavaObject {
   static activatedEntityTick (undefined): number;
   static activatedEntityTick (undefined): number;
   static activatedEntityTick (undefined): number;
}
export class Timings extends JavaObject {
   static generateReport (sender: TimingsReportListener): void;
   static generateReport (sender: CommandSender): void;
   static getHistoryInterval (): number;
   static getHistoryLength (): number;
   static isTimingsEnabled (): boolean;
   static isVerboseTimingsEnabled (): boolean;
   static of (plugin: Plugin, name: string): Timing;
   static of (plugin: Plugin, name: string, group_handler: Timing): Timing;
   static ofStart (plugin: Plugin, name: string): Timing;
   static ofStart (plugin: Plugin, name: string, group_handler: Timing): Timing;
   static reset (): void;
   static setHistoryInterval (interval: number): void;
   static setHistoryLength (length: number): void;
   static setTimingsEnabled (enabled: boolean): void;
   static setVerboseTimingsEnabled (enabled: boolean): void;
}
export class TimingsCommand extends BukkitCommand {
   constructor (name: string);
   execute (sender: CommandSender, current_alias: string, args: string[]): boolean;
   tabComplete (sender: CommandSender, alias: string, args: string[]): List<string>;
}
export class TimingsManager extends JavaObject {
   static getCommandTiming (plugin_name: string, command: Command): Timing;
   static getPluginByClassloader (clazz: Class): Plugin;
}
export class TimingsReportListener extends JavaObject implements MessageCommandSender {
   constructor (senders: List<CommandSender>);
   constructor (senders: List<CommandSender>, on_done: Runnable);
   constructor (senders: CommandSender);
   constructor (sender: CommandSender, on_done: Runnable);
   addConsoleIfNeeded (): void;
   done (): void;
   done (url: string): void;
   getTimingsURL (): string;
   sendMessage (message: string): void;
}
export interface TippedArrow extends Arrow {}
export class Title extends JavaObject {
   constructor (title: string);
   constructor (title: string, subtitle: string);
   constructor (title: string, subtitle: string, fade_in: number, stay: number, fade_out: number);
   constructor (title: BaseComponent);
   constructor (title: BaseComponent[]);
   constructor (title: BaseComponent[], subtitle: BaseComponent[]);
   constructor (title: BaseComponent[], subtitle: BaseComponent[], fade_in: number, stay: number, fade_out: number);
   constructor (title: BaseComponent, subtitle: BaseComponent);
   constructor (title: BaseComponent, subtitle: BaseComponent, fade_in: number, stay: number, fade_out: number);
   static builder (): Title$Builder;
   getFadeIn (): number;
   getFadeOut (): number;
   getStay (): number;
   getSubtitle (): BaseComponent[];
   getTitle (): BaseComponent[];
}
export class Title$Builder extends JavaObject {
   constructor ();
   build (): Title;
   fadeIn (fade_in: number): Title$Builder;
   fadeOut (fade_out: number): Title$Builder;
   stay (stay: number): Title$Builder;
   subtitle (subtitle: string): Title$Builder;
   subtitle (subtitle: BaseComponent): Title$Builder;
   subtitle (subtitle: BaseComponent[]): Title$Builder;
   title (title: string): Title$Builder;
   title (title: BaseComponent): Title$Builder;
   title (title: BaseComponent[]): Title$Builder;
}
export interface TNT extends BlockData {
   isUnstable(): boolean;
   setUnstable(unstable: boolean): void;
}
export interface TNTPrimed extends Explosive {
   getFuseTicks(): number;
   getSource(): Entity;
   getSourceLoc(): Location;
   setFuseTicks(fuse_ticks: number): void;
}
export class TNTPrimeEvent extends BlockEvent implements Cancellable {
   constructor (the_block: Block, reason: TNTPrimeEvent$PrimeReason, primer_entity: Entity);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getPrimerEntity (): Entity;
   getReason (): TNTPrimeEvent$PrimeReason;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class TNTPrimeEvent$PrimeReason {
   static EXPLOSION: TNTPrimeEvent$PrimeReason;
   static FIRE: TNTPrimeEvent$PrimeReason;
   static ITEM: TNTPrimeEvent$PrimeReason;
   static PROJECTILE: TNTPrimeEvent$PrimeReason;
   static REDSTONE: TNTPrimeEvent$PrimeReason;
   static valueOf (name: string): TNTPrimeEvent$PrimeReason;
   static values (): TNTPrimeEvent$PrimeReason[];
}
export class Torch extends SimpleAttachableMaterialData {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Torch;
   getAttachedFace (): BlockFace;
   setFacingDirection (face: BlockFace): void;
}
export interface TraderLlama extends Llama {}
export class TradeSelectEvent extends InventoryInteractEvent {
   constructor (transaction: InventoryView, new_index: number);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getIndex (): number;
   getInventory (): MerchantInventory;
   getMerchant (): Merchant;
}
export interface TrapDoor extends Bisected, Directional, Openable, Powerable, Waterlogged {}
export class TrapDoor extends SimpleAttachableMaterialData {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): TrapDoor;
   getAttachedFace (): BlockFace;
   isInverted (): boolean;
   isOpen (): boolean;
   setFacingDirection (face: BlockFace): void;
   setInverted (inv: boolean): void;
   setOpen (is_open: boolean): void;
   toString (): string;
}
export class Tree extends Wood {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   constructor (type: Material, species: TreeSpecies);
   constructor (type: Material, species: TreeSpecies, dir: BlockFace);
   constructor (species: TreeSpecies);
   constructor (species: TreeSpecies, dir: BlockFace);
   clone (): Tree;
   getDirection (): BlockFace;
   setDirection (dir: BlockFace): void;
   toString (): string;
}
export class TreeSpecies {
   static ACACIA: TreeSpecies;
   static BIRCH: TreeSpecies;
   static DARK_OAK: TreeSpecies;
   static GENERIC: TreeSpecies;
   static JUNGLE: TreeSpecies;
   static REDWOOD: TreeSpecies;
   static getByData (data: number): TreeSpecies;
   getData (): number;
   static valueOf (name: string): TreeSpecies;
   static values (): TreeSpecies[];
}
export class TreeType {
   static ACACIA: TreeType;
   static BIG_TREE: TreeType;
   static BIRCH: TreeType;
   static BROWN_MUSHROOM: TreeType;
   static CHORUS_PLANT: TreeType;
   static COCOA_TREE: TreeType;
   static CRIMSON_FUNGUS: TreeType;
   static DARK_OAK: TreeType;
   static JUNGLE: TreeType;
   static JUNGLE_BUSH: TreeType;
   static MEGA_REDWOOD: TreeType;
   static RED_MUSHROOM: TreeType;
   static REDWOOD: TreeType;
   static SMALL_JUNGLE: TreeType;
   static SWAMP: TreeType;
   static TALL_BIRCH: TreeType;
   static TALL_REDWOOD: TreeType;
   static TREE: TreeType;
   static WARPED_FUNGUS: TreeType;
   static valueOf (name: string): TreeType;
   static values (): TreeType[];
}
export interface Trident extends AbstractArrow {}
export interface Tripwire extends Attachable, MultipleFacing, Powerable {
   isDisarmed(): boolean;
   setDisarmed(disarmed: boolean): void;
}
export class Tripwire extends MaterialData {
   constructor ();
   constructor (type: Material, data: number);
   clone (): Tripwire;
   isActivated (): boolean;
   isObjectTriggering (): boolean;
   setActivated (act: boolean): void;
   setObjectTriggering (trig: boolean): void;
   toString (): string;
}
export interface TripwireHook extends Attachable, Directional, Powerable {}
export class TripwireHook extends SimpleAttachableMaterialData {
   constructor ();
   constructor (dir: BlockFace);
   constructor (type: Material, data: number);
   clone (): TripwireHook;
   getAttachedFace (): BlockFace;
   isActivated (): boolean;
   isConnected (): boolean;
   isPowered (): boolean;
   setActivated (act: boolean): void;
   setConnected (connected: boolean): void;
   setFacingDirection (face: BlockFace): void;
   toString (): string;
}
export interface TropicalFish extends Fish {
   getBodyColor(): DyeColor;
   getPattern(): TropicalFish$Pattern;
   getPatternColor(): DyeColor;
   setBodyColor(color: DyeColor): void;
   setPattern(pattern: TropicalFish$Pattern): void;
   setPatternColor(color: DyeColor): void;
}
export class TropicalFish$Pattern {
   static BETTY: TropicalFish$Pattern;
   static BLOCKFISH: TropicalFish$Pattern;
   static BRINELY: TropicalFish$Pattern;
   static CLAYFISH: TropicalFish$Pattern;
   static DASHER: TropicalFish$Pattern;
   static FLOPPER: TropicalFish$Pattern;
   static GLITTER: TropicalFish$Pattern;
   static KOB: TropicalFish$Pattern;
   static SNOOPER: TropicalFish$Pattern;
   static SPOTTY: TropicalFish$Pattern;
   static STRIPEY: TropicalFish$Pattern;
   static SUNSTREAK: TropicalFish$Pattern;
   static valueOf (name: string): TropicalFish$Pattern;
   static values (): TropicalFish$Pattern[];
}
export interface TropicalFishBucketMeta extends ItemMeta {
   clone(): TropicalFishBucketMeta;
   getBodyColor(): DyeColor;
   getPattern(): TropicalFish$Pattern;
   getPatternColor(): DyeColor;
   hasVariant(): boolean;
   setBodyColor(color: DyeColor): void;
   setPattern(pattern: TropicalFish$Pattern): void;
   setPatternColor(color: DyeColor): void;
}
export interface Turtle extends Animals {
   getHome(): Location;
   hasEgg(): boolean;
   isDigging(): boolean;
   isGoingHome(): boolean;
   setHasEgg(has_egg: boolean): void;
   setHome(location: Location): void;
}
export interface TurtleEgg extends BlockData {
   getEggs(): number;
   getHatch(): number;
   getMaximumEggs(): number;
   getMaximumHatch(): number;
   getMinimumEggs(): number;
   setEggs(eggs: number): void;
   setHatch(hatch: number): void;
}
export class TurtleGoHomeEvent extends EntityEvent implements Cancellable {
   constructor (turtle: Turtle);
   getEntity (): Turtle;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class TurtleLayEggEvent extends EntityEvent implements Cancellable {
   constructor (turtle: Turtle, location: Location, egg_count: number);
   getEggCount (): number;
   getEntity (): Turtle;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getLocation (): Location;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setEggCount (egg_count: number): void;
}
export class TurtleStartDiggingEvent extends EntityEvent implements Cancellable {
   constructor (turtle: Turtle, location: Location);
   getEntity (): Turtle;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getLocation (): Location;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class UnknownCommandEvent extends Event {
   constructor (sender: CommandSender, command_line: string, message: string);
   getCommandLine (): string;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getMessage (): string;
   getSender (): CommandSender;
   setMessage (message: string): void;
}
export class UnknownDependencyException extends RuntimeException {
   constructor ();
   constructor (message: string);
   constructor (throwable: Throwable);
   constructor (throwable: Throwable, message: string);
}
export class UnsafeUtils extends JavaObject {
   static getUnsafe (): sun$misc$Unsafe;
   static isUnsafeSupported (): boolean;
}
export interface UnsafeValues {
   checkSupported(pdf: PluginDescriptionFile): void;
   deserializeItem(data: byte[]): ItemStack;
   fromLegacy(material: Material): Material;
   fromLegacy(material: MaterialData): Material;
   fromLegacy(material: MaterialData, item_priority: boolean): Material;
   fromLegacy(material: Material, data: number): BlockData;
   getDataVersion(): number;
   getMaterial(material: string, version: number): Material;
   getTimingsServerName(): string;
   getVersionFetcher(): VersionFetcher;
   static isLegacyPlugin(plugin: Plugin): boolean;
   isSupportedApiVersion(api_version: string): boolean;
   loadAdvancement(key: NamespacedKey, advancement: string): Advancement;
   modifyItemStack(stack: ItemStack, arguments: string): ItemStack;
   processClass(pdf: PluginDescriptionFile, path: string, clazz: byte[]): number[];
   removeAdvancement(key: NamespacedKey): boolean;
   reportTimings(): void;
   serializeItem(item: ItemStack): number[];
   toLegacy(material: Material): Material;
}
export class UsageMode {
   static CORNER: UsageMode;
   static DATA: UsageMode;
   static LOAD: UsageMode;
   static SAVE: UsageMode;
   static valueOf (name: string): UsageMode;
   static values (): UsageMode[];
}
export class ValidatingPrompt extends JavaObject implements Prompt {
   constructor ();
   acceptInput (context: ConversationContext, input: string): Prompt;
   acceptValidatedInput (context: ConversationContext, input: string): Prompt;
   blocksForInput (context: ConversationContext): boolean;
   getFailedValidationText (context: ConversationContext, invalid_input: string): string;
   isInputValid (context: ConversationContext, input: string): boolean;
}
export interface VanillaGoal<T extends Mob> extends Goal<T> {
   static ANGE(undefined): GoalKey<PigZombie>;
   static ANGE(undefined): GoalKey<PigZombie>;
   static ANGE(undefined): GoalKey<PigZombie>;
}
export class Vector extends JavaObject implements Cloneable, ConfigurationSerializable {
   constructor ();
   constructor (x: number, y: number, z: number);
   constructor (x: number, y: number, z: number);
   constructor (x: number, y: number, z: number);
   add (vec: Vector): Vector;
   angle (other: Vector): number;
   checkFinite (): void;
   clone (): Vector;
   copy (vec: Vector): Vector;
   crossProduct (o: Vector): Vector;
   static deserialize (args: Map<string, JavaObject>): Vector;
   distance (o: Vector): number;
   distanceSquared (o: Vector): number;
   divide (vec: Vector): Vector;
   dot (other: Vector): number;
   equals (obj: JavaObject): boolean;
   getBlockX (): number;
   getBlockY (): number;
   getBlockZ (): number;
   getCrossProduct (o: Vector): Vector;
   static getEpsilon (): number;
   static getMaximum (v1: Vector, v2: Vector): Vector;
   getMidpoint (other: Vector): Vector;
   static getMinimum (v1: Vector, v2: Vector): Vector;
   static getRandom (): Vector;
   getX (): number;
   getY (): number;
   getZ (): number;
   hashCode (): number;
   isInAABB (min: Vector, max: Vector): boolean;
   isInSphere (origin: Vector, radius: number): boolean;
   isNormalized (): boolean;
   length (): number;
   lengthSquared (): number;
   midpoint (other: Vector): Vector;
   multiply (m: number): Vector;
   multiply (m: number): Vector;
   multiply (m: number): Vector;
   multiply (vec: Vector): Vector;
   normalize (): Vector;
   rotateAroundAxis (axis: Vector, angle: number): Vector;
   rotateAroundNonUnitAxis (axis: Vector, angle: number): Vector;
   rotateAroundX (angle: number): Vector;
   rotateAroundY (angle: number): Vector;
   rotateAroundZ (angle: number): Vector;
   serialize (): Map<string, JavaObject>;
   setX (x: number): Vector;
   setX (x: number): Vector;
   setX (x: number): Vector;
   setY (y: number): Vector;
   setY (y: number): Vector;
   setY (y: number): Vector;
   setZ (z: number): Vector;
   setZ (z: number): Vector;
   setZ (z: number): Vector;
   subtract (vec: Vector): Vector;
   toBlockVector (): BlockVector;
   toLocation (world: World): Location;
   toLocation (world: World, yaw: number, pitch: number): Location;
   toString (): string;
   zero (): Vector;
}
export interface Vehicle extends Entity {
   getVelocity(): Vector;
   setVelocity(vel: Vector): void;
}
export class VehicleBlockCollisionEvent extends VehicleCollisionEvent {
   constructor (vehicle: Vehicle, block: Block);
   getBlock (): Block;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class VehicleCollisionEvent extends VehicleEvent {
   constructor (vehicle: Vehicle);
}
export class VehicleCreateEvent extends VehicleEvent implements Cancellable {
   constructor (vehicle: Vehicle);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancelled: boolean): void;
}
export class VehicleDamageEvent extends VehicleEvent implements Cancellable {
   constructor (vehicle: Vehicle, attacker: Entity, damage: number);
   getAttacker (): Entity;
   getDamage (): number;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setDamage (damage: number): void;
}
export class VehicleDestroyEvent extends VehicleEvent implements Cancellable {
   constructor (vehicle: Vehicle, attacker: Entity);
   getAttacker (): Entity;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class VehicleEnterEvent extends VehicleEvent implements Cancellable {
   constructor (vehicle: Vehicle, entered: Entity);
   getEntered (): Entity;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class VehicleEntityCollisionEvent extends VehicleCollisionEvent implements Cancellable {
   constructor (vehicle: Vehicle, entity: Entity);
   getEntity (): Entity;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   isCollisionCancelled (): boolean;
   isPickupCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setCollisionCancelled (cancel: boolean): void;
   setPickupCancelled (cancel: boolean): void;
}
export class VehicleEvent extends Event {
   constructor (vehicle: Vehicle);
   getVehicle (): Vehicle;
}
export class VehicleExitEvent extends VehicleEvent implements Cancellable {
   constructor (vehicle: Vehicle, exited: LivingEntity);
   constructor (vehicle: Vehicle, exited: LivingEntity, is_cancellable: boolean);
   getExited (): LivingEntity;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancellable (): boolean;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class VehicleMoveEvent extends VehicleEvent {
   constructor (vehicle: Vehicle, from: Location, to: Location);
   getFrom (): Location;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getTo (): Location;
}
export class VehicleUpdateEvent extends VehicleEvent {
   constructor (vehicle: Vehicle);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class VersionCommand extends BukkitCommand {
   constructor (name: string);
   execute (sender: CommandSender, current_alias: string, args: string[]): boolean;
   tabComplete (sender: CommandSender, alias: string, args: string[]): List<string>;
}
export interface VersionFetcher {
   getCacheTime(): number;
   getVersionMessage(server_version: string): string;
}
export class VersionFetcher$DummyVersionFetcher extends JavaObject implements VersionFetcher {
   constructor ();
   getCacheTime (): number;
   getVersionMessage (server_version: string): string;
}
export interface Vex extends Monster {
   getSummoner(): Mob;
   isCharging(): boolean;
   setCharging(charging: boolean): void;
   setSummoner(summoner: Mob): void;
}
export interface Villager extends AbstractVillager {
   clearReputations(): void;
   getProfession(): Villager$Profession;
   getReputation(unique_id: UUID): Reputation;
   getReputations(): Map<UUID, Reputation>;
   getRestocksToday(): number;
   getVillagerExperience(): number;
   getVillagerLevel(): number;
   getVillagerType(): Villager$Type;
   setProfession(profession: Villager$Profession): void;
   setReputation(unique_id: UUID, reputation: Reputation): void;
   setReputations(reputations: Map<UUID, Reputation>): void;
   setRestocksToday(restocks_today: number): void;
   setVillagerExperience(experience: number): void;
   setVillagerLevel(level: number): void;
   setVillagerType(type: Villager$Type): void;
   sleep(location: Location): boolean;
   wakeup(): void;
}
export class Villager$Profession {
   static ARMORER: Villager$Profession;
   static BUTCHER: Villager$Profession;
   static CARTOGRAPHER: Villager$Profession;
   static CLERIC: Villager$Profession;
   static FARMER: Villager$Profession;
   static FISHERMAN: Villager$Profession;
   static FLETCHER: Villager$Profession;
   static LEATHERWORKER: Villager$Profession;
   static LIBRARIAN: Villager$Profession;
   static MASON: Villager$Profession;
   static NITWIT: Villager$Profession;
   static NONE: Villager$Profession;
   static SHEPHERD: Villager$Profession;
   static TOOLSMITH: Villager$Profession;
   static WEAPONSMITH: Villager$Profession;
   getKey (): NamespacedKey;
   static valueOf (name: string): Villager$Profession;
   static values (): Villager$Profession[];
}
export class Villager$Type {
   static DESERT: Villager$Type;
   static JUNGLE: Villager$Type;
   static PLAINS: Villager$Type;
   static SAVANNA: Villager$Type;
   static SNOW: Villager$Type;
   static SWAMP: Villager$Type;
   static TAIGA: Villager$Type;
   getKey (): NamespacedKey;
   static valueOf (name: string): Villager$Type;
   static values (): Villager$Type[];
}
export class VillagerAcquireTradeEvent extends EntityEvent implements Cancellable {
   constructor (what: AbstractVillager, recipe: MerchantRecipe);
   getEntity (): AbstractVillager;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getRecipe (): MerchantRecipe;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setRecipe (recipe: MerchantRecipe): void;
}
export class VillagerCareerChangeEvent extends EntityEvent implements Cancellable {
   constructor (what: Villager, profession: Villager$Profession, reason: VillagerCareerChangeEvent$ChangeReason);
   getEntity (): Villager;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getProfession (): Villager$Profession;
   getReason (): VillagerCareerChangeEvent$ChangeReason;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setProfession (profession: Villager$Profession): void;
}
export class VillagerCareerChangeEvent$ChangeReason {
   static EMPLOYED: VillagerCareerChangeEvent$ChangeReason;
   static LOSING_JOB: VillagerCareerChangeEvent$ChangeReason;
   static valueOf (name: string): VillagerCareerChangeEvent$ChangeReason;
   static values (): VillagerCareerChangeEvent$ChangeReason[];
}
export class VillagerReplenishTradeEvent extends EntityEvent implements Cancellable {
   constructor (what: AbstractVillager, recipe: MerchantRecipe, bonus: number);
   getBonus (): number;
   getEntity (): AbstractVillager;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getRecipe (): MerchantRecipe;
   isCancelled (): boolean;
   setBonus (bonus: number): void;
   setCancelled (cancel: boolean): void;
   setRecipe (recipe: MerchantRecipe): void;
}
export interface Vindicator extends Illager {
   isJohnny(): boolean;
   setJohnny(johnny: boolean): void;
}
export class Vine extends MaterialData {
   constructor ();
   constructor (data: number);
   constructor (faces: EnumSet<BlockFace>);
   constructor (...faces: BlockFace);
   constructor (type: Material, data: number);
   clone (): Vine;
   isOnFace (face: BlockFace): boolean;
   putOnFace (face: BlockFace): void;
   removeFromFace (face: BlockFace): void;
   toString (): string;
}
export interface Wall extends Waterlogged {
   getHeight(face: BlockFace): Wall$Height;
   isUp(): boolean;
   setHeight(face: BlockFace, height: Wall$Height): void;
   setUp(up: boolean): void;
}
export class Wall$Height {
   static LOW: Wall$Height;
   static NONE: Wall$Height;
   static TALL: Wall$Height;
   static valueOf (name: string): Wall$Height;
   static values (): Wall$Height[];
}
export interface WallSign extends Directional, Waterlogged {}
export interface WanderingTrader extends AbstractVillager {}
export class Warning$WarningState {
   static DEFAULT: Warning$WarningState;
   static OFF: Warning$WarningState;
   static ON: Warning$WarningState;
   printFor (warning: Warning): boolean;
   static value (value: string): Warning$WarningState;
   static valueOf (name: string): Warning$WarningState;
   static values (): Warning$WarningState[];
}
export interface Waterlogged extends BlockData {
   isWaterlogged(): boolean;
   setWaterlogged(waterlogged: boolean): void;
}
export interface WaterMob extends Creature {}
export class WeatherChangeEvent extends WeatherEvent implements Cancellable {
   constructor (world: World, to: boolean);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   toWeatherState (): boolean;
}
export class WeatherEvent extends Event {
   constructor (where: World);
   getWorld (): World;
}
export class WeatherType {
   static CLEAR: WeatherType;
   static DOWNFALL: WeatherType;
   static valueOf (name: string): WeatherType;
   static values (): WeatherType[];
}
export class WhitelistToggleEvent extends Event {
   constructor (enabled: boolean);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isEnabled (): boolean;
}
export interface Witch extends Raider, RangedEntity {
   getDrinkingPotion(): ItemStack;
   getPotionUseTimeLeft(): number;
   isDrinkingPotion(): boolean;
   setDrinkingPotion(potion: ItemStack): void;
}
export class WitchConsumePotionEvent extends EntityEvent implements Cancellable {
   constructor (witch: Witch, potion: ItemStack);
   getEntity (): Witch;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getPotion (): ItemStack;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setPotion (potion: ItemStack): void;
}
export class WitchReadyPotionEvent extends EntityEvent implements Cancellable {
   constructor (witch: Witch, potion: ItemStack);
   getEntity (): Witch;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getPotion (): ItemStack;
   isCancelled (): boolean;
   static process (witch: Witch, potion: ItemStack): ItemStack;
   setCancelled (cancel: boolean): void;
   setPotion (potion: ItemStack): void;
}
export class WitchThrowPotionEvent extends EntityEvent implements Cancellable {
   constructor (witch: Witch, target: LivingEntity, potion: ItemStack);
   getEntity (): Witch;
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   getPotion (): ItemStack;
   getTarget (): LivingEntity;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
   setPotion (potion: ItemStack): void;
}
export interface Wither extends Monster, Boss, RangedEntity {}
export interface WitherSkeleton extends Skeleton {}
export interface WitherSkull extends Fireball {
   isCharged(): boolean;
   setCharged(charged: boolean): void;
}
export interface Wolf extends Tameable, Sittable {
   getCollarColor(): DyeColor;
   isAngry(): boolean;
   setAngry(angry: boolean): void;
   setCollarColor(color: DyeColor): void;
}
export class Wood extends MaterialData {
   constructor ();
   constructor (type: Material);
   constructor (type: Material, data: number);
   constructor (type: Material, species: TreeSpecies);
   constructor (species: TreeSpecies);
   clone (): Wood;
   getSpecies (): TreeSpecies;
   setSpecies (species: TreeSpecies): void;
   toString (): string;
}
export class WoodenStep extends Wood {
   constructor ();
   constructor (type: Material, data: number);
   constructor (species: TreeSpecies);
   constructor (species: TreeSpecies, inv: boolean);
   clone (): WoodenStep;
   isInverted (): boolean;
   setInverted (inv: boolean): void;
   toString (): string;
}
export class Wool extends MaterialData {
   constructor ();
   constructor (color: DyeColor);
   constructor (type: Material);
   constructor (type: Material, data: number);
   clone (): Wool;
   getColor (): DyeColor;
   setColor (color: DyeColor): void;
   toString (): string;
}
export interface World extends PluginMessageRecipient, Metadatable {
   addPluginChunkTicket(x: number, z: number, plugin: Plugin): boolean;
   canGenerateStructures(): boolean;
   createExplosion(x: number, y: number, z: number, power: number): boolean;
   createExplosion(x: number, y: number, z: number, power: number, set_fire: boolean): boolean;
   createExplosion(x: number, y: number, z: number, power: number, set_fire: boolean, break_blocks: boolean): boolean;
   createExplosion(
      x: number,
      y: number,
      z: number,
      power: number,
      set_fire: boolean,
      break_blocks: boolean,
      source: Entity
   ): boolean;
   createExplosion(source: Entity, power: number): boolean;
   createExplosion(source: Entity, power: number, set_fire: boolean): boolean;
   createExplosion(source: Entity, power: number, set_fire: boolean, break_blocks: boolean): boolean;
   createExplosion(source: Entity, loc: Location, power: number): boolean;
   createExplosion(source: Entity, loc: Location, power: number, set_fire: boolean): boolean;
   createExplosion(source: Entity, loc: Location, power: number, set_fire: boolean, break_blocks: boolean): boolean;
   createExplosion(loc: Location, power: number): boolean;
   createExplosion(loc: Location, power: number, set_fire: boolean): boolean;
   createExplosion(loc: Location, power: number, set_fire: boolean, break_blocks: boolean): boolean;
   createExplosion(loc: Location, power: number, set_fire: boolean, break_blocks: boolean, source: Entity): boolean;
   dropItem(location: Location, item: ItemStack): Item;
   dropItemNaturally(location: Location, item: ItemStack): Item;
   generateTree(location: Location, type: TreeType): boolean;
   generateTree(loc: Location, type: TreeType, delegate: BlockChangeDelegate): boolean;
   getAllowAnimals(): boolean;
   getAllowMonsters(): boolean;
   getAmbientSpawnLimit(): number;
   getAnimalSpawnLimit(): number;
   getBiome(x: number, z: number): Biome;
   getBiome(x: number, y: number, z: number): Biome;
   getBlockAt(x: number, y: number, z: number): Block;
   getBlockAt(location: Location): Block;
   getBlockAtKey(key: number): Block;
   getChunkAt(x: number, z: number): Chunk;
   getChunkAt(chunk_key: number): Chunk;
   getChunkAt(block: Block): Chunk;
   getChunkAt(location: Location): Chunk;
   getChunkAtAsync(x: number, z: number): CompletableFuture<Chunk>;
   getChunkAtAsync(x: number, z: number, gen: boolean): CompletableFuture<Chunk>;
   getChunkAtAsync(x: number, z: number, gen: boolean, urgent: boolean): CompletableFuture<Chunk>;
   getChunkAtAsync(x: number, z: number, gen: boolean, cb: Consumer<Chunk>): void;
   getChunkAtAsync(x: number, z: number, cb: Consumer<Chunk>): void;
   getChunkAtAsync(x: number, z: number, cb: World$ChunkLoadCallback): void;
   getChunkAtAsync(block: Block): CompletableFuture<Chunk>;
   getChunkAtAsync(block: Block, gen: boolean): CompletableFuture<Chunk>;
   getChunkAtAsync(block: Block, gen: boolean, cb: Consumer<Chunk>): void;
   getChunkAtAsync(block: Block, cb: Consumer<Chunk>): void;
   getChunkAtAsync(block: Block, cb: World$ChunkLoadCallback): void;
   getChunkAtAsync(loc: Location): CompletableFuture<Chunk>;
   getChunkAtAsync(loc: Location, gen: boolean): CompletableFuture<Chunk>;
   getChunkAtAsync(loc: Location, gen: boolean, cb: Consumer<Chunk>): void;
   getChunkAtAsync(loc: Location, cb: Consumer<Chunk>): void;
   getChunkAtAsync(loc: Location, cb: World$ChunkLoadCallback): void;
   getChunkAtAsyncUrgently(x: number, z: number): CompletableFuture<Chunk>;
   getChunkAtAsyncUrgently(block: Block): CompletableFuture<Chunk>;
   getChunkAtAsyncUrgently(block: Block, gen: boolean): CompletableFuture<Chunk>;
   getChunkAtAsyncUrgently(loc: Location): CompletableFuture<Chunk>;
   getChunkAtAsyncUrgently(loc: Location, gen: boolean): CompletableFuture<Chunk>;
   getChunkCount(): number;
   getDifficulty(): Difficulty;
   getEmptyChunkSnapshot(x: number, z: number, include_biome: boolean, include_biome_temp: boolean): ChunkSnapshot;
   getEnderDragonBattle(): DragonBattle;
   getEntities(): List<Entity>;
   getEntitiesByClass<T extends Entity>(cls: Class<T>): Collection<T>;
   getEntitiesByClass<T extends Entity>(...classes: Class<T>): Collection<T>;
   getEntitiesByClasses(...classes: Class): Collection<Entity>;
   getEntity(uuid: UUID): Entity;
   getEntityCount(): number;
   getEnvironment(): World$Environment;
   getForceLoadedChunks(): Collection<Chunk>;
   getFullTime(): number;
   getGameRuleDefault<T>(rule: GameRule<T>): T;
   getGameRules(): string[];
   getGameRuleValue(rule: string): string;
   getGameRuleValue<T>(rule: GameRule<T>): T;
   getGenerator(): ChunkGenerator;
   getHighestBlockAt(x: number, z: number): Block;
   getHighestBlockAt(x: number, z: number, heightmap: HeightmapType): Block;
   getHighestBlockAt(x: number, z: number, height_map: HeightMap): Block;
   getHighestBlockAt(location: Location): Block;
   getHighestBlockAt(location: Location, heightmap: HeightmapType): Block;
   getHighestBlockAt(location: Location, height_map: HeightMap): Block;
   getHighestBlockYAt(x: number, z: number): number;
   getHighestBlockYAt(x: number, z: number, heightmap: HeightmapType): number;
   getHighestBlockYAt(x: number, z: number, height_map: HeightMap): number;
   getHighestBlockYAt(location: Location): number;
   getHighestBlockYAt(location: Location, heightmap: HeightmapType): number;
   getHighestBlockYAt(location: Location, height_map: HeightMap): number;
   getHumidity(x: number, z: number): number;
   getHumidity(x: number, y: number, z: number): number;
   getKeepSpawnInMemory(): boolean;
   getLivingEntities(): List<LivingEntity>;
   getLoadedChunks(): Chunk[];
   getLocationAtKey(key: number): Location;
   getMaxHeight(): number;
   getMonsterSpawnLimit(): number;
   getName(): string;
   getNearbyEntities(location: Location, x: number, y: number, z: number): Collection<Entity>;
   getNearbyEntities(
      location: Location,
      x: number,
      y: number,
      z: number,
      filter: Predicate<Entity>
   ): Collection<Entity>;
   getNearbyEntities(bounding_box: BoundingBox): Collection<Entity>;
   getNearbyEntities(bounding_box: BoundingBox, filter: Predicate<Entity>): Collection<Entity>;
   getNearbyEntitiesByType<T extends Entity>(
      clazz: Class<Entity>,
      loc: Location,
      x_radius: number,
      y_radius: number,
      z_radius: number,
      predicate: Predicate<T>
   ): Collection<T>;
   getNearbyEntitiesByType<T extends Entity>(clazz: Class<T>, loc: Location, radius: number): Collection<T>;
   getNearbyEntitiesByType<T extends Entity>(
      clazz: Class<T>,
      loc: Location,
      xz_radius: number,
      y_radius: number
   ): Collection<T>;
   getNearbyEntitiesByType<T extends Entity>(
      clazz: Class<T>,
      loc: Location,
      x_radius: number,
      y_radius: number,
      z_radius: number
   ): Collection<T>;
   getNearbyEntitiesByType<T extends Entity>(
      clazz: Class<T>,
      loc: Location,
      xz_radius: number,
      y_radius: number,
      predicate: Predicate<T>
   ): Collection<T>;
   getNearbyEntitiesByType<T extends Entity>(
      clazz: Class<T>,
      loc: Location,
      radius: number,
      predicate: Predicate<T>
   ): Collection<T>;
   getNearbyLivingEntities(loc: Location, radius: number): Collection<LivingEntity>;
   getNearbyLivingEntities(loc: Location, xz_radius: number, y_radius: number): Collection<LivingEntity>;
   getNearbyLivingEntities(
      loc: Location,
      x_radius: number,
      y_radius: number,
      z_radius: number
   ): Collection<LivingEntity>;
   getNearbyLivingEntities(
      loc: Location,
      x_radius: number,
      y_radius: number,
      z_radius: number,
      predicate: Predicate<LivingEntity>
   ): Collection<LivingEntity>;
   getNearbyLivingEntities(
      loc: Location,
      xz_radius: number,
      y_radius: number,
      predicate: Predicate<LivingEntity>
   ): Collection<LivingEntity>;
   getNearbyLivingEntities(loc: Location, radius: number, predicate: Predicate<LivingEntity>): Collection<LivingEntity>;
   getNearbyPlayers(loc: Location, radius: number): Collection<Player>;
   getNearbyPlayers(loc: Location, xz_radius: number, y_radius: number): Collection<Player>;
   getNearbyPlayers(loc: Location, x_radius: number, y_radius: number, z_radius: number): Collection<Player>;
   getNearbyPlayers(
      loc: Location,
      x_radius: number,
      y_radius: number,
      z_radius: number,
      predicate: Predicate<Player>
   ): Collection<Player>;
   getNearbyPlayers(
      loc: Location,
      xz_radius: number,
      y_radius: number,
      predicate: Predicate<Player>
   ): Collection<Player>;
   getNearbyPlayers(loc: Location, radius: number, predicate: Predicate<Player>): Collection<Player>;
   getNoTickViewDistance(): number;
   getPlayerCount(): number;
   getPlayers(): List<Player>;
   getPluginChunkTickets(): Map<Plugin, Collection<Chunk>>;
   getPluginChunkTickets(x: number, z: number): Collection<Plugin>;
   getPopulators(): List<BlockPopulator>;
   getPVP(): boolean;
   getRaids(): List<Raid>;
   getSeaLevel(): number;
   getSeed(): number;
   getSpawnLocation(): Location;
   getTemperature(x: number, z: number): number;
   getTemperature(x: number, y: number, z: number): number;
   getThunderDuration(): number;
   getTickableTileEntityCount(): number;
   getTicksPerAmbientSpawns(): number;
   getTicksPerAnimalSpawns(): number;
   getTicksPerMonsterSpawns(): number;
   getTicksPerWaterAmbientSpawns(): number;
   getTicksPerWaterSpawns(): number;
   getTileEntityCount(): number;
   getTime(): number;
   getUID(): UUID;
   getViewDistance(): number;
   getWaterAmbientSpawnLimit(): number;
   getWaterAnimalSpawnLimit(): number;
   getWeatherDuration(): number;
   getWorldBorder(): WorldBorder;
   getWorldFolder(): File;
   getWorldType(): WorldType;
   hasStorm(): boolean;
   isAutoSave(): boolean;
   isChunkForceLoaded(x: number, z: number): boolean;
   isChunkGenerated(x: number, z: number): boolean;
   isChunkGenerated(chunk_key: number): boolean;
   isChunkInUse(x: number, z: number): boolean;
   isChunkLoaded(x: number, z: number): boolean;
   isChunkLoaded(chunk: Chunk): boolean;
   isDayTime(): boolean;
   isGameRule(rule: string): boolean;
   isHardcore(): boolean;
   isThundering(): boolean;
   loadChunk(x: number, z: number): void;
   loadChunk(x: number, z: number, generate: boolean): boolean;
   loadChunk(chunk: Chunk): void;
   locateNearestRaid(location: Location, radius: number): Raid;
   locateNearestStructure(
      origin: Location,
      structure_type: StructureType,
      radius: number,
      find_unexplored: boolean
   ): Location;
   playEffect(location: Location, effect: Effect, data: number): void;
   playEffect(location: Location, effect: Effect, data: number, radius: number): void;
   playEffect<T>(location: Location, effect: Effect, data: T): void;
   playEffect<T>(location: Location, effect: Effect, data: T, radius: number): void;
   playSound(location: Location, sound: string, volume: number, pitch: number): void;
   playSound(location: Location, sound: string, category: SoundCategory, volume: number, pitch: number): void;
   playSound(location: Location, sound: Sound, volume: number, pitch: number): void;
   playSound(location: Location, sound: Sound, category: SoundCategory, volume: number, pitch: number): void;
   rayTrace(
      start: Location,
      direction: Vector,
      max_distance: number,
      fluid_collision_mode: FluidCollisionMode,
      ignore_passable_blocks: boolean,
      ray_size: number,
      filter: Predicate<Entity>
   ): RayTraceResult;
   rayTraceBlocks(start: Location, direction: Vector, max_distance: number): RayTraceResult;
   rayTraceBlocks(
      start: Location,
      direction: Vector,
      max_distance: number,
      fluid_collision_mode: FluidCollisionMode
   ): RayTraceResult;
   rayTraceBlocks(
      start: Location,
      direction: Vector,
      max_distance: number,
      fluid_collision_mode: FluidCollisionMode,
      ignore_passable_blocks: boolean
   ): RayTraceResult;
   rayTraceEntities(start: Location, direction: Vector, max_distance: number): RayTraceResult;
   rayTraceEntities(start: Location, direction: Vector, max_distance: number, ray_size: number): RayTraceResult;
   rayTraceEntities(
      start: Location,
      direction: Vector,
      max_distance: number,
      ray_size: number,
      filter: Predicate<Entity>
   ): RayTraceResult;
   rayTraceEntities(
      start: Location,
      direction: Vector,
      max_distance: number,
      filter: Predicate<Entity>
   ): RayTraceResult;
   refreshChunk(x: number, z: number): boolean;
   regenerateChunk(x: number, z: number): boolean;
   removePluginChunkTicket(x: number, z: number, plugin: Plugin): boolean;
   removePluginChunkTickets(plugin: Plugin): void;
   save(): void;
   setAmbientSpawnLimit(limit: number): void;
   setAnimalSpawnLimit(limit: number): void;
   setAutoSave(value: boolean): void;
   setBiome(x: number, y: number, z: number, bio: Biome): void;
   setBiome(x: number, z: number, bio: Biome): void;
   setChunkForceLoaded(x: number, z: number, forced: boolean): void;
   setDifficulty(difficulty: Difficulty): void;
   setFullTime(time: number): void;
   setGameRule<T>(rule: GameRule<T>, new_value: T): boolean;
   setGameRuleValue(rule: string, value: string): boolean;
   setHardcore(hardcore: boolean): void;
   setKeepSpawnInMemory(keep_loaded: boolean): void;
   setMonsterSpawnLimit(limit: number): void;
   setNoTickViewDistance(view_distance: number): void;
   setPVP(pvp: boolean): void;
   setSpawnFlags(allow_monsters: boolean, allow_animals: boolean): void;
   setSpawnLocation(x: number, y: number, z: number): boolean;
   setSpawnLocation(location: Location): boolean;
   setStorm(has_storm: boolean): void;
   setThunderDuration(duration: number): void;
   setThundering(thundering: boolean): void;
   setTicksPerAmbientSpawns(ticks_per_ambient_spawns: number): void;
   setTicksPerAnimalSpawns(ticks_per_animal_spawns: number): void;
   setTicksPerMonsterSpawns(ticks_per_monster_spawns: number): void;
   setTicksPerWaterAmbientSpawns(ticks_per_ambient_spawns: number): void;
   setTicksPerWaterSpawns(ticks_per_water_spawns: number): void;
   setTime(time: number): void;
   setViewDistance(view_distance: number): void;
   setWaterAmbientSpawnLimit(limit: number): void;
   setWaterAnimalSpawnLimit(limit: number): void;
   setWeatherDuration(duration: number): void;
   spawn<T extends Entity>(location: Location, clazz: Class<T>): T;
   spawn<T extends Entity>(location: Location, clazz: Class<T>, reason: CreatureSpawnEvent$SpawnReason): T;
   spawn<T extends Entity>(
      location: Location,
      clazz: Class<T>,
      reason: CreatureSpawnEvent$SpawnReason,
      funktion: Consumer<T>
   ): T;
   spawn<T extends Entity>(location: Location, clazz: Class<T>, funktion: Consumer<T>): T;
   spawn<T extends Entity>(
      location: Location,
      clazz: Class<T>,
      funktion: Consumer<T>,
      reason: CreatureSpawnEvent$SpawnReason
   ): T;
   spawnArrow(location: Location, direction: Vector, speed: number, spread: number): Arrow;
   spawnArrow<T extends AbstractArrow>(
      location: Location,
      direction: Vector,
      speed: number,
      spread: number,
      clazz: Class<T>
   ): T;
   spawnEntity(loc: Location, type: EntityType): Entity;
   spawnEntity(loc: Location, type: EntityType, reason: CreatureSpawnEvent$SpawnReason): Entity;
   spawnEntity(
      loc: Location,
      type: EntityType,
      reason: CreatureSpawnEvent$SpawnReason,
      funktion: Consumer<Entity>
   ): Entity;
   spawnFallingBlock(location: Location, data: BlockData): FallingBlock;
   spawnFallingBlock(location: Location, data: MaterialData): FallingBlock;
   spawnFallingBlock(location: Location, material: Material, data: number): FallingBlock;
   spawnParticle(particle: Particle, x: number, y: number, z: number, count: number): void;
   spawnParticle(
      particle: Particle,
      x: number,
      y: number,
      z: number,
      count: number,
      offset_x: number,
      offset_y: number,
      offset_z: number
   ): void;
   spawnParticle(
      particle: Particle,
      x: number,
      y: number,
      z: number,
      count: number,
      offset_x: number,
      offset_y: number,
      offset_z: number,
      extra: number
   ): void;
   spawnParticle<T>(
      particle: Particle,
      x: number,
      y: number,
      z: number,
      count: number,
      offset_x: number,
      offset_y: number,
      offset_z: number,
      extra: number,
      data: T
   ): void;
   spawnParticle<T>(
      particle: Particle,
      x: number,
      y: number,
      z: number,
      count: number,
      offset_x: number,
      offset_y: number,
      offset_z: number,
      extra: number,
      data: T,
      force: boolean
   ): void;
   spawnParticle<T>(
      particle: Particle,
      x: number,
      y: number,
      z: number,
      count: number,
      offset_x: number,
      offset_y: number,
      offset_z: number,
      data: T
   ): void;
   spawnParticle<T>(particle: Particle, x: number, y: number, z: number, count: number, data: T): void;
   spawnParticle<T>(
      particle: Particle,
      receivers: List<Player>,
      source: Player,
      x: number,
      y: number,
      z: number,
      count: number,
      offset_x: number,
      offset_y: number,
      offset_z: number,
      extra: number,
      data: T
   ): void;
   spawnParticle<T>(
      particle: Particle,
      receivers: List<Player>,
      source: Player,
      x: number,
      y: number,
      z: number,
      count: number,
      offset_x: number,
      offset_y: number,
      offset_z: number,
      extra: number,
      data: T,
      force: boolean
   ): void;
   spawnParticle(particle: Particle, location: Location, count: number): void;
   spawnParticle(
      particle: Particle,
      location: Location,
      count: number,
      offset_x: number,
      offset_y: number,
      offset_z: number
   ): void;
   spawnParticle(
      particle: Particle,
      location: Location,
      count: number,
      offset_x: number,
      offset_y: number,
      offset_z: number,
      extra: number
   ): void;
   spawnParticle<T>(
      particle: Particle,
      location: Location,
      count: number,
      offset_x: number,
      offset_y: number,
      offset_z: number,
      extra: number,
      data: T
   ): void;
   spawnParticle<T>(
      particle: Particle,
      location: Location,
      count: number,
      offset_x: number,
      offset_y: number,
      offset_z: number,
      extra: number,
      data: T,
      force: boolean
   ): void;
   spawnParticle<T>(
      particle: Particle,
      location: Location,
      count: number,
      offset_x: number,
      offset_y: number,
      offset_z: number,
      data: T
   ): void;
   spawnParticle<T>(particle: Particle, location: Location, count: number, data: T): void;
   spigot(): World$Spigot;
   strikeLightning(loc: Location): LightningStrike;
   strikeLightningEffect(loc: Location): LightningStrike;
   unloadChunk(x: number, z: number): boolean;
   unloadChunk(x: number, z: number, save: boolean): boolean;
   unloadChunk(chunk: Chunk): boolean;
   unloadChunkRequest(x: number, z: number): boolean;
}
export interface World$ChunkLoadCallback extends Consumer<Chunk> {
   accept(chunk: Chunk): void;
   onLoad(chunk: Chunk): void;
}
export class World$Environment {
   static NETHER: World$Environment;
   static NORMAL: World$Environment;
   static THE_END: World$Environment;
   static getEnvironment (id: number): World$Environment;
   getId (): number;
   static valueOf (name: string): World$Environment;
   static values (): World$Environment[];
}
export class World$Spigot extends JavaObject {
   constructor ();
   strikeLightning (loc: Location, is_silent: boolean): LightningStrike;
   strikeLightningEffect (loc: Location, is_silent: boolean): LightningStrike;
}
export interface WorldBorder {
   getCenter(): Location;
   getDamageAmount(): number;
   getDamageBuffer(): number;
   getSize(): number;
   getWarningDistance(): number;
   getWarningTime(): number;
   isInBounds(location: Location): boolean;
   isInside(location: Location): boolean;
   reset(): void;
   setCenter(x: number, z: number): void;
   setCenter(location: Location): void;
   setDamageAmount(damage: number): void;
   setDamageBuffer(blocks: number): void;
   setSize(new_size: number): void;
   setSize(new_size: number, seconds: number): void;
   setWarningDistance(distance: number): void;
   setWarningTime(seconds: number): void;
}
export class WorldCreator extends JavaObject {
   constructor (name: string);
   copy (world: World): WorldCreator;
   copy (creator: WorldCreator): WorldCreator;
   createWorld (): World;
   environment (): World$Environment;
   environment (env: World$Environment): WorldCreator;
   generateStructures (): boolean;
   generateStructures (generate: boolean): WorldCreator;
   generator (): ChunkGenerator;
   generator (generator: string): WorldCreator;
   generator (generator: string, output: CommandSender): WorldCreator;
   generator (generator: ChunkGenerator): WorldCreator;
   generatorSettings (): string;
   generatorSettings (generator_settings: string): WorldCreator;
   static getGeneratorForName (world: string, name: string, output: CommandSender): ChunkGenerator;
   hardcore (): boolean;
   hardcore (hardcore: boolean): WorldCreator;
   name (): string;
   static name (name: string): WorldCreator;
   seed (): number;
   seed (seed: number): WorldCreator;
   type (): WorldType;
   type (type: WorldType): WorldCreator;
}
export class WorldEvent extends Event {
   constructor (world: World);
   getWorld (): World;
}
export class WorldInitEvent extends WorldEvent {
   constructor (world: World);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class WorldLoadEvent extends WorldEvent {
   constructor (world: World);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class WorldSaveEvent extends WorldEvent {
   constructor (world: World);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
}
export class WorldType {
   static AMPLIFIED: WorldType;
   static FLAT: WorldType;
   static LARGE_BIOMES: WorldType;
   static NORMAL: WorldType;
   static getByName (name: string): WorldType;
   getName (): string;
   static valueOf (name: string): WorldType;
   static values (): WorldType[];
}
export class WorldUnloadEvent extends WorldEvent implements Cancellable {
   constructor (world: World);
   static getHandlerList (): HandlerList;
   getHandlers (): HandlerList;
   isCancelled (): boolean;
   setCancelled (cancel: boolean): void;
}
export class YamlConfiguration extends FileConfiguration {
   constructor ();
   buildHeader (): string;
   convertMapsToSections (input: Map<X, X>, section: ConfigurationSection): void;
   static loadConfiguration (file: File): YamlConfiguration;
   static loadConfiguration (reader: Reader): YamlConfiguration;
   loadFromString (contents: string): void;
   options (): YamlConfigurationOptions;
   parseHeader (input: string): string;
   saveToString (): string;
}
export class YamlConfigurationOptions extends FileConfigurationOptions {
   constructor (configuration: YamlConfiguration);
   configuration (): YamlConfiguration;
   copyDefaults (value: boolean): YamlConfigurationOptions;
   copyHeader (value: boolean): YamlConfigurationOptions;
   header (value: string): YamlConfigurationOptions;
   indent (): number;
   indent (value: number): YamlConfigurationOptions;
   pathSeparator (value: char): YamlConfigurationOptions;
}
export class YamlConstructor extends SafeConstructor {
   constructor ();
}
export class YamlRepresenter extends Representer {
   constructor ();
   addClassTag (arg0: Class<JavaObject>, arg1: Tag): Tag;
   getTag (arg0: Class, arg1: Tag): Tag;
   getTimeZone (): TimeZone;
   setTimeZone (arg0: TimeZone): void;
}
export interface Zoglin extends Monster {
   isBaby(): boolean;
   setBaby(flag: boolean): void;
}
export interface Zombie extends Monster {
   getConversionTime(): number;
   getVillagerProfession(): Villager$Profession;
   isArmsRaised(): boolean;
   isBaby(): boolean;
   isConverting(): boolean;
   isDrowning(): boolean;
   isVillager(): boolean;
   setArmsRaised(raised: boolean): void;
   setBaby(flag: boolean): void;
   setConversionTime(time: number): void;
   setShouldBurnInDay(should_burn_in_day: boolean): void;
   setVillager(flag: boolean): void;
   setVillagerProfession(profession: Villager$Profession): void;
   shouldBurnInDay(): boolean;
   startDrowning(drowned_conversion_time: number): void;
   stopDrowning(): void;
}
export interface ZombieHorse extends AbstractHorse {}
export interface ZombieVillager extends Zombie {
   getConversionPlayer(): OfflinePlayer;
   getConversionTime(): number;
   getVillagerProfession(): Villager$Profession;
   getVillagerType(): Villager$Type;
   isConverting(): boolean;
   setConversionPlayer(conversion_player: OfflinePlayer): void;
   setConversionTime(time: number): void;
   setVillagerProfession(profession: Villager$Profession): void;
   setVillagerType(type: Villager$Type): void;
}
/*
















*/
///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                            MAIN SERVER CLASSES                            //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
export interface Server extends PluginMessageRecipient {
   addRecipe(recipe: Recipe): boolean;
   advancementIterator(): Iterator<Advancement>;
   banIP(address: string): void;
   broadcast(message: string, permission: string): number;
   broadcast(component: BaseComponent): void;
   broadcast(...components: BaseComponent): void;
   broadcastMessage(message: string): number;
   clearRecipes(): void;
   createBlockData(data: string): BlockData;
   createBlockData(material: Material): BlockData;
   createBlockData(material: Material, data: string): BlockData;
   createBlockData(material: Material, consumer: Consumer<BlockData>): BlockData;
   createBossBar(title: string, color: BarColor, style: BarStyle, ...flags: BarFlag): BossBar;
   createBossBar(key: NamespacedKey, title: string, color: BarColor, style: BarStyle, ...flags: BarFlag): KeyedBossBar;
   createChunkData(world: World): ChunkGenerator$ChunkData;
   createExplorerMap(world: World, location: Location, structure_type: StructureType): ItemStack;
   createExplorerMap(
      world: World,
      location: Location,
      structure_type: StructureType,
      radius: number,
      find_unexplored: boolean
   ): ItemStack;
   createInventory(owner: InventoryHolder, size: number): Inventory;
   createInventory(owner: InventoryHolder, size: number, title: string): Inventory;
   createInventory(owner: InventoryHolder, type: InventoryType): Inventory;
   createInventory(owner: InventoryHolder, type: InventoryType, title: string): Inventory;
   createMap(world: World): MapView;
   createMerchant(title: string): Merchant;
   createProfile(name: string): PlayerProfile;
   createProfile(uuid: UUID): PlayerProfile;
   createProfile(uuid: UUID, name: string): PlayerProfile;
   createVanillaChunkData(world: World, x: number, z: number): ChunkGenerator$ChunkData;
   createWorld(creator: WorldCreator): World;
   dispatchCommand(sender: CommandSender, command_line: string): boolean;
   getAdvancement(key: NamespacedKey): Advancement;
   getAllowEnd(): boolean;
   getAllowFlight(): boolean;
   getAllowNether(): boolean;
   getAmbientSpawnLimit(): number;
   getAnimalSpawnLimit(): number;
   getAverageTickTime(): number;
   getBanList(type: BanList$Type): BanList;
   getBannedPlayers(): Set<OfflinePlayer>;
   getBossBar(key: NamespacedKey): KeyedBossBar;
   getBossBars(): Iterator<KeyedBossBar>;
   getBukkitVersion(): string;
   getCommandAliases(): Map<string, string[]>;
   getCommandMap(): CommandMap;
   getConnectionThrottle(): number;
   getConsoleSender(): ConsoleCommandSender;
   getCurrentTick(): number;
   getDefaultGameMode(): GameMode;
   getEntity(uuid: UUID): Entity;
   getGenerateStructures(): boolean;
   getHelpMap(): HelpMap;
   getIdleTimeout(): number;
   getIp(): string;
   getIPBans(): Set<string>;
   getItemFactory(): ItemFactory;
   getLogger(): Logger;
   getLootTable(key: NamespacedKey): LootTable;
   getMap(id: number): MapView;
   getMaxPlayers(): number;
   getMessenger(): Messenger;
   getMinecraftVersion(): string;
   getMobGoals(): MobGoals;
   getMonsterSpawnLimit(): number;
   getMotd(): string;
   getName(): string;
   getOfflinePlayer(name: string): OfflinePlayer;
   getOfflinePlayer(id: UUID): OfflinePlayer;
   getOfflinePlayers(): OfflinePlayer[];
   getOnlineMode(): boolean;
   getOnlinePlayers(): Collection<Player>;
   getOperators(): Set<OfflinePlayer>;
   getPermissionMessage(): string;
   getPlayer(name: string): Player;
   getPlayer(id: UUID): Player;
   getPlayerExact(name: string): Player;
   getPlayerUniqueId(player_name: string): UUID;
   getPluginCommand(name: string): PluginCommand;
   getPluginManager(): PluginManager;
   getPort(): number;
   getRecipe(recipe_key: NamespacedKey): Recipe;
   getRecipesFor(result: ItemStack): List<Recipe>;
   getScheduler(): BukkitScheduler;
   getScoreboardManager(): ScoreboardManager;
   getServerIcon(): CachedServerIcon;
   getServicesManager(): ServicesManager;
   getShutdownMessage(): string;
   getSpawnRadius(): number;
   getTag<T extends Keyed>(registry: string, tag: NamespacedKey, clazz: Class<T>): Tag<T>;
   getTags<T extends Keyed>(registry: string, clazz: Class<T>): Iterable<Tag<T>>;
   getTicksPerAmbientSpawns(): number;
   getTicksPerAnimalSpawns(): number;
   getTicksPerMonsterSpawns(): number;
   getTicksPerWaterAmbientSpawns(): number;
   getTicksPerWaterSpawns(): number;
   getTickTimes(): number[];
   getTPS(): number[];
   getUnsafe(): UnsafeValues;
   getUpdateFolder(): string;
   getUpdateFolderFile(): File;
   getVersion(): string;
   getViewDistance(): number;
   getWarningState(): Warning$WarningState;
   getWaterAmbientSpawnLimit(): number;
   getWaterAnimalSpawnLimit(): number;
   getWhitelistedPlayers(): Set<OfflinePlayer>;
   getWorld(name: string): World;
   getWorld(uid: UUID): World;
   getWorldContainer(): File;
   getWorlds(): List<World>;
   getWorldType(): string;
   hasWhitelist(): boolean;
   isHardcore(): boolean;
   isPrimaryThread(): boolean;
   isStopping(): boolean;
   loadServerIcon(image: BufferedImage): CachedServerIcon;
   loadServerIcon(file: File): CachedServerIcon;
   matchPlayer(name: string): List<Player>;
   recipeIterator(): Iterator<Recipe>;
   reload(): void;
   reloadCommandAliases(): boolean;
   reloadData(): void;
   reloadPermissions(): void;
   reloadWhitelist(): void;
   removeBossBar(key: NamespacedKey): boolean;
   removeRecipe(key: NamespacedKey): boolean;
   resetRecipes(): void;
   savePlayers(): void;
   selectEntities(sender: CommandSender, selector: string): List<Entity>;
   setDefaultGameMode(mode: GameMode): void;
   setIdleTimeout(threshold: number): void;
   setSpawnRadius(value: number): void;
   setWhitelist(value: boolean): void;
   shutdown(): void;
   spigot(): Server$Spigot;
   suggestPlayerNamesWhenNullTabCompletions(): boolean;
   unbanIP(address: string): void;
   unloadWorld(name: string, save: boolean): boolean;
   unloadWorld(world: World, save: boolean): boolean;
}
