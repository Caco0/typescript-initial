/**
 * Decorators
 */

function apiVersion(version: any) {
  return (target: any) => {
    Object.assign(target.prototype, { __version: version });
  };
}
@apiVersion("1.10")
class Api {}

const api = new Api();
console.log(`Version: ${api.__version}`);
