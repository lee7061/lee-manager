- 添加less解析
```js
    // 新增less-loader解析
    {
        test: lessRegex,
        exclude: lessModuleRegex,
        use: getStyleLoaders({
            importLoaders: 3,
        }, 'less-loader'),
    },
    //  添加less解析model
    {
        test: lessModuleRegex,
        use: getStyleLoaders(
            {
                importLoaders: 3,
                modules: true,
                getLocalIdent: getCSSModuleLocalIdent,
            }, 'less-loader'
        ),
    },
```

- 修改antd主题颜色
```js
    // common function to get style loaders
    const getStyleLoaders = (cssOptions, preProcessor) => {
        const loaders = [
            require.resolve('style-loader'),
            {
                loader: require.resolve('css-loader'),
                options: cssOptions,
            },
            {
                // Options for PostCSS as we reference these options twice
                // Adds vendor prefixing based on your specified browser support in
                // package.json
                loader: require.resolve('postcss-loader'),
                options: {
                    // Necessary for external CSS imports to work
                    // https://github.com/facebook/create-react-app/issues/2677
                    ident: 'postcss',
                    plugins: () => [
                        require('postcss-flexbugs-fixes'),
                        require('postcss-preset-env')({
                            autoprefixer: {
                                flexbox: 'no-2009',
                            },
                            stage: 3,
                        }),
                    ],
                },
            },
        ];
        if (preProcessor) {
            // antd修改主题的样式
            if ('less-loader' === preProcessor) {
                const lessLoad = {
                    loader: require.resolve(preProcessor),
                    options: {
                        modules: false,
                        modifyVars: {
                            'primary-color': '#1DA57A',
                            'link-color': '#1DA57A',
                            'border-radius-base': '2px',
                        },
                    }
                };
                loaders.push(lessLoad);
            } else loaders.push(require.resolve(preProcessor))
        }
        return loaders;
    };
```

- less版本3.0以上可能出现不兼容 建议使用`2.7.3`
- webpack报错error:node-sass；安装node-sass失败

        1、下载与node版本相对应的.node文件，下载地址：https://github.com/sass/node-sass/releases
        2、设置环境变量（windows系统）
           yarn config set sass-binary-path e:/web/win32-x64-48_binding.node
        3、yarn add --dev node-sass
        4、如果出现以下错误提示
            gyp verb ensuring that file exists: C:\Python27\python.exe
            gyp ERR! configure error
            gyp ERR! stack Error: Can't find Python executable "D:\Python\python.EXE"
        发生这种错误说明你的python环境变量与node环境变量不在同一Path中，所以需要设置环境变量到同一Path参数中
