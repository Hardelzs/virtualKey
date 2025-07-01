// frida -U -f au.gov.homeaffairs.eta -l script.js




//Disable integrity checks
setTimeout(function() {
	
	Java.perform(function() {
		
let C2075oE = Java.use("o.ab");
C2075oE.cv.implementation = function(){
    console.log('bypassing integrity check');
    //let ret = this.cv();
let EnumC3057db = Java.use("o.db");
    
   
    var NO_ISSUE = EnumC3057db.NO_ISSUE.value;
    var ISSUES_FOUND = EnumC3057db.ISSUES_FOUND.value;
    var NOT_PERFORMED = EnumC3057db.NOT_PERFORMED.value;
    console.log('integrity check bypassed ' + NO_ISSUE);
    return NO_ISSUE;
};  

C2075oE.cx.implementation = function(){
   console.log('bypassing integrity check2');
    //let ret = this.cv();
let EnumC3057db = Java.use("o.db");
    
   
    var NO_ISSUE = EnumC3057db.NO_ISSUE.value;
    var ISSUES_FOUND = EnumC3057db.ISSUES_FOUND.value;
    var NOT_PERFORMED = EnumC3057db.NOT_PERFORMED.value;
    console.log('integrity check bypassed ' + NO_ISSUE);
    return NO_ISSUE;
};


	

let R = Java.use("o.Y");
R.bl.implementation = function(){
    console.log('Nfc control is called');
    let ret = this.bl();
    console.log('Ntf check original result: ' + ret);
    return true;
};

});


	
	
	





	
},0);


	Java.perform(function() {
	
	
let SplashActivity = Java.use("aero.sita.tam.eta.ui.splash.SplashActivity");
SplashActivity.a.overload('[Ljava.lang.Object;', 'int', 'int', 'int').implementation = function(objArr, i, i2, i3){
    console.log('a is called i:'+i +" i2:" + i2 + " i3:"+i3);
	var i4 = i3;
	if(i==-1230616436 && i2 == 1230616441)
	{
		console.log("bypassing update")
		
        var ret = this.a(objArr, 1330260911, -1330260910, -1048233548);
	}else if (i==1330260911 && i2 == -1330260910)
    {


        var ret = this.a(objArr, 1330260911, -1330260910, -1048233548);
    }else
    var ret = this.a(objArr, 353630087, -353630085, 40067800);
    
    
    
    console.log('d ret value is ' + ret);
    return ret;
};

SplashActivity.g.implementation = function(i, b2, s, objArr){
    console.log('g is called');
    let ret = this.g(i, b2, s, objArr);
    console.log('g ret value is ' + ret);
    return ret;
};
	
});


	




	

//bypass
setTimeout(function() {
	
	Java.perform(function() {
//bypass scan chip check

let C3719q = Java.use("o.q");
C3719q.$init.implementation = function(str, str2, str3, str4, str5, str6, str7, str8, str9, str10, str11, str12, str13, str14, str15, str16, str17, str18, str19, list, str20, list2, bool, list3){
    console.log('$init is called');
	 console.log('bypassing chip scan');
	  var Boolean = Java.use('java.lang.Boolean');

  
    var booleanFalse = Boolean.$new(false);
    let ret = this.$init(str, str2, str3, str4, str5, str6, str7, str8, str9, str10, str11, str12, str13, str14, str15, str16, str17, str18, str19, list, str20, list2, booleanFalse, list3);
    console.log('$init ret value is ' + ret);
    return ret;
};
//Alter the response and bypass face scan
let C1964m = Java.use("o.s");
C1964m.$init.implementation = function(str, str2, d, bool, str3, str4, str5){
    //console.log('str: '+str);
    console.log('str2: '+str2);
    //console.log('str3: '+str3);
    console.log('str4: '+str4);
    console.log('str5: '+str5);
    console.log('d: '+d);
    console.log('bool: '+bool);
	let randomNumber = (Math.random() * (3 - 1)) + 1;
  var Boolean = Java.use('java.lang.Boolean');

  
    var booleanTrue = Boolean.$new(true);

randomNumber = parseFloat(randomNumber.toFixed(16));
	let str3new = processJsonString(str3,randomNumber)
	let javaDouble = Java.use('java.lang.Double').valueOf(randomNumber);


    let ret = this.$init(str, str2, javaDouble, booleanTrue, str3new, str4, "LIVE");
    console.log('$init ret value is ' + ret);
    return ret;
};



	
	
});


	
	
	





	
},5000);


