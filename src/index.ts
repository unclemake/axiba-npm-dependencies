import * as npm from 'npm';
import util from 'axiba-util';


/**
* nodejs模块地址和启动文件
*/
type PackageObj = {
    //模块名称和版本号  axiba@1.0.0
    [key: string]: Package
};

/**
* nodejs依赖结构
*/
type Package = {
    path?: string,
    version?: string,
    main?: string,
    dependencies?: Dependencies
}

/**
* nodejs依赖结构
*/
type Dependencies = {
    [key: string]: Package
}

/**
 * 获取npm依赖
 */
class NpmDependent {


    isload = false
    npmConfig = require(process.cwd() + '/package.json')
    /**
     * 加载npm配置
     */
    private npmLoad(): Promise<void> {
        return new Promise<any>((resolve) => {
            if (!this.isload) {
                npm.load(this.npmConfig, (err?: Error, result?: any) => {
                    this.isload = true;
                    resolve();
                })
            } else {
                resolve();
            }
        })
    }


    /**
         * promise包裹回调
         * @param fun
         * @param args 命令参数
         */
    private cmd(fun, args: string[], show = true): Promise<any> {
        return new Promise<any>((resolve) => {
            this.npmLoad().then(() => {
                npm.commands[fun](args, show, (err?: Error, result?: any) => {
                    resolve(result);
                })
            })
        })
    }

    /**
    * 记录nodejs模块依赖列表
    * @param  模块名称
    */
    dependencies: {
        [key: string]: Package
    } = {}
    /**
    * 获取nodejs依赖列表
    * @param  模块名称
    */
    async ls(name: string = null): Promise<Dependencies> {
        try {

             await util.exec(`npm ls ${name} -json -long`)
            // await this.npmLoad();
            // if (!this.dependencies[name]) {
            //     npm.config.set('json', 'true');
            //     npm.config.set('long', 'true');
            //     let obj = await this.cmd('ls', name ? [name] : null);
            //     npm.config.set('json', null);
            //     npm.config.set('long', null);
            //     this.dependencies[name] = obj.dependencies[name];
            //     return obj.dependencies[name];
            // }
            // return this.dependencies[name];
        } catch (e) {
            console.log(e);
        }
    }

}


export default new NpmDependent();