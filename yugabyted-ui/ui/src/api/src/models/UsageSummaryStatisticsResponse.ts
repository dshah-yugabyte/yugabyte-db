// tslint:disable
/**
 * Yugabyte Cloud
 * YugabyteDB as a Service
 *
 * The version of the OpenAPI document: v1
 * Contact: support@yugabyte.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// eslint-disable-next-line no-duplicate-imports
import type { UsageSummaryClusterData } from './UsageSummaryClusterData';
// eslint-disable-next-line no-duplicate-imports
import type { UsageSummaryInfrastructureData } from './UsageSummaryInfrastructureData';


/**
 * 
 * @export
 * @interface UsageSummaryStatisticsResponse
 */
export interface UsageSummaryStatisticsResponse  {
  /**
   * 
   * @type {UsageSummaryClusterData}
   * @memberof UsageSummaryStatisticsResponse
   */
  cluster_data?: UsageSummaryClusterData;
  /**
   * 
   * @type {UsageSummaryInfrastructureData}
   * @memberof UsageSummaryStatisticsResponse
   */
  infrastructure_data?: UsageSummaryInfrastructureData;
}