function processJsonString(jsonString,score_frr) {
    let jsonObject = JSON.parse(jsonString);

    jsonObject.is_compliant = true;
    jsonObject.liveness_result.decision = "LIVE";
    jsonObject.liveness_result.score_frr = score_frr;
  

    let updatedJsonString = JSON.stringify(jsonObject);

    return updatedJsonString;
}





/**
 * Bypass Emulator Detection
 * @param {any} function(
 * @returns {any}
 */
Java.perform(function() {

    Java.use("android.os.Build").PRODUCT.value = "gracerltexx";
    Java.use("android.os.Build").MANUFACTURER.value = "samsung";
    Java.use("android.os.Build").BRAND.value = "samsung";
    Java.use("android.os.Build").DEVICE.value = "gracerlte";
    Java.use("android.os.Build").MODEL.value = "SM-N935F";
    Java.use("android.os.Build").HARDWARE.value = "samsungexynos8890";
    Java.use("android.os.Build").FINGERPRINT.value =
        "samsung/gracerltexx/gracerlte:8.0.0/R16NW/N935FXXS4BRK2:user/release-keys";


    try {
        Java.use("java.io.File").exists.implementation = function() {
            var name = Java.use("java.io.File").getName.call(this);
            var catched = ["qemud", "qemu_pipe", "drivers", "cpuinfo"].indexOf(name) > -1;
            if (catched) {
                console.log("the pipe " + name + " existence is hooked");
                return false;
            } else {
                return this.exists.call(this);
            }
        };
    } catch (err) {
        console.log("[-] java.io.File.exists never called [-]");
    }

    // rename the package names
    try {
        Java.use("android.app.ApplicationPackageManager").getPackageInfo.overload(
            "java.lang.String",
            "int"
        ).implementation = function(name, flag) {
            var catched = ["com.example.android.apis", "com.android.development"].indexOf(name) >
                -1;
            if (catched) {
                console.log("the package " + name + " is renamed with fake name");
                name = "fake.package.name";
            }
            return this.getPackageInfo.call(this, name, flag);
        };
    } catch (err) {
        console.log(
            "[-] ApplicationPackageManager.getPackageInfo never called [-]"
        );
    }

    // hook the `android_getCpuFamily` method
    // https://android.googlesource.com/platform/ndk/+/master/sources/android/cpufeatures/cpu-features.c#1067
    // Note: If you pass "null" as the first parameter for "Module.findExportByName" it will search in all modules
    try {
        Interceptor.attach(Module.findExportByName(null, "android_getCpuFamily"), {
            onLeave: function(retval) {
                // const int ANDROID_CPU_FAMILY_X86 = 2;
                // const int ANDROID_CPU_FAMILY_X86_64 = 5;
                if ([2, 5].indexOf(retval) > -1) {
                    // const int ANDROID_CPU_FAMILY_ARM64 = 4;
                    retval.replace(4);
                }
            },
        });
    } catch (err) {
        console.log("[-] android_getCpuFamily never called [-]");
        // TODO: trace RegisterNatives in case the libraries are stripped.
    }
});


function printByteArray(byteArray) {
    // Convert byte array to hex string
    let hexString = Array.from(byteArray, byte => ('0' + (byte & 0xFF).toString(16)).slice(-2)).join(' ');
    console.log('Hex: ' + hexString);
	console.log('Base64 pba: ' + Java.use("android.util.Base64").encodeToString(byteArray, 0));
		
    // Convert byte array to string
   // let string = String.fromCharCode.apply(null, new Uint8Array(byteArray));
	
    //console.log('String: ' + string);
}

