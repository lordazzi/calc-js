import { CalcConfig } from './calc-config';

export class ConfigService {

  private static instance: ConfigService | null = null;

  static defaultConfig: CalcConfig = {
    thrownStrategy: 'emit-event',
    throwNaN: true,
    throwInfinite: true,
    throwUnsafeNumber: true
  };

  static getInstance(): ConfigService {
    if (!this.instance) {
      this.instance = new ConfigService();
    }

    return this.instance;
  }

  private constructor() { }

  static configure(config: CalcConfig): void {
    this.defaultConfig = this.getInstance().mergeConfigs(this.defaultConfig, config);
  }

  private mergeConfigs(config: CalcConfig, mergeWith?: CalcConfig): CalcConfig {
    const clonedConfig: CalcConfig = JSON.parse(JSON.stringify(config));
    if (!mergeWith) {
      return clonedConfig;
    }

    if (mergeWith.thrownStrategy !== undefined) {
      clonedConfig.thrownStrategy = mergeWith.thrownStrategy;
    }

    if (mergeWith.throwNaN !== undefined) {
      clonedConfig.throwNaN = mergeWith.throwNaN;
    }

    if (mergeWith.throwInfinite !== undefined) {
      clonedConfig.throwInfinite = mergeWith.throwInfinite;
    }

    if (mergeWith.throwUnsafeNumber !== undefined) {
      clonedConfig.throwUnsafeNumber = mergeWith.throwUnsafeNumber;
    }

    return clonedConfig;
  }

  createConfigs(customConfig?: CalcConfig): CalcConfig {
    return this.mergeConfigs(ConfigService.defaultConfig, customConfig);
  }
}
