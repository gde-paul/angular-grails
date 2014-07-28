grails.servlet.version = "3.0"
grails.project.class.dir = "target/classes"
grails.project.test.class.dir = "target/test-classes"
grails.project.test.reports.dir = "target/test-reports"
grails.project.work.dir = "target/work"
grails.project.target.level = 1.6
grails.project.source.level = 1.6

grails.project.fork = [
        test: [maxMemory: 768, minMemory: 64, debug: false, maxPerm: 256, daemon:true],
        run: [maxMemory: 768, minMemory: 64, debug: false, maxPerm: 256, forkReserve:false],
        war: [maxMemory: 768, minMemory: 64, debug: false, maxPerm: 256, forkReserve:false],
        console: [maxMemory: 768, minMemory: 64, debug: false, maxPerm: 256]
]

grails.project.dependency.resolver = "maven"
grails.project.dependency.resolution = {

    inherits "global"
    log "error"
    checksums true
    legacyResolve false

    String gebVersion = '0.9.2'
    String seleniumVersion = '2.42.2'
    String spockVersion = '0.7'

    repositories {
        grailsPlugins()
        grailsHome()
        mavenLocal()
        grailsCentral()
        mavenCentral()
    }

    dependencies {
        test "org.seleniumhq.selenium:selenium-support:$seleniumVersion"
        test "org.gebish:geb-spock:${gebVersion}"
        test "org.seleniumhq.selenium:selenium-firefox-driver:$seleniumVersion"
    }

    plugins {
        build ":tomcat:7.0.54"

        compile ":scaffolding:2.1.2"
        compile ':cache:1.1.7'
        compile ":asset-pipeline:1.9.2"

        compile ":fields:1.3"

        runtime ":hibernate4:4.3.5.4"
        runtime ":database-migration:1.4.0"

        compile ':sass-asset-pipeline:1.8.0'
        compile ":angular-template-asset-pipeline:1.2.4"
        compile ":angular-annotate-asset-pipeline:1.0.2"

        test ":geb:$gebVersion"
    }
}