function bypass_developerMode_check() {
    var settingSecure = Java.use('android.provider.Settings$Secure');
    settingSecure.getInt.overload('android.content.ContentResolver', 'java.lang.String', 'int').implementation = function(cr, name, flag) {
        console.log("[!] settingSecure.getInt(cr,name) : " + name);
        console.log('[+] 1.Secure.getInt(' + name + ') Bypassed');
        return 0;
    }
    settingSecure.getInt.overload('android.content.ContentResolver', 'java.lang.String').implementation = function(cr, name) {
        console.log("[!] settingSecure.getInt(cr,name) : " + name);
        console.log('[+] 2.Secure.getInt(' + name + ') Bypassed');
        return 0;
    }
    var settingGlobal = Java.use('android.provider.Settings$Global');
    settingGlobal.getInt.overload('android.content.ContentResolver', 'java.lang.String', 'int').implementation = function(cr, name, flag) {
        console.log("[!] settingGlobal.getInt(cr,name) : " + name);
        console.log('[+] 1.Global.getInt(' + name + ') Bypassed');
        return 0;
    }
    settingGlobal.getInt.overload('android.content.ContentResolver', 'java.lang.String').implementation = function(cr, name) {
        console.log("[!] settingGlobal.getInt(cr,name) : " + name);
        console.log('[+] 2.Global.getInt(' + name + ') Bypassed');
        return 0;
    }
}

// Main
Java.perform(function() {
    bypass_developerMode_check();
});


function bytes2hex(array) {
    var result = '';
    for(var i = 0; i < array.length; ++i)
        result += ('0' + (array[i] & 0xFF).toString(16)).slice(-2);
    return result;
}


/*
 * This script combines, fixes & extends a long list of other scripts, most notably including:
 *
 * - https://codeshare.frida.re/@dzonerzy/fridantiroot/
 * - https://github.com/AshenOneYe/FridaAntiRootDetection/blob/main/antiroot.js
 */


