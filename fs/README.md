# 文件模板

## mode 参数 文件权限：
    默认：0666
    文件权限指的是POSIX操作系统中对文件读取和访问权限的规范，通常用一个八进制数来表示。
    例如 0754 表示
    文件所有者权限是 7 （读，写，执行）
    同组的用户权限是 5 （读，执行）
    其他用户的权限是 4 （读）
    写成字符表示就是  -rwxr-xr–

## 关于字符的注解：
    - rwx rwx rwx

    第一个字符代表文件属性 ： 横杠 = 文件   d = 目录    l = 链接
    后面的字符，三个为一组，分别代表 文件所有者，同组用户，其他用户。
    r = read(4)    w = write(2)   x = 执行(1)
    将三项的 下标数字加起来 就是权限的数字代号了。

## 文件描述符 fd:
    文件描述符是一个非负整数，表示操作系统内核为当前进程所维护的打开文件的记录表索引。

    关于异步和同步I/O：
    node.js 的异步变成接口习惯以函数的最后一个参数为回调函数，通常一个函数只有一个回调函数。
    回调函数的实际参数中第一个是err，其余的参数是其他返回的内容。
    如果没有发生错误，err的值是null 或 undefined。如果发生错误，err通常是Error对象的实例。

    与同步I/O函数不同，node.js中异步函数大多没有返回值。

## 关于文件的三个时间：
    mtime     修改时间,表示文件被修改的时间和日期。文件的内容发生改变时，文件的修改日期将随之更新
    atime      访问时间,表示文件最后被访问的时间和日期。 每一次应用程序或服务使用系统调用，读取一个文件时，文件的访问时间都会更新。
    ctime(chang time) :最后一次改变文件或目录(改变的是原数据即:属性)的时间

## 关于读取文件的方式：
    与stat方法的最大区别就是，
    stat是直接通过文件路径来获取文件，并读取信息的。
    而fstat方法是通过open之类的方法打开文件，然后通过传递过来的fd去获取文件，并读取信息。

## 涉及到文件创建的操作，会遇到一个文件开启方式的参数 flag，备选值如下：
    'r' -   以读取模式打开文件。
    'r+' – 以读写模式打开文件。
    'rs' – 使用同步模式打开并读取文件。指示操作系统忽略本地文件系统缓存。
    'rs+' – 以同步的方式打开，读取 并 写入文件。
    注意：这不是让fs.open变成同步模式的阻塞操作。如果想要同步模式请使用fs.openSync()。

    'w' – 以读取模式打开文件，如果文件不存在则创建
    'wx' – 和 'w' 模式一样，如果文件存在则返回失败
    'w+' – 以读写模式打开文件，如果文件不存在则创建
    'wx+' – 和 'w+' 模式一样，如果文件存在则返回失败

    'a' – 以追加模式打开文件，如果文件不存在则创建
    'ax' – 和 'a' 模式一样，如果文件存在则返回失败
    'a+' – 以读取追加模式打开文件，如果文件不存在则创建
    'ax+' – 和 'a+' 模式一样，如果文件存在则返回失败