Java.perform(function() {
    var RootPackages = ["com.noshufou.android.su", "com.noshufou.android.su.elite", "eu.chainfire.supersu",
        "com.koushikdutta.superuser", "com.thirdparty.superuser", "com.yellowes.su", "com.koushikdutta.rommanager",
        "com.koushikdutta.rommanager.license", "com.dimonvideo.luckypatcher", "com.chelpus.lackypatch",
        "com.ramdroid.appquarantine", "com.ramdroid.appquarantinepro", "com.devadvance.rootcloak", "com.devadvance.rootcloakplus",
        "de.robv.android.xposed.installer", "com.saurik.substrate", "com.zachspong.temprootremovejb", "com.amphoras.hidemyroot",
        "com.amphoras.hidemyrootadfree", "com.formyhm.hiderootPremium", "com.formyhm.hideroot", "me.phh.superuser",
        "eu.chainfire.supersu.pro", "com.kingouser.com", "com.topjohnwu.magisk"
    ];

    var RootBinaries = ["su", "busybox", "supersu", "Superuser.apk", "KingoUser.apk", "SuperSu.apk", "magisk"];

    var RootProperties = {
        "ro.build.selinux": "1",
        "ro.debuggable": "0",
        "service.adb.root": "0",
        "ro.secure": "1"
    };

    var RootPropertiesKeys = [];

    for (var k in RootProperties) RootPropertiesKeys.push(k);

    var PackageManager = Java.use("android.app.ApplicationPackageManager");

    var Runtime = Java.use('java.lang.Runtime');

    var NativeFile = Java.use('java.io.File');

    var String = Java.use('java.lang.String');

    var SystemProperties = Java.use('android.os.SystemProperties');

    var BufferedReader = Java.use('java.io.BufferedReader');

    var ProcessBuilder = Java.use('java.lang.ProcessBuilder');

    var StringBuffer = Java.use('java.lang.StringBuffer');

    var loaded_classes = Java.enumerateLoadedClassesSync();

    send("Loaded " + loaded_classes.length + " classes!");

    var useKeyInfo = false;

    var useProcessManager = false;

    send("loaded: " + loaded_classes.indexOf('java.lang.ProcessManager'));

    if (loaded_classes.indexOf('java.lang.ProcessManager') != -1) {
        try {
            //useProcessManager = true;
            //var ProcessManager = Java.use('java.lang.ProcessManager');
        } catch (err) {
            send("ProcessManager Hook failed: " + err);
        }
    } else {
        send("ProcessManager hook not loaded");
    }

    var KeyInfo = null;

    if (loaded_classes.indexOf('android.security.keystore.KeyInfo') != -1) {
        try {
            //useKeyInfo = true;
            //var KeyInfo = Java.use('android.security.keystore.KeyInfo');
        } catch (err) {
            send("KeyInfo Hook failed: " + err);
        }
    } else {
        send("KeyInfo hook not loaded");
    }

    PackageManager.getPackageInfo.overload('java.lang.String', 'int').implementation = function(pname, flags) {
        var shouldFakePackage = (RootPackages.indexOf(pname) > -1);
        if (shouldFakePackage) {
            send("Bypass root check for package: " + pname);
            pname = "set.package.name.to.a.fake.one.so.we.can.bypass.it";
        }
        return this.getPackageInfo.overload('java.lang.String', 'int').call(this, pname, flags);
    };

    NativeFile.exists.implementation = function() {
        var name = NativeFile.getName.call(this);
        var shouldFakeReturn = (RootBinaries.indexOf(name) > -1);
        if (shouldFakeReturn) {
            send("Bypass return value for binary: " + name);
            return false;
        } else {
            return this.exists.call(this);
        }
    };

    var exec = Runtime.exec.overload('[Ljava.lang.String;');
    var exec1 = Runtime.exec.overload('java.lang.String');
    var exec2 = Runtime.exec.overload('java.lang.String', '[Ljava.lang.String;');
    var exec3 = Runtime.exec.overload('[Ljava.lang.String;', '[Ljava.lang.String;');
    var exec4 = Runtime.exec.overload('[Ljava.lang.String;', '[Ljava.lang.String;', 'java.io.File');
    var exec5 = Runtime.exec.overload('java.lang.String', '[Ljava.lang.String;', 'java.io.File');

    exec5.implementation = function(cmd, env, dir) {
        if (cmd.indexOf("getprop") != -1 || cmd == "mount" || cmd.indexOf("build.prop") != -1 || cmd == "id" || cmd == "sh") {
            var fakeCmd = "grep";
            send("Bypass " + cmd + " command");
            return exec1.call(this, fakeCmd);
        }
        if (cmd == "su") {
            var fakeCmd = "justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled";
            send("Bypass " + cmd + " command");
            return exec1.call(this, fakeCmd);
        }
        return exec5.call(this, cmd, env, dir);
    };

    exec4.implementation = function(cmdarr, env, file) {
        for (var i = 0; i < cmdarr.length; i = i + 1) {
            var tmp_cmd = cmdarr[i];
            if (tmp_cmd.indexOf("getprop") != -1 || tmp_cmd == "mount" || tmp_cmd.indexOf("build.prop") != -1 || tmp_cmd == "id" || tmp_cmd == "sh") {
                var fakeCmd = "grep";
                send("Bypass " + cmdarr + " command");
                return exec1.call(this, fakeCmd);
            }

            if (tmp_cmd == "su") {
                var fakeCmd = "justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled";
                send("Bypass " + cmdarr + " command");
                return exec1.call(this, fakeCmd);
            }
        }
        return exec4.call(this, cmdarr, env, file);
    };

    exec3.implementation = function(cmdarr, envp) {
        for (var i = 0; i < cmdarr.length; i = i + 1) {
            var tmp_cmd = cmdarr[i];
            if (tmp_cmd.indexOf("getprop") != -1 || tmp_cmd == "mount" || tmp_cmd.indexOf("build.prop") != -1 || tmp_cmd == "id" || tmp_cmd == "sh") {
                var fakeCmd = "grep";
                send("Bypass " + cmdarr + " command");
                return exec1.call(this, fakeCmd);
            }

            if (tmp_cmd == "su") {
                var fakeCmd = "justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled";
                send("Bypass " + cmdarr + " command");
                return exec1.call(this, fakeCmd);
            }
        }
        return exec3.call(this, cmdarr, envp);
    };

    exec2.implementation = function(cmd, env) {
        if (cmd.indexOf("getprop") != -1 || cmd == "mount" || cmd.indexOf("build.prop") != -1 || cmd == "id" || cmd == "sh") {
            var fakeCmd = "grep";
            send("Bypass " + cmd + " command");
            return exec1.call(this, fakeCmd);
        }
        if (cmd == "su") {
            var fakeCmd = "justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled";
            send("Bypass " + cmd + " command");
            return exec1.call(this, fakeCmd);
        }
        return exec2.call(this, cmd, env);
    };

    exec.implementation = function(cmd) {
        for (var i = 0; i < cmd.length; i = i + 1) {
            var tmp_cmd = cmd[i];
            if (tmp_cmd.indexOf("getprop") != -1 || tmp_cmd == "mount" || tmp_cmd.indexOf("build.prop") != -1 || tmp_cmd == "id" || tmp_cmd == "sh") {
                var fakeCmd = "grep";
                send("Bypass " + cmd + " command");
                return exec1.call(this, fakeCmd);
            }

            if (tmp_cmd == "su") {
                var fakeCmd = "justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled";
                send("Bypass " + cmd + " command");
                return exec1.call(this, fakeCmd);
            }
        }

        return exec.call(this, cmd);
    };

    exec1.implementation = function(cmd) {
        if (cmd.indexOf("getprop") != -1 || cmd == "mount" || cmd.indexOf("build.prop") != -1 || cmd == "id" || cmd == "sh") {
            var fakeCmd = "grep";
            send("Bypass " + cmd + " command");
            return exec1.call(this, fakeCmd);
        }
        if (cmd == "su") {
            var fakeCmd = "justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled";
            send("Bypass " + cmd + " command");
            return exec1.call(this, fakeCmd);
        }
        return exec1.call(this, cmd);
    };

    String.contains.implementation = function(name) {
        if (name == "test-keys") {
            send("Bypass test-keys check");
            return false;
        }
        return this.contains.call(this, name);
    };

    var get = SystemProperties.get.overload('java.lang.String');

    get.implementation = function(name) {
        if (RootPropertiesKeys.indexOf(name) != -1) {
            send("Bypass " + name);
            return RootProperties[name];
        }
        return this.get.call(this, name);
    };

    Interceptor.attach(Module.findExportByName("libc.so", "fopen"), {
        onEnter: function(args) {
            var path = Memory.readCString(args[0]);
            path = path.split("/");
            var executable = path[path.length - 1];
            var shouldFakeReturn = (RootBinaries.indexOf(executable) > -1)
            if (shouldFakeReturn) {
                Memory.writeUtf8String(args[0], "/notexists");
                send("Bypass native fopen");
            }
        },
        onLeave: function(retval) {

        }
    });

    Interceptor.attach(Module.findExportByName("libc.so", "system"), {
        onEnter: function(args) {
            var cmd = Memory.readCString(args[0]);
            send("SYSTEM CMD: " + cmd);
            if (cmd.indexOf("getprop") != -1 || cmd == "mount" || cmd.indexOf("build.prop") != -1 || cmd == "id") {
                send("Bypass native system: " + cmd);
                Memory.writeUtf8String(args[0], "grep");
            }
            if (cmd == "su") {
                send("Bypass native system: " + cmd);
                Memory.writeUtf8String(args[0], "justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled");
            }
        },
        onLeave: function(retval) {

        }
    });

    /*

    TO IMPLEMENT:

    Exec Family

    int execl(const char *path, const char *arg0, ..., const char *argn, (char *)0);
    int execle(const char *path, const char *arg0, ..., const char *argn, (char *)0, char *const envp[]);
    int execlp(const char *file, const char *arg0, ..., const char *argn, (char *)0);
    int execlpe(const char *file, const char *arg0, ..., const char *argn, (char *)0, char *const envp[]);
    int execv(const char *path, char *const argv[]);
    int execve(const char *path, char *const argv[], char *const envp[]);
    int execvp(const char *file, char *const argv[]);
    int execvpe(const char *file, char *const argv[], char *const envp[]);

    */


    BufferedReader.readLine.overload('boolean').implementation = function() {
        var text = this.readLine.overload('boolean').call(this);
        if (text === null) {
            // just pass , i know it's ugly as hell but test != null won't work :(
        } else {
            var shouldFakeRead = (text.indexOf("ro.build.tags=test-keys") > -1);
            if (shouldFakeRead) {
                send("Bypass build.prop file read");
                text = text.replace("ro.build.tags=test-keys", "ro.build.tags=release-keys");
            }
        }
        return text;
    };

    var executeCommand = ProcessBuilder.command.overload('java.util.List');

    ProcessBuilder.start.implementation = function() {
        var cmd = this.command.call(this);
        var shouldModifyCommand = false;
        for (var i = 0; i < cmd.size(); i = i + 1) {
            var tmp_cmd = cmd.get(i).toString();
            if (tmp_cmd.indexOf("getprop") != -1 || tmp_cmd.indexOf("mount") != -1 || tmp_cmd.indexOf("build.prop") != -1 || tmp_cmd.indexOf("id") != -1) {
                shouldModifyCommand = true;
            }
        }
        if (shouldModifyCommand) {
            send("Bypass ProcessBuilder " + cmd);
            this.command.call(this, ["grep"]);
            return this.start.call(this);
        }
        if (cmd.indexOf("su") != -1) {
            send("Bypass ProcessBuilder " + cmd);
            this.command.call(this, ["justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled"]);
            return this.start.call(this);
        }

        return this.start.call(this);
    };

    if (useProcessManager) {
        var ProcManExec = ProcessManager.exec.overload('[Ljava.lang.String;', '[Ljava.lang.String;', 'java.io.File', 'boolean');
        var ProcManExecVariant = ProcessManager.exec.overload('[Ljava.lang.String;', '[Ljava.lang.String;', 'java.lang.String', 'java.io.FileDescriptor', 'java.io.FileDescriptor', 'java.io.FileDescriptor', 'boolean');

        ProcManExec.implementation = function(cmd, env, workdir, redirectstderr) {
            var fake_cmd = cmd;
            for (var i = 0; i < cmd.length; i = i + 1) {
                var tmp_cmd = cmd[i];
                if (tmp_cmd.indexOf("getprop") != -1 || tmp_cmd == "mount" || tmp_cmd.indexOf("build.prop") != -1 || tmp_cmd == "id") {
                    var fake_cmd = ["grep"];
                    send("Bypass " + cmdarr + " command");
                }

                if (tmp_cmd == "su") {
                    var fake_cmd = ["justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled"];
                    send("Bypass " + cmdarr + " command");
                }
            }
            return ProcManExec.call(this, fake_cmd, env, workdir, redirectstderr);
        };

        ProcManExecVariant.implementation = function(cmd, env, directory, stdin, stdout, stderr, redirect) {
            var fake_cmd = cmd;
            for (var i = 0; i < cmd.length; i = i + 1) {
                var tmp_cmd = cmd[i];
                if (tmp_cmd.indexOf("getprop") != -1 || tmp_cmd == "mount" || tmp_cmd.indexOf("build.prop") != -1 || tmp_cmd == "id") {
                    var fake_cmd = ["grep"];
                    send("Bypass " + cmdarr + " command");
                }

                if (tmp_cmd == "su") {
                    var fake_cmd = ["justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled"];
                    send("Bypass " + cmdarr + " command");
                }
            }
            return ProcManExecVariant.call(this, fake_cmd, env, directory, stdin, stdout, stderr, redirect);
        };
    }

    if (useKeyInfo) {
        KeyInfo.isInsideSecureHardware.implementation = function() {
            send("Bypass isInsideSecureHardware");
            return true;
        }
    }

});

const commonPaths = [
    "/data/local/bin/su",
    "/data/local/su",
    "/data/local/xbin/su",
    "/dev/com.koushikdutta.superuser.daemon/",
    "/sbin/su",
    "/system/app/Superuser.apk",
    "/system/bin/failsafe/su",
    "/system/bin/su",
    "/su/bin/su",
    "/system/etc/init.d/99SuperSUDaemon",
    "/system/sd/xbin/su",
    "/system/xbin/busybox",
    "/system/xbin/daemonsu",
    "/system/xbin/su",
    "/system/sbin/su",
    "/vendor/bin/su",
    "/cache/su",
    "/data/su",
    "/dev/su",
    "/system/bin/.ext/su",
    "/system/usr/we-need-root/su",
    "/system/app/Kinguser.apk",
    "/data/adb/magisk",
    "/sbin/.magisk",
    "/cache/.disable_magisk",
    "/dev/.magisk.unblock",
    "/cache/magisk.log",
    "/data/adb/magisk.img",
    "/data/adb/magisk.db",
    "/data/adb/magisk_simple",
    "/init.magisk.rc",
    "/system/xbin/ku.sud",
    "/data/adb/ksu",
    "/data/adb/ksud"
];

const ROOTmanagementApp = [
    "com.noshufou.android.su",
    "com.noshufou.android.su.elite",
    "eu.chainfire.supersu",
    "com.koushikdutta.superuser",
    "com.thirdparty.superuser",
    "com.yellowes.su",
    "com.koushikdutta.rommanager",
    "com.koushikdutta.rommanager.license",
    "com.dimonvideo.luckypatcher",
    "com.chelpus.lackypatch",
    "com.ramdroid.appquarantine",
    "com.ramdroid.appquarantinepro",
    "com.topjohnwu.magisk",
    "me.weishu.kernelsu"
];



function stackTraceHere(isLog){
    var Exception = Java.use('java.lang.Exception');
    var Log = Java.use('android.util.Log');
    var stackinfo = Log.getStackTraceString(Exception.$new())
    if(isLog){
        console.log(stackinfo)
    }else{
        return stackinfo
    }
}

function stackTraceNativeHere(isLog){
    var backtrace = Thread.backtrace(this.context, Backtracer.ACCURATE)
    .map(DebugSymbol.fromAddress)
    .join("\n\t");
    console.log(backtrace)
}


function bypassJavaFileCheck(){
    var UnixFileSystem = Java.use("java.io.UnixFileSystem")
    UnixFileSystem.checkAccess.implementation = function(file,access){

        var stack = stackTraceHere(false)

        const filename = file.getAbsolutePath();

        if (filename.indexOf("magisk") >= 0) {
            console.log("Anti Root Detect - check file: " + filename)
            return false;
        }

        if (commonPaths.indexOf(filename) >= 0) {
            console.log("Anti Root Detect - check file: " + filename)
            return false;
        }

        return this.checkAccess(file,access)
    }
}

function bypassNativeFileCheck(){
    var fopen = Module.findExportByName("libc.so","fopen")
    Interceptor.attach(fopen,{
        onEnter:function(args){
            this.inputPath = args[0].readUtf8String()
        },
        onLeave:function(retval){
            if(retval.toInt32() != 0){
                if (commonPaths.indexOf(this.inputPath) >= 0) {
                    console.log("Anti Root Detect - fopen : " + this.inputPath)
                    retval.replace(ptr(0x0))
                }
            }
        }
    })

    var access = Module.findExportByName("libc.so","access")
    Interceptor.attach(access,{
        onEnter:function(args){
            this.inputPath = args[0].readUtf8String()
        },
        onLeave:function(retval){
            if(retval.toInt32()==0){
                if(commonPaths.indexOf(this.inputPath) >= 0){
                    console.log("Anti Root Detect - access : " + this.inputPath)
                    retval.replace(ptr(-1))
                }
            }
        }
    })
}

function setProp(){
    var Build = Java.use("android.os.Build")
    var TAGS = Build.class.getDeclaredField("TAGS")
    TAGS.setAccessible(true)
    TAGS.set(null,"release-keys")

    var FINGERPRINT = Build.class.getDeclaredField("FINGERPRINT")
    FINGERPRINT.setAccessible(true)
    FINGERPRINT.set(null,"google/crosshatch/crosshatch:10/QQ3A.200805.001/6578210:user/release-keys")

    // Build.deriveFingerprint.inplementation = function(){
    //     var ret = this.deriveFingerprint() //该函数无法通过反射调用
    //     console.log(ret)
    //     return ret
    // }

    var system_property_get = Module.findExportByName("libc.so", "__system_property_get")
    Interceptor.attach(system_property_get,{
        onEnter(args){
            this.key = args[0].readCString()
            this.ret = args[1]
        },
        onLeave(ret){
            if(this.key == "ro.build.fingerprint"){
                var tmp = "google/crosshatch/crosshatch:10/QQ3A.200805.001/6578210:user/release-keys"
                var p = Memory.allocUtf8String(tmp)
                Memory.copy(this.ret,p,tmp.length+1)
            }
        }
    })

}

//android.app.PackageManager
function bypassRootAppCheck(){
    var ApplicationPackageManager = Java.use("android.app.ApplicationPackageManager")
    ApplicationPackageManager.getPackageInfo.overload('java.lang.String', 'int').implementation = function(str,i){
        // console.log(str)
        if (ROOTmanagementApp.indexOf(str) >= 0) {
            console.log("Anti Root Detect - check package : " + str)
            str = "ashen.one.ye.not.found"
        }
        return this.getPackageInfo(str,i)
    }

    //shell pm check
}

function bypassShellCheck(){
    var String = Java.use('java.lang.String')

    var ProcessImpl = Java.use("java.lang.ProcessImpl")
    ProcessImpl.start.implementation = function(cmdarray,env,dir,redirects,redirectErrorStream){

        if(cmdarray[0] == "mount"){
            console.log("Anti Root Detect - Shell : " + cmdarray.toString())
            arguments[0] = Java.array('java.lang.String',[String.$new("")])
            return ProcessImpl.start.apply(this,arguments)
        }

        if(cmdarray[0] == "getprop"){
            console.log("Anti Root Detect - Shell : " + cmdarray.toString())
            const prop = [
                "ro.secure",
                "ro.debuggable"
            ];
            if(prop.indexOf(cmdarray[1]) >= 0){
                arguments[0] = Java.array('java.lang.String',[String.$new("")])
                return ProcessImpl.start.apply(this,arguments)
            }
        }

        if(cmdarray[0].indexOf("which") >= 0){
            const prop = [
                "su"
            ];
            if(prop.indexOf(cmdarray[1]) >= 0){
                console.log("Anti Root Detect - Shell : " + cmdarray.toString())
                arguments[0] = Java.array('java.lang.String',[String.$new("")])
                return ProcessImpl.start.apply(this,arguments)
            }
        }

        return ProcessImpl.start.apply(this,arguments)
    }
}

// Script to bypass FLAG_SECURE using Frida
Java.perform(function() {
    // Obtain a reference to the current Android Activity class
    var Window = Java.use("android.view.Window");
    
    // Hook the setFlags method of the Window class
    Window.setFlags.implementation = function(flags, mask) {
        // Check if the FLAG_SECURE is being set
        var FLAG_SECURE = 0x00002000; // Constant value for FLAG_SECURE
        
        // Remove the FLAG_SECURE from flags and mask
        if ((flags & FLAG_SECURE) == FLAG_SECURE) {
            flags &= ~FLAG_SECURE;
            mask &= ~FLAG_SECURE;
        }
        
        // Call the original setFlags method with modified parameters
        this.setFlags(flags, mask);
    };
});

Java.perform(function () {
    var Activity = Java.use('android.app.Activity');
    var RunnableInterface = Java.use('java.lang.Runnable');
    var Button = Java.use('android.widget.Button');

    var runCount = 0; // Initialize the counter

    // Hook into the Activity's onResume method
    Activity.onResume.implementation = function () {
        // Call the original onResume method
        this.onResume();

        var activity = this;

        if (runCount < 8) {
            runCount++;

            // Create a new Runnable to execute code on the UI thread
            var MyRunnable = Java.registerClass({
                name: 'com.example.MyRunnable',
                implements: [RunnableInterface],
                methods: {
                    run: function () {
                        try {
                            // Get the root view of the activity
                            var rootView = activity.getWindow().getDecorView();

                            // Find the Agree button using its resource ID
                            var buttonResName = "2131297252"; // Replace with the correct resource name if needed
                            var buttonId = activity.getResources().getIdentifier(buttonResName, "id", activity.getPackageName());
                            var agreeButtonView = rootView.findViewById(buttonId);

                            if (agreeButtonView != null) {
                                // Cast the View to a Button
                                var agreeButton = Java.cast(agreeButtonView, Button);

                                // Invoke performClick() on the Agree button
                                agreeButton.performClick();
                            } else {
                            }
                        } catch (e) {
                            console.log("Error inside run(): " + e);
                        }
                    }
                }
            });

            // Run the Runnable instance on the UI thread
            activity.runOnUiThread(MyRunnable.$new());
        }
    };
});

console.log("Attach")
bypassNativeFileCheck()
bypassJavaFileCheck()
setProp()
bypassRootAppCheck()
bypassShellCheck()


